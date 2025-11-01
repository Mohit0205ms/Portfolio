'use client';
import { useWindowDimensions } from '@/hooks/dimensions';
import SocialLinkCard from './shared/SocialLinkCard';

interface ContactMeSectionProps {
  description: string;
  email: string;
  phoneNumber: string;
}

const ContactMeSection = ({
  description,
  email,
  phoneNumber,
}: ContactMeSectionProps) => {
  const { width } = useWindowDimensions();
  const strokeThickness = width <= 1004 ? '1.5px' : '2px';

  return (
    <div className='flex justify-center py-8 sm:py-12 lg:py-16'>
      <div className='max-w-7xl px-4 sm:px-6 lg:px-8 w-full'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
          {/* Left section - Contact Form */}
          <div className='flex-1'>
            <div className='space-y-6'>
              {/* Name field */}
              <input
                type='text'
                placeholder='Your name'
                className='w-full px-4 py-3 bg-white border border-black rounded-[4px] text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base'
              />

              {/* Email field */}
              <input
                type='email'
                placeholder='Email'
                className='w-full px-4 py-3 bg-white border border-black rounded-[4px] text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base'
              />

              {/* Website field (optional) */}
              <input
                type='url'
                placeholder='Your website (optional)'
                className='w-full px-4 py-3 bg-white border border-black rounded-[4px] text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base'
              />

              {/* Description field */}
              <textarea
                placeholder='How I can help you'
                rows={4}
                className='w-full px-4 py-3 bg-white border border-black rounded-[4px] text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base resize-vertical min-h-[100px]'
              />

              {/* Button and Social Links */}
              <div className='flex flex-col sm:flex-row gap-6 items-center sm:items-start'>
                <button className='w-full sm:w-auto px-8 py-3 bg-black text-white rounded-[4px] hover:bg-zinc-800 transition-colors duration-200 font-medium text-base'>
                  Get In Touch
                </button>

                <div className='flex justify-center sm:justify-start space-x-4'>
                  <SocialLinkCard />
                  <SocialLinkCard isAlternate />
                  <SocialLinkCard />
                  <SocialLinkCard isAlternate />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className='flex-1 flex flex-col justify-center'>
            <div className='space-y-4'>
              <div className='space-y-2'>
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
                <p className='text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight'>
                  Something special
                </p>
              </div>

              <div className='space-y-3 pt-4'>
                <p className='text-zinc-600 text-base sm:text-lg leading-relaxed max-w-md'>
                  {description}
                </p>

                <div className='space-y-2'>
                  <p className='text-black text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold'>
                    {email}
                  </p>
                  <p className='text-black text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold'>
                    {phoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
