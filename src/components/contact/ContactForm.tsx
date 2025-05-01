import React from "react";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
      
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-electroyals-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-electroyals-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-electroyals-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="How can we help you?"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-electroyals-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Please describe how we can assist you..."
            required
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-electroyals-600 border-gray-300 rounded focus:ring-electroyals-500"
              required
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              I agree to the <a href="#" className="text-electroyals-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-electroyals-600 hover:underline">Terms of Service</a>
            </span>
          </label>
        </div>
        
        <Button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-electroyals-500 to-electroyals-600 hover:from-electroyals-600 hover:to-electroyals-700 text-electroyals-navy rounded-lg"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm; 