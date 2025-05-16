
import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "Bature & Ford LP provided exceptional guidance through a complex litigation case. Their strategic thinking and attention to detail were invaluable.",
      author: "Sarah Johnson",
      position: "CEO, Tech Innovations Ltd"
    },
    {
      text: "The team's expertise in cryptocurrency regulations helped our startup navigate the evolving legal landscape with confidence.",
      author: "Michael Chen",
      position: "Founder, BlockChain Solutions"
    },
    {
      text: "Their comprehensive approach to intellectual property protection ensured our creative assets remained secure during international expansion.",
      author: "David Williams",
      position: "Creative Director, Design Works Inc."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-lawfirm-charcoal text-white">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Client Testimonials</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See what our clients say about our services and commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="mb-4 text-lawfirm-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className="text-gray-100 italic mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-medium text-lg">{testimonial.author}</p>
                <p className="text-gray-300 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
