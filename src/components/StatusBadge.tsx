
import { Contract } from '@/types/contract';
import { cn } from '@/lib/utils';
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  CircleAlert,
  Hourglass
} from 'lucide-react';

type StatusBadgeProps = {
  status: Contract['status'];
  className?: string;
};

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const getStatusDetails = () => {
    switch (status) {
      case 'pending':
        return {
          icon: Clock,
          label: 'Pending',
          className: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
        };
      case 'active':
        return {
          icon: CheckCircle2,
          label: 'Active',
          className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
        };
      case 'in_progress':
        return {
          icon: Hourglass,
          label: 'In Progress',
          className: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
        };
      case 'completed':
        return {
          icon: CheckCircle2,
          label: 'Completed',
          className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
        };
      case 'breached':
        return {
          icon: AlertCircle,
          label: 'Breached',
          className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
        };
      default:
        return {
          icon: CircleAlert,
          label: 'Unknown',
          className: 'bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300'
        };
    }
  };

  const details = getStatusDetails();
  const Icon = details.icon;

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
      details.className,
      className
    )}>
      <Icon className="h-3 w-3 mr-1" />
      {details.label}
    </span>
  );
};

export default StatusBadge;
