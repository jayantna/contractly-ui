
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarClock, ExternalLink } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { Contract } from '@/types/contract';

type ContractCardProps = {
  contract: Contract;
};

const ContractCard = ({ contract }: ContractCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2 flex flex-row items-start justify-between">
        <div>
          <StatusBadge status={contract.status} />
          <CardTitle className="text-lg mt-2">{contract.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div>
          <p className="text-sm text-gray-500">Brand</p>
          <p className="font-medium">{contract.brandName}</p>
        </div>
        
        {contract.customerName && (
          <div>
            <p className="text-sm text-gray-500">Customer</p>
            <p className="font-medium">{contract.customerName}</p>
          </div>
        )}
        
        <div>
          <p className="text-sm text-gray-500">Penalty</p>
          <p className="font-medium">${contract.penaltyAmount}/day (max ${contract.stakeAmount})</p>
        </div>
        
        {contract.deliveryDate && (
          <div className="flex items-center text-sm text-gray-500">
            <CalendarClock className="h-4 w-4 mr-1" />
            <span>Due {new Date(contract.deliveryDate).toLocaleDateString()}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full text-contractly-blue" 
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
