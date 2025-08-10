import React from 'react';
import SkillsExplorer from '../../components/SkillsExplorer/SkillsExplorer';
import { projects } from '../../data/projects';
import ProductCard from '../../components/ProductCard/ProductCard';
import './SkillsPage.css';

const SkillsPage = () => {
  // Trending skills by frequency
  const counts = projects.reduce((acc, p) => {
    (p.skills || []).forEach(s => acc.set(s, (acc.get(s) || 0) + 1));
    return acc;
  }, new Map());
  const trending = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, count }));

  // Recently added: just take last 4 items for demo purposes
  const recent = projects.slice(-4);

  return (
    <div className="skillsPageContainer">
      <header className="skillsPageHeader">
        <h1 className="skillsPageTitle">Explore Skills & Projects</h1>
        <p className="skillsPageSubtitle">Pick a skill to discover matching projects. Scroll both sides independently.</p>
      </header>

      {/* Extra section: Trending Skills */}
      <section className="trendingSkillsSection">
        <h2 className="sectionHeading">Trending Skills</h2>
        <div className="trendingChips">
          {trending.map(t => (
            <span key={t.name} className="trendingChip">{t.name} · {t.count}</span>
          ))}
        </div>
      </section>

      {/* Main Explorer */}
      <SkillsExplorer />

      {/* Extra section: Recently Added Projects */}
      <section className="recentProjectsSection">
        <h2 className="sectionHeading">Recently Added Projects</h2>
        <div className="recentProjectsGrid">
          {recent.map((p, idx) => (
            <ProductCard
              key={`${p.name}-${idx}`}
              image={p.image}
              name={p.name}
              description={p.description}
              skills={p.skills}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
