import Image from 'next/image';

const SkillCard = ({
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
    <div className={`w-[170px] h-[170px] md:w-[200px] md:h-[200px] ${
      isAlternate ? 'bg-black' : 'bg-white border-2 border-black'
    }`}>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-full h-full gap-2"
      >
        <img
          src={icon}
          alt={name}
          width={56}
          height={56}
          className={`${isAlternate ? 'filter invert' : ''}`}
        />
        <span className={`text-bold text-center ${isAlternate ? 'text-white' : 'text-black'}`}>{name}</span>
      </a>
    </div>
  );
};

export default SkillCard;
