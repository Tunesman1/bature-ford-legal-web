
import React, { useState } from 'react';
import { Phone, Mail, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    practiceArea: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form Submitted",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        practiceArea: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      {/* Enhanced Hero Section with image and overlay */}
      <section className="relative py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
        >
          <div className="absolute inset-0 bg-lawfirm-charcoal/90"></div>
        </div>
        <div className="content-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-gray-300 text-lg">
              Get in touch with our team of legal professionals for expert assistance with your legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="content-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below, and our team will get back to you promptly to discuss your legal needs.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject *</label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="practiceArea" className="text-sm font-medium text-gray-700">Practice Area</label>
                  <select
                    id="practiceArea"
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lawfirm-burgundy focus:border-transparent"
                  >
                    <option value="">Select a Practice Area</option>
                    <option value="Criminal and Civil Law">Criminal and Civil Law</option>
                    <option value="Energy Law">Energy Law</option>
                    <option value="Cryptocurrency & Blockchain">Cryptocurrency & Blockchain</option>
                    <option value="Web3 Technologies">Web3 & Decentralized Technologies</option>
                    <option value="Digital Assets & Fintech">Digital Assets & Fintech Law</option>
                    <option value="Intellectual Property">Intellectual Property & Tech Licensing</option>
                    <option value="Data Privacy">Data Privacy & Cybersecurity</option>
                    <option value="Corporate Advisory">Digital Advisory for Corporate & Government</option>
                    <option value="Property">Property & Real Estate Law</option>
                    <option value="Banking">Banking and Finance Law</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</label>
                  <Textarea 
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                    placeholder="Please describe your legal inquiry or concern..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-lawfirm-burgundy hover:bg-lawfirm-burgundy-dark text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>
            </div>
            
            <div>
              <Card className="mb-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-lawfirm-burgundy">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Home className="h-5 w-5 text-lawfirm-burgundy mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Office Address</p>
                        <p className="text-gray-600">123 Legal Avenue</p>
                        <p className="text-gray-600">City Center, Lagos</p>
                        <p className="text-gray-600">Nigeria</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-lawfirm-burgundy mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Phone</p>
                        <p className="text-gray-600">+234 123 456 7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-lawfirm-burgundy mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-gray-600">info@batureford.com</p>
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
          </div>
        </div>
      </section>

      {/* Map Section with Google Maps iframe */}
      <section className="bg-gray-50 py-16">
        <div className="content-container">
          <h2 className="section-title text-center mb-10">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
            <div className="relative w-full h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504528.75276527595!2d6.9223735176272045!3d8.913865333716934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e6157ce3eeda9%3A0x32af1c368be32dfc!2sFederal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1746108323802!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Bature & Ford LP Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
