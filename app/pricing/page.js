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
    <main>
      {/* Header Section */}
      <section className="bg-[#f3f3f1] min-h-screen md:min-h-[80vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-16 md:py-20">
        <div className="mb-4 inline-block mt-12 md:mt-16">
          <span className="px-4 py-2 bg-black rounded-full text-white text-xs sm:text-sm font-medium">
            Simple, Transparent Pricing
          </span>
        </div>
        <h1 className="text-black font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 max-w-4xl leading-tight">
          Choose Your Perfect Plan
        </h1>
        <p className="text-black text-sm sm:text-base md:text-xl max-w-2xl mb-8 md:mb-10 px-2">
          Pick the plan that fits your needs and start building your developer profile today
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center gap-2 sm:gap-4 bg-white px-3 sm:px-6 py-2 rounded-full flex-wrap justify-center">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-3 sm:px-6 py-2 rounded-full font-semibold transition-all text-xs sm:text-sm ${
              billingCycle === 'monthly'
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-3 sm:px-6 py-2 rounded-full font-semibold transition-all text-xs sm:text-sm ${
              billingCycle === 'yearly'
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            Yearly (save 25%)
          </button>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-[#f3f3f1] min-h-screen flex flex-col justify-center items-center py-12 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 md:p-8 transition-transform hover:scale-105 ${
                plan.highlighted
                  ? `${plan.color} ${plan.textColor} shadow-2xl border-4 border-[#502274]`
                  : `${plan.color} ${plan.textColor} border-2 border-[#502274]/20`
              } ${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-[#d2e823] text-[#502274] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold inline-block">
                    Most Popular
                  </span>
                </div>
              )}

              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{plan.name}</h2>
              <p className={`mb-6 text-sm sm:text-base ${plan.highlighted ? 'opacity-90' : 'opacity-75'}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                {plan.monthlyPrice === 0 ? (
                  <p className="text-4xl sm:text-5xl font-extrabold">Free</p>
                ) : (
                  <>
                    <p className="text-4xl sm:text-5xl font-extrabold">
                      ${getPrice(plan)}
                    </p>
                    <p className={`text-xs sm:text-sm mt-2 ${plan.highlighted ? 'opacity-90' : 'opacity-75'}`}>
                      per {billingCycle === 'monthly' ? 'month' : 'year'}
                    </p>
                  </>
                )}
              </div>

              <SignInButton>
                <button
                  className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold mb-8 transition-all hover:shadow-lg text-sm sm:text-base ${plan.buttonBg} ${plan.buttonText_color}`}
                >
                  {plan.buttonText}
                </button>
              </SignInButton>

              <div className="space-y-3 md:space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2 md:gap-3">
                    <span className={`text-lg md:text-xl font-bold mt-1 flex-shrink-0 ${plan.highlighted ? '' : ''}`}>
                      ✓
                    </span>
                    <span className={`text-xs sm:text-sm md:text-base ${plan.highlighted ? 'opacity-90' : 'opacity-75'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 text-center text-xs sm:text-sm text-[#502274]/70 px-4">
          <p>&copy; 2026 Bittree. Built for developers.</p>
        </div>
      </section>
    </main>
  );
}
