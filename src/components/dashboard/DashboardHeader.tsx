
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Left side - Search */}
        <div className="relative max-w-xs w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input 
            type="search" 
            placeholder="Search..." 
            className="pl-10 bg-gray-50 dark:bg-gray-700"
          />
        </div>

        {/* Right side - User menu & actions */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm"
            className="hidden md:flex bg-finance-50 dark:bg-finance-900/20 text-finance-700 dark:text-finance-400 hover:bg-finance-100 dark:hover:bg-finance-900/30 border-finance-200 dark:border-finance-800"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Upgrade Plan
          </Button>
          
          <button className="relative p-2 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none">
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
