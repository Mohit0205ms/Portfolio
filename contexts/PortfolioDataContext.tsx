'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PortfolioData {
  skills: any[];
  experience: any[];
  education: any[];
  projects: any[];
  aboutMe: any;
  socialLinks: any[];
  home: any;
}

interface PortfolioDataContextType {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
  refreshData?: () => void;
}

const PortfolioDataContext = createContext<PortfolioDataContextType | undefined>(undefined);

export function PortfolioDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const validateData = (data: any): boolean => {
    return data &&
           typeof data === 'object' &&
           Array.isArray(data.skills) &&
           Array.isArray(data.experience) &&
           Array.isArray(data.projects);
  };

  const loadData = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      // Try to load from localStorage (unless force refresh)
      if (!forceRefresh && typeof window !== 'undefined') {
        try {
          const cached = localStorage.getItem('portfolio-data');
          if (cached) {
            const parsedData = JSON.parse(cached);
            if (validateData(parsedData)) {
              console.log('Loaded valid data from cache');
              setData(parsedData);
              setLoading(false);
              return;
            } else {
              console.log('Cached data invalid, clearing cache');
              localStorage.removeItem('portfolio-data');
            }
          }
        } catch (cacheError) {
          console.error('Error loading from cache:', cacheError);
          localStorage.removeItem('portfolio-data');
        }
      }

      // Fetch from API
      console.log('Fetching from API...');
      const response = await fetch('/api/portfolio-data');
      if (!response.ok) {
        throw new Error(`API returned ${response.status}: ${response.statusText}`);
      }

      const portfolioData = await response.json();

      if (!validateData(portfolioData)) {
        throw new Error('API returned invalid data structure');
      }

      console.log('Fetched and validated data from API');
      setData(portfolioData);

      // Cache in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-data', JSON.stringify(portfolioData));
      }

      setRetryCount(0); // Reset retry count on success

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      console.error('Data loading error:', errorMessage);

      setError(errorMessage);

      // Retry logic (max 3 retries)
      if (retryCount < 3) {
        console.log(`Retrying in 1 second... (attempt ${retryCount + 1}/3)`);
        setRetryCount(prev => prev + 1);
        setTimeout(() => loadData(forceRefresh), 1000);
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Expose a refresh function for manual retries
  const refreshData = () => {
    setRetryCount(0);
    loadData(true);
  };

  return (
    <PortfolioDataContext.Provider value={{ data, loading, error, refreshData }}>
      {children}
    </PortfolioDataContext.Provider>
  );
}

export function usePortfolioData() {
  const context = useContext(PortfolioDataContext);
  if (context === undefined) {
    throw new Error('usePortfolioData must be used within a PortfolioDataProvider');
  }
  return context;
}
