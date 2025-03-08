
export type ContractStatus = 'pending' | 'active' | 'in_progress' | 'completed' | 'breached';

export type ContractType = 'delivery' | 'service' | 'payment' | 'milestone' | 'subscription';

export interface Contract {
  id: string;
  title: string;
  templateId: string;
  type: ContractType;
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
  milestones?: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  amount: number;
  dueDate: string;
  completed: boolean;
  completedDate?: string;
}

export interface ContractTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  type: ContractType;
  imageUrl: string;
  defaultTerms: string;
}

export interface Transaction {
  id: string;
  contractId: string;
  amount: number;
  from: string;
  to: string;
  type: 'stake' | 'penalty' | 'refund' | 'milestone' | 'subscription';
  timestamp: string;
  description?: string;
}
