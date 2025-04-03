
import React from 'react';

const testimonials = [
  {
    quote: "Ailo reduced our time-to-hire by 40% and improved quality of hires. The AI matching is impressively accurate.",
    name: "Sarah Johnson",
    title: "Head of Talent, TechCorp",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "We've been able to find specialized developers that we couldn't attract through traditional channels. Game changer!",
    name: "Michael Chen",
    title: "CTO, StartupGenius",
    image: "https://i.pravatar.cc/150?img=53"
  },
  {
    quote: "The diversity in our candidate pool has improved dramatically since using Ailo. The AI removes unconscious bias from our process.",
    name: "Amara Williams",
    title: "Director of HR, InnovateNow",
    image: "https://i.pravatar.cc/150?img=23"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-ai-dark mb-4 font-heading">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Hear from businesses that have transformed their hiring process with Ailo
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="h-12 w-12 rounded-full border-4 border-white overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="text-center">
                  <h4 className="font-semibold text-ai-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
