import React, { useMemo, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { projects } from '../../data/projects';
import './SkillsExplorer.css';

const SkillsExplorer = () => {
  const allSkills = useMemo(() => {
    const set = new Set();
    projects.forEach(p => (p.skills || []).forEach(s => set.add(s)));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const [query, setQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('All');

  const filteredSkills = useMemo(() => {
    if (!query.trim()) return allSkills;
    return allSkills.filter(s => s.toLowerCase().includes(query.toLowerCase()));
  }, [allSkills, query]);

  const filteredProjects = useMemo(() => {
    if (selectedSkill === 'All') return projects;
    return projects.filter(p => (p.skills || []).includes(selectedSkill));
  }, [selectedSkill]);

  return (
    <section className="skillsExplorerContainer">
      <h1 className="skillsExplorerTitle">SKILLS EXPLORER</h1>
      <div className="skillsExplorerSplitPane">
        {/* Left: Skills List */}
        <aside className="skillsListPane">
          <div className="skillsSearchBar">
            <input
              type="text"
              placeholder="Search skills..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="skillsSearchInput"
            />
          </div>
          <div className="skillsList" role="listbox" aria-label="Skills">
            {filteredSkills.map((skill) => (
              <button
                key={skill}
                className={`skillItem ${selectedSkill === skill ? 'active' : ''}`}
                onClick={() => setSelectedSkill(skill)}
              >
                <span className="skillName">{skill}</span>
                {skill !== 'All' && (
                  <span className="skillBadge">
                    {projects.filter(p => (p.skills || []).includes(skill)).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Right: Projects Grid */}
        <main className="projectsPane">
          <div className="projectsPaneHeader">
            <span className="projectsPaneTitle">
              {selectedSkill === 'All' ? 'All Projects' : `${selectedSkill} Projects`}
            </span>
            {selectedSkill !== 'All' && (
              <button className="clearFilterBtn" onClick={() => setSelectedSkill('All')}>Clear Filter</button>
            )}
          </div>
          <div className="projectsGrid">
            {filteredProjects.length === 0 ? (
              <div className="emptyState">
                <span>No projects found for "{selectedSkill}"</span>
              </div>
            ) : (
              filteredProjects.map((project, idx) => (
                <ProductCard
                  key={`${project.name}-${idx}`}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  skills={project.skills}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </section>
  );
};

export default SkillsExplorer;
