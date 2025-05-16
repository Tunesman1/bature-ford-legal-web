
import React from 'react';
import { Phone, Mail, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <Card className="mb-8 hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <h3 className="text-xl font-serif font-semibold mb-4 text-lawfirm-burgundy">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Home className="h-5 w-5 text-lawfirm-burgundy mr-3 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Office Address</p>
                <p className="text-gray-600">B25, Harmony Estate</p>
                <p className="text-gray-600">Galadimawa, Abuja</p>
                <p className="text-gray-600">Nigeria</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-lawfirm-burgundy mr-3 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-gray-600">09164228003</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-lawfirm-burgundy mr-3 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-gray-600">batureandfordlp@gmail.com</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-serif font-semibold mb-4 text-lawfirm-burgundy">Office Hours</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-700">Monday - Friday</span>
              <span className="text-gray-700">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Saturday</span>
              <span className="text-gray-700">10:00 AM - 2:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Sunday</span>
              <span className="text-gray-700">Closed</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
