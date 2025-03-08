
import { Contract, ContractTemplate, Transaction } from '../types/contract';

export const contractTemplates: ContractTemplate[] = [
  // Delivery Templates
  {
    id: '1',
    title: 'Standard Delivery Guarantee',
    description: 'A basic delivery guarantee contract with standard penalty terms',
    category: 'Delivery',
    type: 'delivery',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'If delivery exceeds the agreed-upon date, the brand will pay the specified penalty amount per day of delay, up to the maximum number of days specified.',
  },
  {
    id: '2',
    title: 'Premium Delivery Assurance',
    description: 'High-value delivery contract with premium compensation',
    category: 'Delivery',
    type: 'delivery',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'For premium products, this contract ensures timely delivery with higher penalty rates for any delays.',
  },
  {
    id: '3',
    title: 'International Shipping Contract',
    description: 'Specialized contract for international deliveries',
    category: 'Delivery',
    type: 'delivery',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'Accounts for customs and international shipping variables with appropriate grace periods and penalties.',
  },
  
  // Service Agreements
  {
    id: '4',
    title: 'Service Level Agreement (SLA)',
    description: 'Contract with penalty terms for service downtime',
    category: 'Service Agreements',
    type: 'service',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'This SLA guarantees service uptime with penalties for any downtime beyond the specified threshold.',
  },
  {
    id: '5',
    title: 'Professional Services Contract',
    description: 'Agreement for professional service delivery',
    category: 'Service Agreements',
    type: 'service',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'This contract establishes service quality levels and includes penalties for failure to meet performance standards.',
  },
  
  // Payment Schedules
  {
    id: '6',
    title: 'Installment Payment Agreement',
    description: 'Structured payment schedule with enforcement',
    category: 'Payment Schedules',
    type: 'payment',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'Establishes a fixed payment schedule with automatic penalties for missed payments.',
  },
  
  // Project Milestones
  {
    id: '7',
    title: 'Milestone Payment Contract',
    description: 'Project-based contract with milestone releases',
    category: 'Project Milestones',
    type: 'milestone',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'This contract automates payments upon completion of predefined project milestones, with penalties for missed deadlines.',
  },
  {
    id: '8',
    title: 'Development Timeline Agreement',
    description: 'Software development milestones with verification',
    category: 'Project Milestones',
    type: 'milestone',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'Establishes development milestones with automatic payment releases upon verification of deliverables.',
  },
  
  // Subscription Agreements
  {
    id: '9',
    title: 'Subscription Guarantee',
    description: 'Subscription service with refund terms',
    category: 'Subscription Agreements',
    type: 'subscription',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'Guarantees subscription service levels with automated refunds for service failures or interruptions.',
  },
  {
    id: '10',
    title: 'SaaS Service Agreement',
    description: 'Software-as-a-Service contract with uptime guarantees',
    category: 'Subscription Agreements',
    type: 'subscription',
    imageUrl: '/placeholder.svg',
    defaultTerms: 'This contract guarantees SaaS platform availability with automated compensation for downtime incidents.',
  },
];

export const contracts: Contract[] = [
  // Delivery Contracts
  {
    id: '1',
    title: 'Eco-Friendly Packaging Delivery',
    templateId: '1',
    type: 'delivery',
    status: 'active',
    brandName: 'Green Planet Co.',
    brandWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    customerName: 'Jane Smith',
    customerWallet: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    penaltyAmount: 10,
    maxDays: 5,
    stakeAmount: 50,
    createdAt: '2023-05-15T10:30:00Z',
    deliveryDate: '2023-05-25T10:30:00Z',
    terms: 'If delivery exceeds May 25, 2023, Green Planet Co. will pay $10 per day of delay, up to a maximum of 5 days.',
  },
  {
    id: '2',
    title: 'Premium Watch Delivery',
    templateId: '2',
    type: 'delivery',
    status: 'completed',
    brandName: 'Luxury Timepieces',
    brandWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    customerName: 'Robert Johnson',
    customerWallet: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    penaltyAmount: 25,
    maxDays: 3,
    stakeAmount: 75,
    createdAt: '2023-04-10T14:15:00Z',
    deliveryDate: '2023-04-15T14:15:00Z',
    completedDate: '2023-04-14T11:20:00Z',
    terms: 'If delivery exceeds April 15, 2023, Luxury Timepieces will pay $25 per day of delay, up to a maximum of 3 days.',
  },
  
  // Service Agreements
  {
    id: '3',
    title: 'Website Development SLA',
    templateId: '4',
    type: 'service',
    status: 'active',
    brandName: 'Digital Solutions Inc.',
    brandWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    customerName: 'Acme Corp',
    customerWallet: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    penaltyAmount: 50,
    maxDays: 5,
    stakeAmount: 250,
    createdAt: '2023-05-01T09:00:00Z',
    deliveryDate: '2023-06-15T09:00:00Z',
    terms: 'This SLA guarantees 99.9% uptime for the website. For each 0.1% below this threshold, Digital Solutions Inc. will pay $50 in penalties, up to a maximum of $250.',
  },
  
  // Subscription Agreements
  {
    id: '4',
    title: 'Monthly Software Subscription',
    templateId: '9',
    type: 'subscription',
    status: 'active',
    brandName: 'CloudSoft Solutions',
    brandWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    customerName: 'TechStart LLC',
    customerWallet: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    penaltyAmount: 15,
    maxDays: 10,
    stakeAmount: 150,
    createdAt: '2023-04-05T11:30:00Z',
    deliveryDate: '2023-06-05T11:30:00Z',
    terms: 'This subscription agreement guarantees 99.5% software availability. Each day of significant downtime will result in a $15 refund, up to a maximum of 10 days per month.',
  },
  
  // Milestone-based Contracts
  {
    id: '5',
    title: 'Mobile App Development Project',
    templateId: '7',
    type: 'milestone',
    status: 'in_progress',
    brandName: 'Innovative Apps Inc.',
    brandWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    customerName: 'Retail Connect',
    customerWallet: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    penaltyAmount: 30,
    maxDays: 10,
    stakeAmount: 300,
    createdAt: '2023-03-15T14:00:00Z',
    deliveryDate: '2023-07-15T14:00:00Z',
    terms: 'This contract includes 5 development milestones with specific deliverables. Failure to meet any milestone deadline will incur a $30 per day penalty, up to a maximum of 10 days per milestone.',
    milestones: [
      {
        id: 'm1',
        title: 'Design Approval',
        description: 'Finalized UI/UX designs approved by client',
        amount: 2000,
        dueDate: '2023-04-01T14:00:00Z',
        completed: true,
        completedDate: '2023-03-28T10:15:00Z'
      },
      {
        id: 'm2',
        title: 'Frontend Development',
        description: 'Completion of all frontend components',
        amount: 3000,
        dueDate: '2023-05-01T14:00:00Z',
        completed: true,
        completedDate: '2023-04-29T16:20:00Z'
      },
      {
        id: 'm3',
        title: 'Backend Integration',
        description: 'Backend services and API integration',
        amount: 3500,
        dueDate: '2023-06-01T14:00:00Z',
        completed: false
      },
      {
        id: 'm4',
        title: 'Testing Phase',
        description: 'QA and bug fixes',
        amount: 1500,
        dueDate: '2023-06-15T14:00:00Z',
        completed: false
      },
      {
        id: 'm5',
        title: 'Launch',
        description: 'App store submission and launch',
        amount: 1000,
        dueDate: '2023-07-01T14:00:00Z',
        completed: false
      }
    ]
  },
  
  // Payment Schedule
  {
    id: '6',
    title: 'Office Renovation Payment Schedule',
    templateId: '6',
    type: 'payment',
    status: 'in_progress',
    brandName: 'Modern Spaces Construction',
    brandWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    customerName: 'Global Finance LLC',
    customerWallet: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    penaltyAmount: 75,
    maxDays: 5,
    stakeAmount: 375,
    createdAt: '2023-02-10T09:45:00Z',
    deliveryDate: '2023-08-10T09:45:00Z',
    terms: 'This payment schedule establishes 4 equal payments of $25,000 each, due on specific dates. Late payments incur a $75 daily penalty, up to a maximum of 5 days per installment.',
  },
  
  // Breached Contract
  {
    id: '7',
    title: 'Organic Food Box Subscription',
    templateId: '4',
    type: 'delivery',
    status: 'breached',
    brandName: 'Farm Fresh Deliveries',
    brandWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    customerName: 'Emily Chen',
    customerWallet: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    penaltyAmount: 15,
    maxDays: 2,
    stakeAmount: 30,
    createdAt: '2023-05-01T09:00:00Z',
    deliveryDate: '2023-05-03T09:00:00Z',
    terms: 'If delivery exceeds May 3, 2023, Farm Fresh Deliveries will pay $15 per day of delay, up to a maximum of 2 days.',
  },
  
  // Pending Contract
  {
    id: '8',
    title: 'Handcrafted Furniture Delivery',
    templateId: '1',
    type: 'delivery',
    status: 'pending',
    brandName: 'Artisan Woodworks',
    brandWallet: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    penaltyAmount: 20,
    maxDays: 7,
    stakeAmount: 140,
    createdAt: '2023-05-18T16:45:00Z',
    terms: 'If delivery exceeds the agreed-upon date, Artisan Woodworks will pay $20 per day of delay, up to a maximum of 7 days.',
  },
];

export const transactions: Transaction[] = [
  // Stake Transactions
  {
    id: '1',
    contractId: '1',
    amount: 50,
    from: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    to: 'Contract Escrow',
    type: 'stake',
    timestamp: '2023-05-15T10:35:00Z',
  },
  {
    id: '2',
    contractId: '2',
    amount: 75,
    from: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    to: 'Contract Escrow',
    type: 'stake',
    timestamp: '2023-04-10T14:20:00Z',
  },
  {
    id: '3',
    contractId: '3',
    amount: 250,
    from: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    to: 'Contract Escrow',
    type: 'stake',
    timestamp: '2023-05-01T09:05:00Z',
  },
  
  // Refund Transactions
  {
    id: '4',
    contractId: '2',
    amount: 75,
    from: 'Contract Escrow',
    to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    type: 'refund',
    timestamp: '2023-04-14T11:25:00Z',
    description: 'Successful contract completion - stake refunded'
  },
  
  // Penalty Transactions
  {
    id: '5',
    contractId: '7',
    amount: 30,
    from: 'Contract Escrow',
    to: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    type: 'penalty',
    timestamp: '2023-05-05T10:00:00Z',
    description: 'Delivery deadline breach - penalty paid'
  },
  
  // Service Agreement Penalties
  {
    id: '6',
    contractId: '3',
    amount: 50,
    from: 'Contract Escrow',
    to: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    type: 'penalty',
    timestamp: '2023-05-20T14:15:00Z',
    description: 'SLA breach - 0.1% uptime below threshold'
  },
  
  // Milestone Transactions
  {
    id: '7',
    contractId: '5',
    amount: 2000,
    from: 'Contract Escrow',
    to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    type: 'milestone',
    timestamp: '2023-03-28T10:20:00Z',
    description: 'Design Approval milestone completed'
  },
  {
    id: '8',
    contractId: '5',
    amount: 3000,
    from: 'Contract Escrow',
    to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    type: 'milestone',
    timestamp: '2023-04-29T16:25:00Z',
    description: 'Frontend Development milestone completed'
  },
  
  // Subscription Transactions
  {
    id: '9',
    contractId: '4',
    amount: 15,
    from: 'Contract Escrow',
    to: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    type: 'subscription',
    timestamp: '2023-05-10T09:30:00Z',
    description: 'Subscription refund for 1 day downtime'
  }
];
