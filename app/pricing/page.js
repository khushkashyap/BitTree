'use client';
import { useState } from 'react';
import { SignInButton } from '@clerk/nextjs';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for beginners',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'One custom link',
        'Basic profile customization',
        '5 links in bio',
        'Public profile',
        'Basic analytics',
        'Standard templates',
      ],
      highlighted: false,
      buttonText: 'Get Started',
      color: 'bg-[#254f1a]',
      textColor: 'text-[#d2e823]',
      buttonBg: 'bg-[#e9c0e9]',
      buttonText_color: 'text-[#502274]',
    },
    {
      name: 'Professional',
      description: 'For active developers',
      monthlyPrice: 9,
      yearlyPrice: 79,
      features: [
        'Everything in Starter',
        'Unlimited links in bio',
        'Advanced customization',
        'Custom domain support',
        'Detailed analytics',
        'Premium templates',
        'Priority support',
        'Social media integration',
      ],
      highlighted: true,
      buttonText: 'Upgrade Now',
      color: 'bg-[#e9c0e9]',
      textColor: 'text-[#502274]',
      buttonBg: 'bg-[#502274]',
      buttonText_color: 'text-white',
    },
    {
      name: 'Enterprise',
      description: 'For teams & companies',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Everything in Professional',
        'Team management',
        'Advanced analytics',
        'API access',
        'Custom branding',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
      ],
      highlighted: false,
      buttonText: 'Contact Sales',
      color: 'bg-[#254f1a]',
      textColor: 'text-[#d2e823]',
      buttonBg: 'bg-[#e9c0e9]',
      buttonText_color: 'text-[#502274]',
    },
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  return (
    <main>
      {/* Header Section */}
      <section className="bg-[#254f1a] min-h-[80vh] flex flex-col justify-center items-center text-center px-8">
        <div className="mb-4 inline-block mt-16">
          <span className="px-4 py-1.5 bg-green-700 border border-green-600/50 rounded-full text-[#d2e823] text-sm font-medium">
            Simple, Transparent Pricing
          </span>
        </div>
        <h1 className="text-[#d2e823] font-extrabold text-6xl md:text-7xl mb-6 max-w-4xl">
          Choose Your Perfect Plan
        </h1>
        <p className="text-[#d2e823] text-xl max-w-2xl mb-10">
          Pick the plan that fits your needs and start building your developer profile today
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center gap-4 bg-green-900/30 border border-green-600/50 rounded-full px-2 py-2">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-[#d2e823] text-[#254f1a]'
                : 'text-[#d2e823]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              billingCycle === 'yearly'
                ? 'bg-[#d2e823] text-[#254f1a]'
                : 'text-[#d2e823]'
            }`}
          >
            Yearly
            <span className="ml-2 text-sm bg-green-700 px-2 py-1 rounded-full">Save 25%</span>
          </button>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-[#e9c0e9] min-h-screen flex flex-col justify-center items-center py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-transform hover:scale-105 ${
                plan.highlighted
                  ? `${plan.color} ${plan.textColor} shadow-2xl border-4 border-[#502274]`
                  : `${plan.color} ${plan.textColor} border-2 border-[#502274]/20`
              } ${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-[#d2e823] text-[#502274] px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
              <p className={`mb-6 ${plan.highlighted ? 'opacity-90' : 'opacity-75'}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                {plan.monthlyPrice === 0 ? (
                  <p className="text-5xl font-extrabold">Free</p>
                ) : (
                  <>
                    <p className="text-5xl font-extrabold">
                      ${getPrice(plan)}
                    </p>
                    <p className={`text-sm mt-2 ${plan.highlighted ? 'opacity-90' : 'opacity-75'}`}>
                      per {billingCycle === 'monthly' ? 'month' : 'year'}
                    </p>
                  </>
                )}
              </div>

              <SignInButton>
                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold mb-8 transition-all hover:shadow-lg ${plan.buttonBg} ${plan.buttonText_color}`}
                >
                  {plan.buttonText}
                </button>
              </SignInButton>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <span className={`text-xl font-bold mt-1 ${plan.highlighted ? '' : ''}`}>
                      ✓
                    </span>
                    <span className={plan.highlighted ? 'opacity-90' : 'opacity-75'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center text-sm text-[#502274]/70">
          <p>&copy; 2026 Bittree. Built for developers.</p>
        </div>
      </section>
    </main>
  );
}
