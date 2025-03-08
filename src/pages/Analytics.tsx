
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { contracts, transactions } from '@/data/mockData';
import { BarChart, LineChart, PieChart, Bar, Line, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const Analytics = () => {
  const [timeframe, setTimeframe] = useState('monthly');
  
  // Group contracts by type for pie chart
  const contractsByType = contracts.reduce((acc, contract) => {
    acc[contract.type] = (acc[contract.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const contractTypeData = Object.keys(contractsByType).map(type => ({
    name: type.charAt(0).toUpperCase() + type.slice(1),
    value: contractsByType[type]
  }));

  // Group contracts by status for pie chart
  const contractsByStatus = contracts.reduce((acc, contract) => {
    acc[contract.status] = (acc[contract.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const contractStatusData = Object.keys(contractsByStatus).map(status => ({
    name: status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' '),
    value: contractsByStatus[status]
  }));

  // Transaction data for bar chart
  const transactionData = [
    { 
      name: 'Stake', 
      amount: transactions.filter(t => t.type === 'stake').reduce((sum, t) => sum + t.amount, 0) 
    },
    { 
      name: 'Penalty', 
      amount: transactions.filter(t => t.type === 'penalty').reduce((sum, t) => sum + t.amount, 0) 
    },
    { 
      name: 'Refund', 
      amount: transactions.filter(t => t.type === 'refund').reduce((sum, t) => sum + t.amount, 0) 
    },
    { 
      name: 'Milestone', 
      amount: transactions.filter(t => t.type === 'milestone').reduce((sum, t) => sum + t.amount, 0) 
    },
    { 
      name: 'Subscription', 
      amount: transactions.filter(t => t.type === 'subscription').reduce((sum, t) => sum + t.amount, 0) 
    }
  ];

  // Mock time-series data for line chart
  const monthlyData = [
    { name: 'Jan', contracts: 3, value: 1500 },
    { name: 'Feb', contracts: 4, value: 1800 },
    { name: 'Mar', contracts: 2, value: 1200 },
    { name: 'Apr', contracts: 5, value: 2200 },
    { name: 'May', contracts: 7, value: 3100 },
    { name: 'Jun', contracts: 8, value: 3500 }
  ];
  
  const weeklyData = [
    { name: 'Week 1', contracts: 2, value: 800 },
    { name: 'Week 2', contracts: 3, value: 1200 },
    { name: 'Week 3', contracts: 1, value: 500 },
    { name: 'Week 4', contracts: 5, value: 2000 }
  ];

  const COLORS = ['#6366f1', '#14b8a6', '#f59e0b', '#3b82f6', '#8b5cf6', '#10b981', '#ef4444'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-contractly-blue dark:text-white mb-6">
            Analytics Dashboard
          </h1>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="dark:glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Contracts</CardTitle>
                <CardDescription>Active and completed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{contracts.length}</p>
              </CardContent>
            </Card>
            
            <Card className="dark:glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Value</CardTitle>
                <CardDescription>Currently staked</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">
                  ${contracts
                    .filter(c => c.status === 'active' || c.status === 'in_progress')
                    .reduce((sum, c) => sum + c.stakeAmount, 0)
                    .toLocaleString()}
                </p>
              </CardContent>
            </Card>
            
            <Card className="dark:glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Contract Completion</CardTitle>
                <CardDescription>Success rate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">
                  {Math.round(
                    (contracts.filter(c => c.status === 'completed').length / 
                    contracts.filter(c => c.status !== 'pending').length) * 100
                  )}%
                </p>
              </CardContent>
            </Card>
            
            <Card className="dark:glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Transaction Volume</CardTitle>
                <CardDescription>All time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">
                  ${transactions.reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="dark:glass-card">
              <CardHeader>
                <CardTitle>Contract Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={contractTypeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={(entry) => entry.name}
                        labelLine={true}
                      >
                        {contractTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} contracts`, 'Count']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark:glass-card">
              <CardHeader>
                <CardTitle>Contract Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={contractStatusData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={(entry) => entry.name}
                        labelLine={true}
                      >
                        {contractStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} contracts`, 'Count']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="dark:glass-card">
              <CardHeader>
                <CardTitle>Transaction Volume by Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={transactionData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                      <Legend />
                      <Bar dataKey="amount" fill="#6366f1" name="Amount ($)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          
            <Card className="dark:glass-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contract Growth</CardTitle>
                <Tabs defaultValue="monthly" value={timeframe} onValueChange={setTimeframe}>
                  <TabsList>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={timeframe === 'monthly' ? monthlyData : weeklyData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" stroke="#6366f1" />
                      <YAxis yAxisId="right" orientation="right" stroke="#14b8a6" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="contracts" stroke="#6366f1" name="Contracts" />
                      <Line yAxisId="right" type="monotone" dataKey="value" stroke="#14b8a6" name="Value ($)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analytics;
