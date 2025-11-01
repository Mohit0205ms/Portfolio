import ExperienceCard from './shared/ExperienceCard';
import ToggleButton from './shared/ToogleButton';
import AnimatedSection from './shared/AnimatedSection';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
      position: 'Software Developer Engineer',
      from: 'Nov 2025',
      to: 'Present',
      name: 'Google',
      location: 'Gurugram, Haryane, India',
      isAlternate: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      icon: 'https://png.pngtree.com/png-clipart/20181003/ourmid/pngtree-facebook-logo-facebook-icon-png-image_3654755.png',
      position: 'Software Developer Engineer',
      from: 'Nov 2025',
      to: 'Present',
      name: 'FaceBook',
      location: 'Gurugram, Haryane, India',
      isAlternate: true,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      icon: 'https://pngdownload.io/wp-content/uploads/2023/12/YouTube-Logo-PNG-Symbol-for-Video-Platform-Transparent-jpg.webp',
      position: 'Software Developer Engineer',
      from: 'Nov 2025',
      to: 'Present',
      name: 'Youtube',
      location: 'Gurugram, Haryane, India',
      isAlternate: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: 'Youtube',
      position: 'Software Developer Engineer',
      from: 'Nov 2025',
      to: 'Present',
      isAlternate: true,
      location: 'Gurugram, Haryane, India',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ];

  return (
    <section id="experience" className="py-6 px-4 sm:px-6 lg:px-8 bg-black mt-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-center mt-6 text-3xl md:text-4xl text-white mb-6">
            My <span className="font-extrabold">Experience</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ToggleButton/>
        </AnimatedSection>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={0.15 + index * 0.1}>
              <ExperienceCard
                icon={exp.icon}
                position={exp.position}
                from={exp.from}
                to={exp.to}
                name={exp.name}
                location={exp.location}
                isAlternate={exp.isAlternate}
                description={exp.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
