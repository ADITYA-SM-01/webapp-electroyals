
import React from 'react';
import { 
  LineChart, 
  MessageSquare, 
  Bell, 
  Briefcase, 
  Lock, 
  Zap 
} from 'lucide-react';

const features = [
  {
    icon: <LineChart className="h-8 w-8 text-finance-500" />,
    title: "Financial Insights",
    description: "Get real-time analysis of your spending habits, income trends, and personalized recommendations."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-finance-500" />,
    title: "AI Financial Assistant",
    description: "Chat with our AI to get answers to your finance questions, budgeting advice, and investment tips."
  },
  {
    icon: <Bell className="h-8 w-8 text-finance-500" />,
    title: "Smart Alerts",
    description: "Receive timely notifications about unusual spending, bill payments, investment opportunities, and more."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-finance-500" />,
    title: "Investment Tracking",
    description: "Monitor your investments across multiple accounts with real-time updates and performance metrics."
  },
  {
    icon: <Lock className="h-8 w-8 text-finance-500" />,
    title: "Bank-Level Security",
    description: "Your financial data is protected with enterprise-grade encryption and security protocols."
  },
  {
    icon: <Zap className="h-8 w-8 text-finance-500" />,
    title: "Goal Acceleration",
    description: "Reach your financial goals faster with AI-powered strategies tailored to your unique situation."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Powerful Features for Your <span className="gradient-text">Financial Success</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to take control of your finances, make informed decisions, and build wealth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-finance-50 dark:bg-gray-700 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
