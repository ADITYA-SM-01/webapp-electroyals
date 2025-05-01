
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! I'm your FuturoFlow financial assistant. How can I help with your finances today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      const botResponses = [
        "Based on your spending patterns, I recommend setting aside 20% of your monthly income for savings and investments.",
        "Looking at similar profiles, you could benefit from diversifying your investment portfolio with a mix of ETFs and bonds.",
        "I've analyzed your expenses and noticed several subscription services you might not be using regularly. Would you like me to suggest which ones to consider canceling?",
        "Your emergency fund seems a bit low compared to your monthly expenses. Consider gradually increasing it to cover 3-6 months of expenses.",
        "Have you considered refinancing your loans? Current rates suggest you might save a significant amount over the loan term.",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        content: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[600px] md:h-[700px] bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Chat header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-finance-50 dark:bg-finance-900/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-finance-100 dark:bg-finance-800 flex items-center justify-center">
            <Bot className="h-5 w-5 text-finance-600 dark:text-finance-400" />
          </div>
          <div>
            <h3 className="font-semibold">Financial AI Assistant</h3>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Online
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] px-4 py-3 rounded-lg ${
                message.sender === 'user' 
                  ? 'bg-finance-500 text-white rounded-tr-none' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
              }`}
            >
              <div className="text-sm">{message.content}</div>
              <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-finance-100' : 'text-gray-500 dark:text-gray-400'}`}>
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[80%] px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg rounded-tl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input 
            type="text"
            placeholder="Ask a financial question..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1"
          />
          <Button 
            type="submit" 
            className="bg-finance-500 hover:bg-finance-600"
            disabled={!inputMessage.trim() || isTyping}
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
          Your data is private and secure. Conversations are not stored permanently.
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
