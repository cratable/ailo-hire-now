
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ai-dark leading-tight font-heading mb-6">
              Hire Better with 
              <span className="text-ai-blue"> AI-Powered</span> Recruiting
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Find the perfect candidates faster with our AI matching technology. 
              We analyze skills, culture fit, and potential to connect you with 
              top talent that others miss.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-ai-blue hover:bg-ai-blue/90 text-white">
                Post a Job <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue/10">
                See How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                <img 
                  src="https://i.pravatar.cc/100?img=1" 
                  alt="User" 
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
                <img 
                  src="https://i.pravatar.cc/100?img=2" 
                  alt="User" 
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
                <img 
                  src="https://i.pravatar.cc/100?img=3" 
                  alt="User" 
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
              </div>
              <span>Trusted by 1,000+ companies worldwide</span>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="w-full h-full absolute bg-blue-500/20 rounded-2xl blur-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="AI-Powered Hiring" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 animate-pulse-slow">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-ai-blue rounded-full flex items-center justify-center text-white">
                    <span>AI</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">AI Match Score</p>
                    <p className="text-lg font-bold text-ai-blue">98% Match</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
