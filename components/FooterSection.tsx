import { icons } from "@/assets";
import Image from "next/image";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src={icons.logo}
              alt="Logo"
              width={32}
              height={32}
              className="filter invert"
            />
            <span className="text-lg font-semibold">Mohit Singh</span>
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Mohit Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
