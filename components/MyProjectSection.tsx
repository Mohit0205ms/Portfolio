'use client';

import ProjectCard from './shared/ProjectCard';
import AnimatedSection from './shared/AnimatedSection';
import VideoModal from './shared/VideoModal';
import ResumeModal from './shared/ResumeModal';
import { useModal } from '@/contexts/ModalContext';

interface ProjectData {
  _id: string;
  name: string;
  description: any[];
  githubLink: string;
  priority: number;
}

interface MyProjectSectionProps {
  projects: ProjectData[];
}

const MyProjectSection = ({ projects }: MyProjectSectionProps) => {
  const { isModalOpen, isResumeModalOpen, openModal, closeModal, closeResumeModal, currentVideo, currentResume } = useModal();

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
  const transformedProjects = projects
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

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            My <span className='font-extrabold'>Projects</span>
          </h2>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="space-y-12">
          {transformedProjects.map((project, index) => (
            <AnimatedSection key={project.index} delay={index * 0.1}>
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
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div> */}
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
