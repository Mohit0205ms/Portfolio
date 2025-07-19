import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Section from './components/Section/Section';
import SkillSection from './components/SkillSection/SkillSection';
import BlogSection from './components/BlogSection/BlogSection';
import ProductSection from './components/ProductSection/ProductSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <SkillSection/>
      <BlogSection/>
      <ProductSection/>
      <Section title={'PROJECTS'}/>
    </div>
  );
}

export default App;
