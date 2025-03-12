import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { contractTemplates } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAccount, useWriteContract } from 'wagmi';
import { parseEther, Address } from 'viem';
import {delivery} from '@/abis/Delivery';
import { monadTestnet } from 'viem/chains';
import { useWatchContractEvent } from 'wagmi'


const CreateContract = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const queryParams = new URLSearchParams(location.search);
  const templateIdParam = queryParams.get('templateId');
  const { address } = useAccount();
  const { data, error, isError, isPending, writeContract } = useWriteContract();
  
  const [formData, setFormData] = useState({
    title: '',
    templateId: templateIdParam || '',
    brandName: 'Your Brand',
    penaltyAmount: 10,
    maxDays: 5,
    terms: '',
    deliveryDate: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
    customerAddress: '0xb2042d5007e42c081218f21ff91b5ab186e77ab2',
    epochTime: '',
    awbNumber: '123'
  });
  
  useEffect(() => {
    if (formData.templateId) {
      const selectedTemplate = contractTemplates.find(t => t.id === formData.templateId);
      if (selectedTemplate) {
        setFormData(prev => ({
          ...prev,
          title: prev.title || `${selectedTemplate.title} Contract`,
          terms: selectedTemplate.defaultTerms
        }));
      }
    }
  }, [formData.templateId]);

  useEffect(() => {
    console.log('address:', address);
  }, [address]);

  useEffect(() => {
    if(data && !isError){
      console.log('Transaction hash:', data);
    }
    if(isError){
      console.log('Error:', error);
    }
    if(isPending){
      console.log('Pending...');
    }
  }, [data, isError, isPending, error]);

  useWatchContractEvent({
    address: delivery.contractAddress as Address,
    abi: delivery.abi,
    eventName: 'DeliveryCreated',
    onLogs: (logs) => {
      console.log('event logs:', logs);
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Prevent negative numbers for penaltyAmount
    if (name === 'penaltyAmount' && Number(value) < 0) {
      return; // Do not update state if the value is negative
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateStakeAmount = () => {
    return formData.penaltyAmount * formData.maxDays;
  };

  const convertToUnixTimestamp = (dateString: string): number => {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
    return Math.floor(date.getTime() / 1000); // Convert to Unix timestamp
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('formData:', formData);
    const deliveryDateTimestamp = convertToUnixTimestamp(formData.deliveryDate);
    console.log('Delivery Date Timestamp:', deliveryDateTimestamp, typeof deliveryDateTimestamp);
    const epochTimeTimestamp = parseInt(formData.epochTime);
    console.log('Epoch Time Timestamp:', epochTimeTimestamp, typeof epochTimeTimestamp);
    const penaltyAmountWei = parseEther(formData.penaltyAmount.toString());
    console.log('Penalty Amount in Wei:', penaltyAmountWei, typeof penaltyAmountWei);
    const awbNumber = parseInt(formData.awbNumber)
    console.log('AWB Number: ', awbNumber, typeof awbNumber);
    // Here you would handle the contract creation, connecting to wallet, etc.
    writeContract({
      abi: delivery.abi,
      functionName: 'createDelivery',
      address: delivery.contractAddress as Address,
      account: address,
      args: [
        epochTimeTimestamp,
        penaltyAmountWei, 
        formData.customerAddress,
        awbNumber,
      ],
      value: penaltyAmountWei,
      chain: monadTestnet,
    })
    toast({
      title: "Contract created successfully!",
      description: "You can now share this contract with your customer.",
    });
    // navigate('/dashboard');
  };

  const handleBreach = () => {
    writeContract({
      abi: delivery.abi,
      functionName: 'breachAgreement',
      address: delivery.contractAddress as Address,
      account: address,
      chain: monadTestnet,
      args: [4,address]
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate(-1)}
              className="mr-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold text-contractly-blue">
              Create New Contract
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contract Details</CardTitle>
                  <CardDescription>
                    Fill out the details of your delivery guarantee contract
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Contract Title</Label>
                        <Input
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="e.g., Premium Product Delivery Guarantee"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="templateId">Template</Label>
                        <Select
                          value={formData.templateId}
                          onValueChange={(value) => handleSelectChange('templateId', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a template" />
                          </SelectTrigger>
                          <SelectContent>
                            {contractTemplates.map((template) => (
                              <SelectItem key={template.id} value={template.id}>
                                {template.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="brandName">Brand Name</Label>
                        <Input
                          id="brandName"
                          name="brandName"
                          value={formData.brandName}
                          onChange={handleInputChange}
                          placeholder="Your brand name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="brandName">Customer Address</Label>
                        <Input
                          id="brandName"
                          name="customerAddress"
                          value={formData.customerAddress}
                          onChange={handleInputChange}
                          placeholder="Customer Address"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="brandName">AWB Number</Label>
                        <Input
                          id="awbNumber"
                          name="awbNumber"
                          type='number'
                          value={formData.awbNumber}
                          onChange={handleInputChange}
                          placeholder="AWB Number"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="penaltyAmount">Penalty Amount (MON)</Label>
                          <Input
                            id="penaltyAmount"
                            name="penaltyAmount"
                            type="number"
                            value={formData.penaltyAmount}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="deliveryDate">Expected Delivery Date</Label>
                          <Input
                            id="deliveryDate"
                            name="deliveryDate"
                            type="date"
                            value={formData.deliveryDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="epochTime">Epoch time</Label>
                          <Input
                            id="epochTime"
                            name="epochTime"
                            type="number"
                            value={formData.epochTime}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>                      
                      <div>
                        <Label htmlFor="terms">Contract Terms</Label>
                        <Textarea
                          id="terms"
                          name="terms"
                          value={formData.terms}
                          onChange={handleInputChange}
                          rows={6}
                          placeholder="Describe the specific terms and conditions of this contract"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-contractly-teal hover:bg-contractly-teal/90">
                      Create Contract & Stake Funds
                    </Button>
                    <Button type="button" className="w-full bg-contractly-teal hover:bg-contractly-teal/90"
                      onClick={handleBreach}
                    >
                      Breach agreement
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500">Template</p>
                    <p className="font-medium">
                      {formData.templateId 
                        ? contractTemplates.find(t => t.id === formData.templateId)?.title 
                        : 'No template selected'}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Penalty Structure</p>
                    <p className="font-medium">
                      ${formData.penaltyAmount} per day, up to {formData.maxDays} days
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">Required Stake Amount</p>
                    <p className="text-2xl font-bold">${calculateStakeAmount()}</p>
                    <p className="text-xs text-gray-500">
                      Maximum penalty: ${formData.penaltyAmount} × {formData.maxDays} days
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg flex items-start">
                    <Wallet className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800">Wallet Connection Required</p>
                      <p className="text-sm text-blue-600">
                        You'll need to connect your wallet to stake funds for this contract.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Smart Contract Enforcement</p>
                      <p className="text-sm text-green-600">
                        Penalties will be automatically paid to the customer if delivery is delayed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateContract;
