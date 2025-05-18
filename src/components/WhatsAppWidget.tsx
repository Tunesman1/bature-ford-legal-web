
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const WhatsAppWidget: React.FC = () => {
  const phoneNumber = '+2348145455294';
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Chat with us on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default WhatsAppWidget;
