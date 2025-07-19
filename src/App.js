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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <SkillSection/>
      <BlogSection/>
      <Experience/>
      <ProductSection/>
      <Section title={'PROJECTS'}/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
