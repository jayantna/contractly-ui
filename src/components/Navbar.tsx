
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FilePenLine, PlusSquare, Wallet } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FilePenLine className="h-6 w-6 text-contractly-purple" />
          <h1 className="text-xl font-bold text-contractly-blue" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Contractly
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-contractly-blue" 
            onClick={() => navigate('/templates')}
          >
            Templates
          </Button>
          <Button 
            variant="ghost" 
            className="text-contractly-blue" 
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </Button>
          <Button 
            variant="ghost" 
            className="text-contractly-blue" 
            onClick={() => navigate('/transactions')}
          >
            Transactions
          </Button>
          <Button 
            variant="outline" 
            className="text-contractly-purple border-contractly-purple" 
            onClick={() => navigate('/create-contract')}
          >
            <PlusSquare className="h-4 w-4 mr-2" />
            New Contract
          </Button>
          <Button 
            variant="default" 
            className="bg-contractly-teal hover:bg-contractly-teal/90"
          >
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
