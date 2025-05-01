
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ChatInterface from '../components/chatbot/ChatInterface';
import { Helmet } from 'react-helmet';

const ChatbotPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Financial Assistant | FuturoFlow</title>
        <meta name="description" content="Get personalized financial advice through our AI-powered chatbot assistant." />
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-16 bg-finance-50 dark:bg-gray-900/80 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Your AI Financial <span className="gradient-text">Assistant</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Ask questions, get personalized advice, and make smarter financial decisions.
              </p>
            </div>
            
            <ChatInterface />
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-semibold mb-4">Popular Questions</h2>
              <div className="grid gap-3 md:grid-cols-2">
                <button className="text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-finance-50 dark:hover:bg-gray-600 transition-colors text-sm">
                  How much should I be saving each month?
                </button>
                <button className="text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-finance-50 dark:hover:bg-gray-600 transition-colors text-sm">
                  What's the best way to pay off my credit card debt?
                </button>
                <button className="text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-finance-50 dark:hover:bg-gray-600 transition-colors text-sm">
                  How do I start investing with a small budget?
                </button>
                <button className="text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-finance-50 dark:hover:bg-gray-600 transition-colors text-sm">
                  Should I pay off my student loans or invest first?
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ChatbotPage;
