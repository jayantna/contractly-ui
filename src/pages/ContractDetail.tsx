
import { useParams, useNavigate } from 'react-router-dom';
import { contracts, transactions } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatusBadge from '@/components/StatusBadge';
import TransactionItem from '@/components/TransactionItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, FileText, Share2, Shield, Timer, Wallet } from 'lucide-react';
import { formatDate, formatDateTime, shortenAddress, calculateDaysRemaining } from '@/lib/utils';

const ContractDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const contract = contracts.find(c => c.id === id);
  
  if (!contract) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-contractly-blue mb-6">
              Contract Not Found
            </h1>
            <p className="mb-6">The contract you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/dashboard')}>
              Return to Dashboard
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const contractTransactions = transactions.filter(t => t.contractId === id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/dashboard')}
              className="mr-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold text-contractly-blue">
              Contract Details
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <StatusBadge status={contract.status} className="mb-2" />
                    <CardTitle className="text-2xl">{contract.title}</CardTitle>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Brand</p>
                      <p className="font-medium">{contract.brandName}</p>
                      <p className="text-xs text-gray-500">
                        {shortenAddress(contract.brandWallet)}
                      </p>
                    </div>
                    
                    {contract.customerName && (
                      <div>
                        <p className="text-sm text-gray-500">Customer</p>
                        <p className="font-medium">{contract.customerName}</p>
                        {contract.customerWallet && (
                          <p className="text-xs text-gray-500">
                            {shortenAddress(contract.customerWallet)}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Daily Penalty</p>
                      <p className="font-medium">${contract.penaltyAmount}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Max Days of Delay</p>
                      <p className="font-medium">{contract.maxDays} days</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Total Stake</p>
                      <p className="font-medium">${contract.stakeAmount}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Created On</p>
                      <p className="font-medium">{formatDate(contract.createdAt)}</p>
                    </div>
                    
                    {contract.deliveryDate && (
                      <div>
                        <p className="text-sm text-gray-500">Expected Delivery</p>
                        <p className="font-medium">{formatDate(contract.deliveryDate)}</p>
                        {contract.status === 'active' && (
                          <div className="flex items-center mt-1">
                            <Timer className="h-4 w-4 text-amber-500 mr-1" />
                            <p className="text-xs text-amber-500">
                              {calculateDaysRemaining(contract.deliveryDate)} days remaining
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <FileText className="h-5 w-5 text-contractly-blue mr-2" />
                      <h3 className="font-bold text-lg">Contract Terms</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="whitespace-pre-line">{contract.terms}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                  {contractTransactions.length > 0 ? (
                    <div>
                      {contractTransactions.map((transaction) => (
                        <TransactionItem 
                          key={transaction.id} 
                          transaction={transaction} 
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">No transactions found for this contract.</p>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6 sticky top-8">
                <CardHeader>
                  <CardTitle>Contract Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-500">Current Status</p>
                      <StatusBadge status={contract.status} className="mt-1" />
                    </div>
                    
                    {contract.status === 'active' && contract.deliveryDate && (
                      <div>
                        <p className="text-sm text-gray-500">Delivery Deadline</p>
                        <div className="flex items-center mt-1">
                          <Calendar className="h-5 w-5 text-contractly-blue mr-2" />
                          <div>
                            <p className="font-medium">{formatDate(contract.deliveryDate)}</p>
                            <p className="text-xs text-amber-500">
                              {calculateDaysRemaining(contract.deliveryDate)} days remaining
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {contract.status === 'completed' && contract.completedDate && (
                      <div>
                        <p className="text-sm text-gray-500">Completed On</p>
                        <p className="font-medium">{formatDate(contract.completedDate)}</p>
                      </div>
                    )}
                    
                    <div>
                      <p className="text-sm text-gray-500">Staked Amount</p>
                      <div className="flex items-center mt-1">
                        <Shield className="h-5 w-5 text-contractly-purple mr-2" />
                        <p className="font-medium">${contract.stakeAmount}</p>
                      </div>
                    </div>
                    
                    {contract.status === 'pending' && (
                      <Button className="w-full bg-contractly-teal hover:bg-contractly-teal/90">
                        <Wallet className="h-4 w-4 mr-2" />
                        Connect Wallet & Sign
                      </Button>
                    )}
                    
                    {contract.status === 'active' && (
                      <Button variant="outline" className="w-full">
                        Mark as Delivered
                      </Button>
                    )}
                    
                    {contract.status === 'breached' && (
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm text-red-800">
                          This contract was breached due to missed delivery deadline. Penalty has been paid to the customer.
                        </p>
                      </div>
                    )}
                    
                    {contract.status === 'completed' && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-green-800">
                          This contract was successfully completed and all terms were satisfied.
                        </p>
                      </div>
                    )}
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

export default ContractDetail;
