const ExperienceCard = ({
  name = '',
  icon = '',
  profileUrl,
  isAlternate = false,
  position = '',
  from = '',
  to = '',
  description = '',
  location = '',
}: {
  name?: string;
  icon?: string;
  profileUrl?: string;
  isAlternate?: boolean;
  position?: string;
  from?: string;
  to?: string;
  description?: string;
  location?: string;
}) => {
  return (
    <div
      className={`p-6 rounded-lg backdrop-blur-sm border border-white ${
        isAlternate ? 'bg-white/10' : 'bg-black'
      } transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
    >
      <>
        <div className='flex items-start gap-4 mb-4'>
          {icon && (
            <img
              src={icon}
              alt={name}
              width={48}
              height={48}
              className={`flex-shrink-0 ${isAlternate ? 'filter invert' : ''}`}
            />
          )}
          <div className='flex-1'>
            <h3 className='font-semibold text-lg mb-1 text-white'>
              {position}
            </h3>
            <p className='font-medium text-lg mb-1 text-white'>{name}</p>
          </div>
          <div className='hidden sm:block text-right text-sm font-medium text-zinc-300'>
            {location && (
              <p className='text-sm font-medium mb-1 text-zinc-300'>
                {location}
              </p>
            )}
            <p>
              {from} - {to}
            </p>
          </div>
        </div>
        <div className='sm:hidden text-left text-sm font-medium text-zinc-300 mb-4'>
          {location && (
            <p className='text-sm font-medium mb-1 text-zinc-300'>
              {location}
            </p>
          )}
          <p>
            {from} - {to}
          </p>
        </div>
        {description && (
          <p className='text-sm leading-relaxed text-zinc-200'>{description}</p>
        )}
      </>
    </div>
  );
};

export default ExperienceCard;
