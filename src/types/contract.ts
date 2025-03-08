
export type ContractStatus = 'pending' | 'active' | 'completed' | 'breached';

export interface Contract {
  id: string;
  title: string;
  templateId: string;
  status: ContractStatus;
  brandName: string;
  brandWallet: string;
  customerName?: string;
  customerWallet?: string;
  penaltyAmount: number;
  maxDays: number;
  stakeAmount: number;
  createdAt: string;
  deliveryDate?: string;
  completedDate?: string;
  terms: string;
}

export interface ContractTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  defaultTerms: string;
}

export interface Transaction {
  id: string;
  contractId: string;
  amount: number;
  from: string;
  to: string;
  type: 'stake' | 'penalty' | 'refund';
  timestamp: string;
}
