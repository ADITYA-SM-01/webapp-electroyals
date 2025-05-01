
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';

const tiers = [
  {
    name: 'Free',
    id: 'free',
    price: { monthly: 0, annually: 0 },
    description: 'Essential tools to get started with financial planning.',
    features: [
      'Basic financial dashboard',
      'Expense tracking',
      'Budget creation',
      'Weekly AI financial tips',
      '3 chatbot questions per day',
    ],
    cta: 'Start Free',
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'pro',
    price: { monthly: 19.99, annually: 199.99 },
    description: 'Advanced features for serious financial planning.',
    features: [
      'Everything in Free',
      'Investment tracking',
      'Custom financial goals',
      'Monthly AI financial review',
      'Unlimited chatbot questions',
      'Email & push notifications',
      'Priority support',
    ],
    cta: 'Start Pro Trial',
    mostPopular: true,
  },
  {
    name: 'Business',
    id: 'business',
    price: { monthly: 49.99, annually: 499.99 },
    description: 'Complete solution for businesses and financial professionals.',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Client management',
      'Weekly AI financial reports',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'Advanced tax optimization',
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  },
];

const PricingPlans = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-10 flex justify-center">
            <div className="relative flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <button
                type="button"
                className={`relative py-2 px-6 text-sm font-medium rounded-full transition-all ${
                  !annual ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                }`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`relative py-2 px-6 text-sm font-medium rounded-full transition-all ${
                  annual ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                }`}
                onClick={() => setAnnual(true)}
              >
                Annual <span className="text-finance-600 dark:text-finance-400 ml-1">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl bg-white dark:bg-gray-800 shadow-sm border ${
                tier.mostPopular
                  ? 'border-finance-500 dark:border-finance-400 shadow-finance-200 dark:shadow-none'
                  : 'border-gray-200 dark:border-gray-700'
              } p-8 flex flex-col`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-finance-500 text-white">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{tier.name}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">{tier.description}</p>
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${annual ? tier.price.annually : tier.price.monthly}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {tier.price.monthly === 0 ? '' : annual ? '/year' : '/month'}
                    </span>
                  </div>
                </div>
              </div>
              
              <ul className="mt-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link to={tier.id === 'business' ? '/contact' : '/signup'}>
                  <Button
                    className={`w-full rounded-full ${
                      tier.mostPopular
                        ? 'bg-gradient-to-r from-finance-500 to-blue-600 hover:from-finance-600 hover:to-blue-700'
                        : 'bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
