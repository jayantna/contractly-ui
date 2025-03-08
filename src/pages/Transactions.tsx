
import { transactions } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransactionItem from '@/components/TransactionItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Transactions = () => {
  // Sort transactions by timestamp (newest first)
  const sortedTransactions = [...transactions].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-contractly-blue mb-6">
            Transaction History
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  {sortedTransactions.length > 0 ? (
                    <div>
                      {sortedTransactions.map((transaction) => (
                        <TransactionItem 
                          key={transaction.id} 
                          transaction={transaction} 
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">No transactions found.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Staked</p>
                      <p className="text-2xl font-bold">
                        ${transactions
                          .filter(t => t.type === 'stake')
                          .reduce((sum, t) => sum + t.amount, 0)
                          .toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Penalties Paid</p>
                      <p className="text-2xl font-bold text-red-500">
                        ${transactions
                          .filter(t => t.type === 'penalty')
                          .reduce((sum, t) => sum + t.amount, 0)
                          .toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Refunded</p>
                      <p className="text-2xl font-bold text-green-500">
                        ${transactions
                          .filter(t => t.type === 'refund')
                          .reduce((sum, t) => sum + t.amount, 0)
                          .toFixed(2)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Active Stakes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    ${
                      // Calculate stakes minus refunds and penalties
                      transactions
                        .filter(t => t.type === 'stake')
                        .reduce((sum, t) => sum + t.amount, 0) -
                      transactions
                        .filter(t => t.type === 'refund' || t.type === 'penalty')
                        .reduce((sum, t) => sum + t.amount, 0)
                    }
                  </p>
                  <p className="text-sm text-gray-500">
                    Currently staked in active contracts
                  </p>
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

export default Transactions;
