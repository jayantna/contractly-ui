
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contracts } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContractCard from '@/components/ContractCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, PlusSquare } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStatus, setActiveStatus] = useState('all');
  
  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          contract.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (contract.customerName?.toLowerCase() || '').includes(searchQuery.toLowerCase());
                          
    const matchesStatus = activeStatus === 'all' || contract.status === activeStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-contractly-blue mb-4 md:mb-0">
              Your Contracts
            </h1>
            
            <Button 
              className="bg-contractly-purple hover:bg-contractly-purple/90" 
              onClick={() => navigate('/create-contract')}
            >
              <PlusSquare className="h-4 w-4 mr-2" />
              New Contract
            </Button>
          </div>
          
          <div className="mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search contracts..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" value={activeStatus} onValueChange={setActiveStatus}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="breached">Breached</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {filteredContracts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContracts.map((contract) => (
                <ContractCard key={contract.id} contract={contract} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 mb-4">No contracts found.</p>
              <Button 
                variant="outline" 
                onClick={() => navigate('/templates')}
              >
                Browse Templates
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
