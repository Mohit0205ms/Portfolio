import { images } from '@/assets';
import Image from 'next/image';

const AboutMeSection = ({
  starting,
  middle,
  ending,
}: {
  starting: string;
  middle: string;
  ending: string;
}) => {
  return (
    <div className='flex justify-center bg-gray-50 py-16'>
      <div className='max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          {/* Image Section */}
          <div className='flex-1'>
            <Image
              src={images.aboutMe}
              alt='About Me'
              className='w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl object-contain mx-auto lg:mx-0'
            />
          </div>

          {/* Text Section */}
          <div className='flex-1 text-center lg:text-left'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-black mb-8'>
              About <span className='font-extrabold'>Me</span>
            </h2>
            <div className='space-y-6 text-zinc-600 leading-relaxed'>
              <p className='text-base md:text-lg'>{starting}</p>
              <p className='text-base md:text-lg'>{middle}</p>
              <p className='text-base md:text-lg'>{ending}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
