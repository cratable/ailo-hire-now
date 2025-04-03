
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-ai-dark font-heading">ailo<span className="text-ai-blue">.</span></span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-ai-blue transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-ai-blue transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-ai-blue transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-ai-blue transition-colors">
              Pricing
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-ai-blue transition-colors">
              Login
            </a>
            <Button className="bg-ai-blue hover:bg-ai-blue/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
