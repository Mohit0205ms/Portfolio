// components/ToggleTabs.tsx
'use client';

import { icons } from '@/assets';
import { ReactNode, useState } from 'react';
import Image from 'next/image';

interface Tab {
  id: string;
  label: string;
  icon?: any;
  content?: ReactNode;
}

interface ToggleTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  onChange?: (id: string) => void;
}

const defaultTabs: Tab[] = [
  { id: 'work', label: 'Work', icon: icons.Work },
  { id: 'education', label: 'Education', icon: icons.education }
];

export default function ToggleTabs({
  tabs = defaultTabs,
  defaultTab = tabs[0]?.id,
  onChange
}: ToggleTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleClick = (id: string) => {
    setActiveTab(id);
    onChange?.(id);
  };

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex items-center rounded-full bg-white/10 p-1 shadow-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
              activeTab === tab.id
                ? 'bg-white text-white shadow-md'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab.icon && (
              <Image
                src={tab.icon}
                alt={tab.label}
                width={16}
                height={16}
                className={`w-4 h-4 ${activeTab === tab.id ? '' : 'filter brightness-0 invert'}`}
              />
            )}
            <span className={`${activeTab === tab.id ? "text-black" : "text-white"} font-medium`}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
