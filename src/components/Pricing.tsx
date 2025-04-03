
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small businesses starting with AI-powered hiring",
    features: [
      "5 active job postings",
      "AI candidate matching",
      "Basic analytics",
      "Email support",
      "30-day candidate database access"
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: "$299",
    description: "For growing teams that need more advanced hiring features",
    features: [
      "15 active job postings",
      "Advanced AI matching algorithms",
      "Detailed analytics & reports",
      "Priority support",
      "90-day candidate database access",
      "Custom screening questions",
      "Branded career page"
    ],
    popular: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations with complex needs",
    features: [
      "Unlimited job postings",
      "Custom AI models for your industry",
      "Advanced analytics & reporting",
      "Dedicated account manager",
      "API access",
      "ATS integration",
      "Custom workflows",
      "Onboarding assistance"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-ai-dark mb-4 font-heading">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your hiring needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden ${
                plan.popular 
                  ? 'ring-2 ring-ai-blue shadow-lg scale-105 relative z-10' 
                  : 'border border-gray-200 shadow'
              }`}
            >
              {plan.popular && (
                <div className="bg-ai-blue text-white text-sm font-semibold py-1 text-center">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-ai-dark mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-ai-dark">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500 ml-1">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-ai-blue hover:bg-ai-blue/90 text-white' 
                      : 'bg-white border border-ai-blue text-ai-blue hover:bg-ai-blue/10'
                  }`}
                >
                  {plan.buttonText}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
