'use client';

import SkillSection from '@/components/SkillSection';
import { usePortfolioData } from '@/contexts/PortfolioDataContext';

function SkillsPageContent() {
  const { data, loading, error, refreshData } = usePortfolioData();

  if (loading) {
    return <div className='min-h-screen bg-white flex items-center justify-center'><span className='text-black'>Loading...</span></div>;
  }

  if (error) {
    return (
      <div className='min-h-screen bg-white flex flex-col items-center justify-center gap-4'>
        <span className='text-black'>Error: {error}</span>
        <button
          onClick={refreshData}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Retry Loading
        </button>
      </div>
    );
  }

  if (!data) {
    return <div className='min-h-screen bg-white flex items-center justify-center'><span className='text-black'>No data available</span></div>;
  }

  const { skills } = data;

  return (
    <div className='min-h-screen bg-white'>
      <div>
        <SkillSection skills={skills} showViewAll={false} />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return <SkillsPageContent />;
}
