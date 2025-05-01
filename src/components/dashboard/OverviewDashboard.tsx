
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, ArrowDownRight, TrendingUp, BadgeDollarSign, LineChart, Calendar } from 'lucide-react';

const OverviewDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, John</h1>
        <p className="text-gray-500 dark:text-gray-400">Here's what's happening with your finances today.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Balance
            </CardTitle>
            <BadgeDollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,563.00</div>
            <div className="flex items-center pt-1 text-sm text-green-600 dark:text-green-400">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>4.3%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Monthly Income
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,450.00</div>
            <div className="flex items-center pt-1 text-sm text-green-600 dark:text-green-400">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>1.8%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Monthly Expenses
            </CardTitle>
            <LineChart className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,120.00</div>
            <div className="flex items-center pt-1 text-sm text-red-600 dark:text-red-400">
              <ArrowDownRight className="mr-1 h-4 w-4" />
              <span>2.1%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Savings Goal
            </CardTitle>
            <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$10,000.00</div>
            <div className="w-full mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-finance-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="flex justify-between mt-1 text-xs">
              <span className="text-gray-500 dark:text-gray-400">$4,500 saved</span>
              <span className="text-gray-500 dark:text-gray-400">45%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Area */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Main Chart */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Your income and expenses over time</CardDescription>
            <Tabs defaultValue="6m" className="w-full">
              <TabsList className="grid w-full max-w-xs grid-cols-4">
                <TabsTrigger value="1m">1M</TabsTrigger>
                <TabsTrigger value="3m">3M</TabsTrigger>
                <TabsTrigger value="6m">6M</TabsTrigger>
                <TabsTrigger value="1y">1Y</TabsTrigger>
              </TabsList>
              <TabsContent value="1m">
                <div className="h-[250px] mt-2 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                  1 Month Chart Preview (Data visualization would be here)
                </div>
              </TabsContent>
              <TabsContent value="3m">
                <div className="h-[250px] mt-2 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                  3 Month Chart Preview (Data visualization would be here)
                </div>
              </TabsContent>
              <TabsContent value="6m">
                <div className="h-[250px] mt-2 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                  6 Month Chart Preview (Data visualization would be here)
                </div>
              </TabsContent>
              <TabsContent value="1y">
                <div className="h-[250px] mt-2 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                  1 Year Chart Preview (Data visualization would be here)
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
        
        {/* Left Section */}
        <Card>
          <CardHeader>
            <CardTitle>Latest Transactions</CardTitle>
            <CardDescription>Your recent financial activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Amazon', date: 'Today', amount: -79.99, category: 'Shopping' },
                { name: 'Salary Deposit', date: 'Yesterday', amount: 2400, category: 'Income' },
                { name: 'Grocery Store', date: '3 days ago', amount: -124.50, category: 'Food' },
                { name: 'Electricity Bill', date: '1 week ago', amount: -83.45, category: 'Utilities' },
              ].map((transaction, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.amount > 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                      {transaction.amount > 0 ? '+' : '-'}
                    </div>
                    <div>
                      <div className="font-medium">{transaction.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{transaction.date} • {transaction.category}</div>
                    </div>
                  </div>
                  <div className={`font-medium ${transaction.amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Right Section */}
        <Card>
          <CardHeader>
            <CardTitle>AI Financial Insights</CardTitle>
            <CardDescription>Personalized recommendations for your finances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-finance-50 dark:bg-finance-900/20 rounded-lg border border-finance-100 dark:border-finance-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-finance-500/20 flex items-center justify-center">
                    <svg className="h-4 w-4 text-finance-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm">Spending Alert</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You've spent 35% more on dining this month compared to your average. Consider adjusting your budget to stay on track.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm">Savings Opportunity</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Based on your cash flow, you could increase your monthly savings by $320 by optimizing subscription services.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm">Investment Tip</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your emergency fund is now fully funded! Consider putting additional savings into your retirement account for tax benefits.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewDashboard;
