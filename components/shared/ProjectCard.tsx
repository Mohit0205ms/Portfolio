import { icons } from '@/assets';
import Image from 'next/image';

interface ProjectCardProps {
  index: number;
  image: string;
  name: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  image,
  name,
  description,
}) => {
  // Format index to always be two digits
  const formattedIndex = index.toString().padStart(2, '0');

  // Determine if this card should be in reverse layout (even indices)
  const isReversed = index % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } md:items-center gap-8 md:gap-12 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6`}
    >
      {/* Image Section */}
      <div className='flex-1 max-w-xs'>
        <img
          src={image}
          alt={`${name}`}
          className='w-full aspect-square object-cover rounded-lg'
        />
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
          href='#'
          className='inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200'
        >
          <Image src={icons.readMore} alt='Read More' width={16} height={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
