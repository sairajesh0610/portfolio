import Image from 'next/image';
import React, { useState } from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Option 1: Using EmailJS (Recommended)
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create an email service (Gmail, Outlook, etc.)
      // 3. Create an email template
      // 4. Replace the credentials below with your actual values
      
      const { default: emailjs } = await import('@emailjs/browser');
      
      // Replace these with your actual EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'your-email@example.com' // Replace with your email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-8 md:grid-cols-2">
              <Input 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input 
                name="email"
                type="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mt-8">
              <Input 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mt-8">
              <TextArea 
                name="message"
                placeholder="Message" 
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {submitStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <div className="mt-8">
              <Button 
                type="submit"
                className="mt-5 bg-indigo-500 px-8 font-semibold text-white hover:bg-indigo-600 focus:ring-2 focus:ring-primary-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
