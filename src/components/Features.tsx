
import React from 'react';
import { Search, Users, Briefcase, Star } from 'lucide-react';

const featureData = [
  {
    icon: <Search className="h-6 w-6 text-ai-blue" />,
    title: "Smart Candidate Matching",
    description: "Our AI analyzes resumes and job descriptions to find the best matches based on skills, experience, and potential."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-ai-purple" />,
    title: "Automated Screening",
    description: "Save time with AI-powered screening that ranks candidates based on qualifications and fit for your open positions."
  },
  {
    icon: <Users className="h-6 w-6 text-ai-blue" />,
    title: "Diversity & Inclusion",
    description: "Our platform helps eliminate bias in hiring by focusing on skills and qualifications, not background or demographics."
  },
  {
    icon: <Star className="h-6 w-6 text-ai-purple" />,
    title: "Predictive Analysis",
    description: "Identify candidates most likely to succeed in your organization with our performance prediction algorithms."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-ai-dark mb-4 font-heading">AI-Powered Hiring Features</h2>
          <p className="text-lg text-gray-600">
            Our platform uses advanced machine learning to transform how you find and hire talent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-ai-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
