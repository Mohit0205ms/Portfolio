import ProjectCard from './shared/ProjectCard';

const MyProjectSection = () => {
  const projects = [
    {
      index: 1,
      image: 'https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322',
      name: 'Crypto Screener Application',
      description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
    },
    {
      index: 2,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      name: 'E-Commerce Platform',
      description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment integration, inventory management, and responsive design for mobile and desktop users."
    },
    {
      index: 3,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      name: 'Task Management App',
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface. Built using modern web technologies for optimal performance."
    },
    {
      index: 4,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      name: 'Weather Dashboard',
      description: "A responsive weather dashboard that provides real-time weather information, forecasts, and interactive maps. Integrates with multiple weather APIs for accurate and up-to-date data."
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            My <span className='font-extrabold'>Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.index}
              index={project.index}
              image={project.image}
              name={project.name}
              description={project.description}
            />
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default MyProjectSection;
