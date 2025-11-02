'use client';

import { useState, useEffect } from 'react';
import { useModal } from '@/contexts/ModalContext';

const ScrollToTopButton = () => {
  const { isModalOpen } = useModal();
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={isModalOpen ? undefined : scrollToTop}
          disabled={isModalOpen}
          className={`fixed bottom-8 right-8 z-50 p-3 bg-gray-800/90 text-white border border-gray-600 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isModalOpen
              ? 'blur-sm opacity-50 cursor-not-allowed'
              : 'hover:scale-110'
          }`}
          aria-label='Scroll to top'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 10l7-7m0 0l7 7m-7-7v18'
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
