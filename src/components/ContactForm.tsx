import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyType: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'residential',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyType: 'residential',
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team of real estate experts.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2">Thank You!</h4>
                  <p>Your message has been received. One of our representatives will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="propertyType" className="block text-gray-700 mb-2">
                      Property Interest
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="luxury">Luxury</option>
                      <option value="rental">Rental</option>
                      <option value="investment">Investment</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 font-medium rounded-md transition-colors duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-blue-900 hover:bg-blue-800 text-white'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Our Office</h4>
                    <p>123 Real Estate Avenue</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p>(123) 456-7890</p>
                    <p>(123) 456-7891</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p>info@estateelite.com</p>
                    <p>support@estateelite.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="w-10 h-10 rounded-full bg-blue-800 hover:bg-white hover:text-blue-900 flex items-center justify-center transition-colors duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      {/* Icon would go here */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
