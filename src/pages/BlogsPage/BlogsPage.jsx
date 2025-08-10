import React, { useMemo, useState } from 'react';
import './BlogsPage.css';
import { blogs as allBlogs } from '../../data/blogs';
import BlogCard from '../../components/BlogCard/BlogCard';

const BlogsPage = () => {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  // Build tag list
  const tags = useMemo(() => {
    const set = new Set();
    allBlogs.forEach(b => (b.tags || []).forEach(t => set.add(t)));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const visibleBlogs = useMemo(() => {
    let list = allBlogs;
    if (activeTag !== 'All') {
      list = list.filter(b => (b.tags || []).includes(activeTag));
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(b =>
        b.title.toLowerCase().includes(q) ||
        (b.description || '').toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case 'Oldest':
        list = [...list].sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'Shortest Read':
        list = [...list].sort((a, b) => (a.readTime || 0) - (b.readTime || 0));
        break;
      case 'Longest Read':
        list = [...list].sort((a, b) => (b.readTime || 0) - (a.readTime || 0));
        break;
      case 'Newest':
      default:
        list = [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }
    return list;
  }, [activeTag, query, sortBy]);

  return (
    <div className="blogsPageContainer">
      <header className="blogsHeader">
        <h1 className="blogsTitle">All Blogs</h1>
        <p className="blogsSubtitle">Search, filter by tags, and sort your posts.</p>
      </header>

      {/* Controls */}
      <div className="blogsControls">
        <div className="blogsSearchWrap">
          <input
            type="text"
            placeholder="Search blogs..."
            className="blogsSearchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="blogsSortWrap">
          <label className="sortLabel">Sort:</label>
          <select className="sortSelect" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Newest</option>
            <option>Oldest</option>
            <option>Shortest Read</option>
            <option>Longest Read</option>
          </select>
        </div>
      </div>

      {/* Tags */}
      <div className="blogsTags">
        {tags.map(tag => (
          <button
            key={tag}
            className={`tagChip ${activeTag === tag ? 'active' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="blogsGrid">
        {visibleBlogs.map((b, idx) => (
          <BlogCard key={`${b.title}-${idx}`} image={b.image} title={b.title} description={`${b.description} (${b.readTime} min read)`} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
