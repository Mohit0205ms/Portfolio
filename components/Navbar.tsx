'use client';
import { icons } from '@/assets';
import { useWindowDimensions } from '@/hooks/dimensions';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { width } = useWindowDimensions();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-4'>
            {/* Logo and Name */}
            <div className='flex items-center space-x-2'>
              <Image src={icons.logo} alt='logo' width={40} height={40} />
              {/* <h5 className="text-black font-bold text-lg">Mohit Singh</h5> */}
            </div>

            {/* Desktop and Tablet Menu */}
            <div className='hidden md:flex items-center space-x-8'>
              <a
                href='#skills'
                className='text-black font-semibold hover:text-gray-600 transition-colors'
              >
                Skills
              </a>
              <a
                href='#experience'
                className='text-black font-semibold hover:text-gray-600 transition-colors'
              >
                Experience
              </a>
              <a
                href='#about'
                className='text-black font-semibold hover:text-gray-600 transition-colors'
              >
                About Me
              </a>
              <a
                href='#projects'
                className='text-black font-semibold hover:text-gray-600 transition-colors'
              >
                Projects
              </a>
              <a
                href='#contact'
                className='text-black font-semibold hover:text-gray-600 transition-colors'
              >
                Contact Me
              </a>
            </div>

            {/* Resume Button */}
            <div className='flex items-center'>
              <a
                href='/resume.pdf'
                className='flex bg-black text-white items-center gap-2 px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors mr-4'
              >
                <span>Resume</span>
                <Image
                  src={icons.download}
                  alt='download'
                  width={20}
                  height={20}
                />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className='md:hidden text-black focus:outline-none'
                aria-label='Toggle menu'
              >
                <Image
                  src={icons.menu}
                  alt='menu'
                  width={24}
                  height={24}
                  className={`transition-transform duration-200 ${
                    isMenuOpen ? 'rotate-90' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 backdrop-blur-md z-40'
          onClick={toggleMenu}
        />
      )}

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{width: width * 0.7}}
      >
        <div className='px-6 py-8 space-y-6'>
          <div className='flex justify-between items-center mb-4'>
            {/* <h2 className="text-black font-bold text-lg">Menu</h2> */}
            <button
              onClick={toggleMenu}
              className='text-black absolute right-5 focus:outline-none'
              aria-label='Close menu'
            >
              <Image src={icons.close} alt='close' width={16} height={16} />
            </button>
          </div>
          <a
            href='#about'
            className='block text-black font-semibold text-lg hover:text-gray-600 transition-colors py-2'
            onClick={toggleMenu}
          >
            About Me
          </a>
          <a
            href='#skills'
            className='block text-black font-semibold text-lg hover:text-gray-600 transition-colors py-2'
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href='#projects'
            className='block text-black font-semibold text-lg hover:text-gray-600 transition-colors py-2'
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href='#contact'
            className='block text-black font-semibold text-lg hover:text-gray-600 transition-colors py-2'
            onClick={toggleMenu}
          >
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
