'use client';
import { useState, useRef } from 'react';
import { useWindowDimensions } from '@/hooks/dimensions';
import SocialLinkCard from './shared/SocialLinkCard';
import AnimatedSection from './shared/AnimatedSection';
import { urlFor } from '@/lib/sanity';

interface SocialLinkData {
  _id: string;
  platform: string;
  url: string;
  icon: {
    asset: {
      _ref: string;
    };
  };
  isActive: boolean;
}

interface ContactMeSectionProps {
  description: string;
  email: string;
  phoneNumber: string;
  socialLinks: SocialLinkData[];
}

const ContactMeSection = ({
  description,
  email,
  phoneNumber,
  socialLinks,
}: ContactMeSectionProps) => {
  const { width } = useWindowDimensions();
  const strokeThickness = width <= 1004 ? '1.5px' : '2px';

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Refs for form inputs
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  // Transform Sanity data to match SocialLinkCard props
  const transformedSocialLinks = socialLinks
    .filter(link => link.isActive)
    .map((link, index) => ({
      name: link.platform,
      icon: urlFor(link.icon).url(),
      profileUrl: link.url,
      isAlternate: index % 2 === 1,
    }));

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Message sent successfully!' });
        // Clear form
        setFormData({ name: '', email: '', website: '', description: '' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to send message' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle message dismissal
  const dismissMessage = () => {
    setMessage(null);
  };

  return (
    <div id='contact' className='flex justify-center py-8 sm:py-12 lg:py-16'>
      <div className='max-w-7xl px-4 sm:px-6 lg:px-8 w-full'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
          {/* Left section - Contact Form */}
          <AnimatedSection className='flex-1' direction='left'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name field */}
              <AnimatedSection delay={0.05}>
                <input
                  ref={nameRef}
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Your name'
                  required
                  className='w-full px-4 py-3 bg-white border border-black rounded-[4px] text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base'
                />
              </AnimatedSection>

              {/* Email field */}
              <AnimatedSection delay={0.1}>
                <input
                  ref={emailRef}
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Email'
                  required
                  className='w-full px-4 py-3 bg-white border border-black rounded-[4px] text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base'
                />
              </AnimatedSection>

              {/* Website field (optional) */}
              <AnimatedSection delay={0.15}>
                <input
                  ref={websiteRef}
                  type='url'
                  name='website'
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder='Your website (optional)'
                  className='w-full px-4 py-3 bg-white border border-black rounded-[4px] text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base'
                />
              </AnimatedSection>

              {/* Description field */}
              <AnimatedSection delay={0.2}>
                <textarea
                  ref={descriptionRef}
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder='How I can help you'
                  rows={4}
                  required
                  className='w-full px-4 py-3 bg-white border border-black rounded-[4px] text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base resize-vertical min-h-[100px]'
                />
              </AnimatedSection>

              {/* Success/Error Message */}
              {message && (
                <AnimatedSection delay={0.22}>
                  <div className={`relative p-4 rounded-[4px] ${
                    message.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    <button
                      onClick={dismissMessage}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 text-lg font-bold leading-none"
                      aria-label="Close message"
                    >
                      ×
                    </button>
                    {message.text}
                  </div>
                </AnimatedSection>
              )}

              {/* Button and Social Links */}
              <AnimatedSection delay={0.25}>
                <div className='flex flex-col sm:flex-row gap-6 items-center sm:items-start'>
                  <button
                    type='submit'
                    disabled={isLoading}
                    className='w-full sm:w-auto px-8 py-3 bg-black text-white rounded-[4px] hover:bg-zinc-800 disabled:bg-zinc-600 disabled:cursor-not-allowed transition-colors duration-200 font-medium text-base'
                  >
                    {isLoading ? 'Sending...' : 'Get In Touch'}
                  </button>

                  <div className='flex justify-center sm:justify-start space-x-4'>
                    {transformedSocialLinks.map((link, index) => (
                      <SocialLinkCard
                        key={link.name}
                        name={link.name}
                        icon={link.icon}
                        profileUrl={link.profileUrl}
                        isAlternate={link.isAlternate}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </form>
          </AnimatedSection>

          {/* Right Section - Text Content */}
          <AnimatedSection className='flex-1 flex flex-col justify-center' direction='right'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <AnimatedSection delay={0.05}>
                  <p className='text-black font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight'>
                    Let's{' '}
                    <span
                      style={{
                        color: 'white',
                        WebkitTextFillColor: 'white',
                        WebkitTextStroke: `${strokeThickness} black`,
                      }}
                    >
                      talk
                    </span>{' '}
                    for
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <p className='text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight'>
                    Something special
                  </p>
                </AnimatedSection>
              </div>

              <div className='space-y-3 pt-4'>
                <AnimatedSection delay={0.15}>
                  <p className='text-zinc-600 text-base sm:text-lg leading-relaxed max-w-md'>
                    {description}
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className='space-y-2'>
                    <p className='text-black text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold'>
                      {email}
                    </p>
                    <p className='text-black text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold'>
                      {phoneNumber}
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
