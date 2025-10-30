'use client';
import { images } from '@/assets';
import Image from 'next/image';
import SocialLinkCard from './shared/SocialLinkCard';
import { useWindowDimensions } from '@/hooks/dimensions';

const HeroSection = () => {
  const { width } = useWindowDimensions();
  const strokeThickness = width <= 1004 ? '1.5px' : '2px';
  return (
    <div className='flex justify-center'>
      <div className='max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16'>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
          <div className='flex-1 lg:pr-8 text-left mt-10 lg:mt-0'>
            {/* Left Side */}
            <div className='mb-4'>
              <p className='text-black text-[28px] md:text-4xl xl:text-5xl mb-2'>
                Hello I'm{' '}
                <span className='font-extrabold text-black'>Mohit Singh.</span>
              </p>
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
              <p className='text-black text-[28px] md:text-4xl lg:text-4xl xl:text-5xl mb-2'>
                Based In{' '}
                <span className='font-extrabold text-black'>India</span>
              </p>
            </div>
            <div className='mb-6'>
              <span className='text-zinc-500 text-base leading-6'>
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </span>
            </div>
            <div className='flex justify-start space-x-4'>
              <SocialLinkCard />
              <SocialLinkCard isAlternate />
              <SocialLinkCard />
              <SocialLinkCard isAlternate />
            </div>
          </div>
          <div className='flex-1 mt-8 lg:mt-0'>
            {/* Right Side */}
            <Image
              src={images.heroBanner}
              alt='Hero Banner'
              className='w-full h-auto md:max-w-md lg:max-w-xl xl:max-w-2xl object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
