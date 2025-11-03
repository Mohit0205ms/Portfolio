""
interface ViewAllButtonProps {
  onClick: () => void;
  isDarkBackground?: boolean;
  className?: string;
}

const ViewAllButton = ({
  onClick,
  isDarkBackground = true,
  className = ''
}: ViewAllButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-semibold rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isDarkBackground
          ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
          : 'bg-black/80 text-white border border-gray-600 hover:bg-gray-700/90'
      } ${className}`}
    >
      View All
    </button>
  );
};

export default ViewAllButton;
