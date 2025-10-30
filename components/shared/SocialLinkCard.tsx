import Image from 'next/image';

const SocialLinkCard = ({
  name = '',
  icon = 'https://img.icons8.com/?size=60&id=118466&format=png',
  profileUrl,
  isAlternate = false,
}: {
  name?: string;
  icon?: string;
  profileUrl?: string;
  isAlternate?: boolean;
}) => {
  return (
    <div className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-[4px] ${
      isAlternate ? 'bg-black' : 'bg-white border border-black'
    }`}>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full"
      >
        <img
          src={icon}
          alt={name}
          width={20}
          height={20}
          className={`${isAlternate ? 'filter invert' : ''}`}
        />
      </a>
    </div>
  );
};

export default SocialLinkCard;
