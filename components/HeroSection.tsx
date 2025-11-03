'use client';
import { images } from '@/assets';
import Image from 'next/image';
import SocialLinkCard from './shared/SocialLinkCard';
import { useWindowDimensions } from '@/hooks/dimensions';
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

interface HomeData {
  description: any[];
  resume: string;
}

interface HeroSectionProps {
  socialLinks: SocialLinkData[];
  home: HomeData;
}

const HeroSection = ({ socialLinks, home }: HeroSectionProps) => {
  const { width } = useWindowDimensions();
  const strokeThickness = width <= 1004 ? '1.5px' : '2px';

  // Helper function to convert Sanity rich text to plain text
  const convertRichTextToString = (blocks: any[]): string => {
    if (!blocks || !Array.isArray(blocks)) return '';

    return blocks
      .map(block => {
        if (block._type === 'block' && block.children) {
          return block.children
            .map((child: any) => child.text || '')
            .join('');
        }
        return '';
      })
      .join('\n\n');
  };

  // Transform Sanity data to match SocialLinkCard props
  const transformedSocialLinks = socialLinks
    .filter(link => link.isActive)
    .map((link, index) => ({
      name: link.platform,
      icon: urlFor(link.icon).url(),
      profileUrl: link.url,
      isAlternate: index % 2 === 1,
    }));

  // Get description from home data
  const heroDescription = convertRichTextToString(home.description);
  return (
    <div className='flex justify-center'>
      <div className='max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16'>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
          <AnimatedSection className='flex-1 lg:pr-8 text-left mt-10 lg:mt-0' direction='left' useViewport={true}>
            {/* Left Side */}
            <div className='mb-4'>
              <AnimatedSection delay={0.05} useViewport={true}>
                <p className='text-black text-[28px] md:text-4xl xl:text-5xl mb-2'>
                  Hello I'm{' '}
                  <span className='font-extrabold text-black'>Mohit Singh.</span>
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} useViewport={true}>
                <p className='text-black text-[28px] md:text-4xl xl:text-5xl mb-2'>
                  <span className='font-extrabold text-black'>Software</span>{' '}
                  <span
                    style={{
                      color: 'white',
                      WebkitTextFillColor: 'white',
                      WebkitTextStroke: `${strokeThickness} black`,
                    }}
                    className='font-extrabold'
                  >
                    Developer
                  </span>
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} useViewport={true}>
                <p className='text-black text-[28px] md:text-4xl lg:text-4xl xl:text-5xl mb-2'>
                  Based In{' '}
                  <span className='font-extrabold text-black'>India</span>
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} className='mb-6' useViewport={true}>
              <span className='text-zinc-500 text-base leading-6'>
                {heroDescription}
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.25} useViewport={true}>
              <div className='flex justify-start space-x-4'>
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
            </AnimatedSection>
          </AnimatedSection>
          <AnimatedSection className='flex-1 mt-8 lg:mt-0' direction='right' useViewport={true}>
            {/* Right Side */}
            <Image
              src={images.heroBanner}
              alt='Hero Banner'
              className='w-full h-auto md:max-w-md lg:max-w-xl xl:max-w-2xl object-contain'
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
