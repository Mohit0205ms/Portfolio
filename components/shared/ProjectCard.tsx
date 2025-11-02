'use client';

import { icons } from '@/assets';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  index: number;
  image: string;
  name: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  onOpenModal: (videoUrl: string, title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  image,
  name,
  description,
  demoUrl,
  githubUrl,
  liveUrl,
  onOpenModal,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);

  // Format index to always be two digits
  const formattedIndex = index.toString().padStart(2, '0');

  // Determine if this card should be in reverse layout (even indices)
  const isReversed = index % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } md:items-center gap-8 md:gap-12 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6 relative cursor-pointer ${
        (isCardHovered || isCardClicked) ? 'transform scale-105' : ''
      }`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      onClick={() => setIsCardClicked(!isCardClicked)}
    >
      {/* Image Section */}
      <div
        className='flex-1 max-w-xs relative'
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          setIsImageClicked(!isImageClicked);
        }}
      >
        <img
          src={image}
          alt={`${name}`}
          className={`w-full aspect-square object-cover rounded-lg transition-all duration-300 cursor-pointer ${
            (isImageHovered || isImageClicked) ? 'blur-sm scale-105' : ''
          }`}
        />

        {/* Hover Buttons Overlay */}
        {(isImageHovered || isImageClicked) && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm rounded-lg transition-all duration-300">
            <div className="flex gap-3 transform transition-all duration-500 ease-out animate-fade-in">
              {demoUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenModal(demoUrl, name);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-110 hover:shadow-lg shadow-blue-500/25"
                >
                  Demo
                </button>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-110 hover:shadow-lg shadow-gray-500/25"
                >
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-110 hover:shadow-lg shadow-green-500/25"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-4">
        <div className="space-y-2">
          <span className="text-2xl md:text-5xl font-extrabold text-white block">
            {formattedIndex}
          </span>
          <h3 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {name}
          </h3>
        </div>

        <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
          {description}
        </p>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className='inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200'
        >
          <Image src={icons.readMore} alt='Read More' width={16} height={16} />
        </a>
      </div>


    </div>
  );
};

export default ProjectCard;
