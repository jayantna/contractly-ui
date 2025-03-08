
import { ArrowDownRight, ArrowUpRight, RefreshCw, CheckSquare, Clock } from 'lucide-react';
import { Transaction } from '@/types/contract';
import { contracts } from '@/data/mockData';
import { shortenAddress } from '@/lib/utils';

type TransactionItemProps = {
  transaction: Transaction;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const relatedContract = contracts.find(c => c.id === transaction.contractId);
  
  const getTransactionIcon = () => {
    switch (transaction.type) {
      case 'stake':
        return <ArrowUpRight className="h-5 w-5 text-blue-500" />;
      case 'penalty':
        return <ArrowDownRight className="h-5 w-5 text-red-500" />;
      case 'refund':
        return <RefreshCw className="h-5 w-5 text-green-500" />;
      case 'milestone':
        return <CheckSquare className="h-5 w-5 text-purple-500" />;
      case 'subscription':
        return <Clock className="h-5 w-5 text-indigo-500" />;
      default:
        return null;
    }
  };
  
  const getTransactionLabel = () => {
    switch (transaction.type) {
      case 'stake':
        return 'Staked for Contract';
      case 'penalty':
        return 'Penalty Payment';
      case 'refund':
        return 'Stake Refunded';
      case 'milestone':
        return 'Milestone Payment';
      case 'subscription':
        return 'Subscription Payment';
      default:
        return 'Transaction';
    }
  };
  
  const getTransactionColor = () => {
    switch (transaction.type) {
      case 'stake':
        return 'text-blue-500';
      case 'penalty':
        return 'text-red-500';
      case 'refund':
        return 'text-green-500';
      case 'milestone':
        return 'text-purple-500';
      case 'subscription':
        return 'text-indigo-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center">
        <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-800">
          {getTransactionIcon()}
        </div>
        <div className="ml-4">
          <p className="font-medium">{getTransactionLabel()}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {transaction.description || (relatedContract?.title || 'Unknown Contract')}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-medium ${getTransactionColor()}`}>
          ${transaction.amount.toFixed(2)}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {transaction.from === 'Contract Escrow' 
            ? `To: ${shortenAddress(transaction.to)}` 
            : `From: ${shortenAddress(transaction.from)}`}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
