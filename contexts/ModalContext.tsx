'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isModalOpen: boolean;
  isResumeModalOpen: boolean;
  openModal: (videoUrl: string, title: string) => void;
  openResumeModal: (resumeUrl: string, title: string) => void;
  closeModal: () => void;
  closeResumeModal: () => void;
  currentVideo: { url: string; title: string } | null;
  currentResume: { url: string; title: string } | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<{ url: string; title: string } | null>(null);
  const [currentResume, setCurrentResume] = useState<{ url: string; title: string } | null>(null);

  const openModal = (videoUrl: string, title: string) => {
    setCurrentVideo({ url: videoUrl, title });
    setIsModalOpen(true);
  };

  const openResumeModal = (resumeUrl: string, title: string) => {
    setCurrentResume({ url: resumeUrl, title });
    setIsResumeModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
    setCurrentResume(null);
  };

  return (
    <ModalContext.Provider value={{
      isModalOpen,
      isResumeModalOpen,
      openModal,
      openResumeModal,
      closeModal,
      closeResumeModal,
      currentVideo,
      currentResume
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
