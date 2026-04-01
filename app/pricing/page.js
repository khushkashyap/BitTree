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
      color: 'bg-[#d2e823]',
      textColor: 'text-black',
      buttonBg: 'bg-[#254f1a]',
      buttonText_color: 'text-white',
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
    <main className="bg-[#f3f3f1]">
      {/* Header Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <div className="mb-4 mt-10">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black rounded-full text-white text-xs sm:text-sm font-medium">
            Simple, Transparent Pricing
          </span>
        </div>

        <h1 className="text-black font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 max-w-3xl leading-tight">
          Choose Your Perfect Plan
        </h1>

        <p className="text-black text-sm sm:text-base md:text-lg max-w-xl mb-8 md:mb-10">
          Pick the plan that fits your needs and start building your developer
          profile today
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center gap-2 bg-white px-2 py-2 rounded-full flex-wrap justify-center shadow-sm">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold transition-all text-xs sm:text-sm ${
              billingCycle === 'monthly'
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold transition-all text-xs sm:text-sm ${
              billingCycle === 'yearly'
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Yearly (save 25%)
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="flex flex-col items-center px-4 sm:px-6 md:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.03] ${
                plan.highlighted
                  ? `${plan.color} ${plan.textColor} shadow-xl border-4 border-[#502274]`
                  : `${plan.color} ${plan.textColor} border border-[#502274]/20`
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-[#d2e823] text-[#502274] px-3 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {plan.name}
              </h2>

              <p className="mb-5 text-sm sm:text-base opacity-80">
                {plan.description}
              </p>

              <div className="mb-6">
                {plan.monthlyPrice === 0 ? (
                  <p className="text-3xl sm:text-4xl font-extrabold">Free</p>
                ) : (
                  <>
                    <p className="text-3xl sm:text-4xl font-extrabold">
                      ${getPrice(plan)}
                    </p>
                    <p className="text-xs sm:text-sm mt-1 opacity-70">
                      per {billingCycle === 'monthly' ? 'month' : 'year'}
                    </p>
                  </>
                )}
              </div>

              <SignInButton>
                <button
                  className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-full font-semibold mb-6 transition-all hover:shadow-md text-sm sm:text-base ${plan.buttonBg} ${plan.buttonText_color}`}
                >
                  {plan.buttonText}
                </button>
              </SignInButton>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-base font-bold mt-[2px]">✓</span>
                    <span className="text-xs sm:text-sm md:text-base opacity-80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs sm:text-sm text-[#502274]/70">
          <p>&copy; 2026 Bittree. Built for developers.</p>
        </div>
      </section>
    </main>
  );
}
