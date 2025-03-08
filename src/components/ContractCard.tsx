
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarClock, ExternalLink, ListChecks, ServerCrash, Repeat } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { Contract } from '@/types/contract';
import { calculateDaysRemaining } from '@/lib/utils';

type ContractCardProps = {
  contract: Contract;
};

const ContractCard = ({ contract }: ContractCardProps) => {
  const navigate = useNavigate();
  
  const getContractTypeIcon = () => {
    switch (contract.type) {
      case 'delivery':
        return <CalendarClock className="h-4 w-4 mr-1 text-blue-500" />;
      case 'service':
        return <ServerCrash className="h-4 w-4 mr-1 text-indigo-500" />;
      case 'milestone':
        return <ListChecks className="h-4 w-4 mr-1 text-purple-500" />;
      case 'subscription':
        return <Repeat className="h-4 w-4 mr-1 text-teal-500" />;
      default:
        return <CalendarClock className="h-4 w-4 mr-1 text-gray-500" />;
    }
  };

  const getContractTypeLabel = () => {
    switch (contract.type) {
      case 'delivery': return 'Delivery Contract';
      case 'service': return 'Service Agreement';
      case 'payment': return 'Payment Schedule';
      case 'milestone': return 'Project Milestones';
      case 'subscription': return 'Subscription Agreement';
      default: return 'Contract';
    }
  };
  
  return (
    <Card className="h-full flex flex-col dark:glass-card">
      <CardHeader className="pb-2 flex flex-row items-start justify-between">
        <div>
          <StatusBadge status={contract.status} />
          <CardTitle className="text-lg mt-2">{contract.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          {getContractTypeIcon()}
          <span>{getContractTypeLabel()}</span>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Brand</p>
          <p className="font-medium">{contract.brandName}</p>
        </div>
        
        {contract.customerName && (
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Customer</p>
            <p className="font-medium">{contract.customerName}</p>
          </div>
        )}
        
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Stake</p>
          <p className="font-medium">${contract.stakeAmount}</p>
        </div>
        
        {contract.deliveryDate && contract.type === 'delivery' && (
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <CalendarClock className="h-4 w-4 mr-1" />
            <span>Due {new Date(contract.deliveryDate).toLocaleDateString()}</span>
            {(contract.status === 'active' || contract.status === 'in_progress') && (
              <span className="ml-2 text-amber-500">
                ({calculateDaysRemaining(contract.deliveryDate)} days left)
              </span>
            )}
          </div>
        )}
        
        {contract.milestones && contract.milestones.length > 0 && (
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Milestones</p>
            <div className="mt-1 text-sm">
              <p className="text-green-600 dark:text-green-400">
                {contract.milestones.filter(m => m.completed).length} completed
              </p>
              <p className="text-amber-600 dark:text-amber-400">
                {contract.milestones.filter(m => !m.completed).length} remaining
              </p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full dark:text-white dark:border-gray-700" 
          variant="outline"
          onClick={() => navigate(`/contracts/${contract.id}`)}
        >
          View Details
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContractCard;
