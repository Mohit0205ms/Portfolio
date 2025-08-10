import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Section from './components/Section/Section';
import SkillSection from './components/SkillSection/SkillSection';
import BlogSection from './components/BlogSection/BlogSection';
import ProductSection from './components/ProductSection/ProductSection';
import Experience from './components/Experience/Experience';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer/Footer';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import BlogsPage from './pages/BlogsPage/BlogsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const Home = () => (
    <>
      <HeroSection/>
      <SkillSection/>
      <BlogSection/>
      <Experience/>
      <ProductSection title={'PROJECTS'}/>
      <ProductSection title={'PRODUCTS'}/>
      <ContactMe/>
    </>
  );

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
