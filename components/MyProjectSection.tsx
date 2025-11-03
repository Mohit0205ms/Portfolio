'use client';

import ProjectCard from './shared/ProjectCard';
import AnimatedSection from './shared/AnimatedSection';
import VideoModal from './shared/VideoModal';
import ResumeModal from './shared/ResumeModal';
import ViewAllButton from './shared/ViewAllButton';
import { useModal } from '@/contexts/ModalContext';
import { useRouter } from 'next/navigation';

interface ProjectData {
  _id: string;
  name: string;
  description: any[];
  githubLink: string;
  priority: number;
}

interface MyProjectSectionProps {
  projects: ProjectData[];
  showViewAll?: boolean;
  useViewport?: boolean;
}

const MyProjectSection = ({ projects, showViewAll = true, useViewport = false }: MyProjectSectionProps) => {
  const { isModalOpen, isResumeModalOpen, openModal, closeModal, closeResumeModal, currentVideo, currentResume } = useModal();
  const router = useRouter();

  // Helper function to convert Sanity rich text to plain text
  const convertRichTextToString = (blocks: any[]): string => {
    if (!blocks || !Array.isArray(blocks)) return '';

    return blocks
      .map(block => {
        if (block._type === 'block' && block.children) {
          return block.children
            .map((child: any) => child.text || '')
            .join('');
        }
        return '';
      })
      .join('\n\n');
  };

  // Transform Sanity data to match ProjectCard props
  const allTransformedProjects = projects
    .sort((a, b) => a.priority - b.priority) // Sort by priority
    .map((project, index) => ({
      index: index + 1,
      image: 'https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322', // Default image since Sanity doesn't have images
      name: project.name,
      description: convertRichTextToString(project.description),
      demoUrl: '', // No demo URL in Sanity data
      githubUrl: project.githubLink,
      liveUrl: '', // No live URL in Sanity data
    }));

  // Always limit to maximum 3 projects
  const transformedProjects = allTransformedProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16" useViewport={useViewport}>
          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            My <span className='font-extrabold'>Projects</span>
          </h2>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="space-y-12">
          {transformedProjects.map((project, index) => {
            const projectId = project.name?.toLowerCase().replace(/\s+/g, '-') || `project-${index}`;
            return (
              <AnimatedSection key={projectId} delay={index * 0.1} useViewport={useViewport}>
                <ProjectCard
                  index={project.index}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  onOpenModal={openModal}
                />
              </AnimatedSection>
            );
          })}
        </div>

        {/* View All Button */}
        {showViewAll && projects.length > 3 && (
          <div className="text-center mt-12">
            <ViewAllButton
              onClick={() => router.push('/projects')}
              isDarkBackground={true}
            />
          </div>
        )}
      </div>

      {/* Video Modal */}
      {currentVideo && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoUrl={currentVideo.url}
          title={currentVideo.title}
        />
      )}

      {/* Resume Modal */}
      {currentResume && (
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={closeResumeModal}
          resumeUrl={currentResume.url}
          title={currentResume.title}
        />
      )}
    </section>
  );
};

export default MyProjectSection;
