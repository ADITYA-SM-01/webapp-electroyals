
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI financial advisor work?",
    answer: "Our AI analyzes your financial data, spending patterns, income sources, and financial goals to provide personalized recommendations. It uses machine learning algorithms to identify opportunities for saving, investing, and optimizing your finances based on your specific situation."
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes, we take security very seriously. We use bank-level 256-bit encryption for all data, implement strict access controls, and never share your information with third parties without your explicit consent. Our systems are regularly audited by independent security experts."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time with no penalty. If you cancel, you'll continue to have access to your paid features until the end of your current billing period."
  },
  {
    question: "Do I need to connect my bank accounts?",
    answer: "Connecting your accounts provides the most personalized experience, but it's not required. You can manually enter your financial information if you prefer. However, connecting accounts enables automatic updates and more accurate recommendations."
  },
  {
    question: "How accurate are the AI recommendations?",
    answer: "Our AI provides recommendations based on the data available and established financial principles. While we strive for high accuracy, recommendations should be considered as guidance rather than financial advice. For major financial decisions, we recommend consulting with a certified financial advisor."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, we have mobile apps available for both iOS and Android devices. You can download them from the App Store or Google Play Store. The mobile apps provide the same features as our web application with a mobile-optimized interface."
  },
];

const FAQ = () => {
  return (
    <section className="py-16 bg-finance-50 dark:bg-gray-800/20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about FuturoFlow and our services.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="py-5 text-left text-gray-900 dark:text-white font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
