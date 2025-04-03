
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Post Your Job",
    description: "Create a job listing with your requirements and our AI will optimize it to attract top candidates.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    number: "02",
    title: "AI Finds Matches",
    description: "Our algorithms search through qualified candidates and rank them based on your specific needs.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    number: "03",
    title: "Review Top Candidates",
    description: "Browse through AI-curated profiles with match scores and insights on why they're a good fit.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 feature-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-ai-dark mb-4 font-heading">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our streamlined process makes hiring easier and more effective
          </p>
        </div>
        
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="rounded-xl shadow-lg w-full object-cover h-[350px]"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-ai-blue text-white text-4xl font-bold p-4 rounded-lg">
                    {step.number}
                  </div>
                </div>
              </div>
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <h3 className="text-2xl font-bold text-ai-dark mb-4 font-heading">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-600">
                        {index === 0 && item === 1 && "Optimized job descriptions"}
                        {index === 0 && item === 2 && "Targeted candidate sourcing"}
                        {index === 0 && item === 3 && "Automatic job distribution"}
                        
                        {index === 1 && item === 1 && "Advanced skill matching"}
                        {index === 1 && item === 2 && "Personality & culture fit analysis"}
                        {index === 1 && item === 3 && "Bias-free candidate selection"}
                        
                        {index === 2 && item === 1 && "Detailed match analytics"}
                        {index === 2 && item === 2 && "AI-generated interview questions"}
                        {index === 2 && item === 3 && "One-click candidate communication"}
                      </span>
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

export default HowItWorks;
