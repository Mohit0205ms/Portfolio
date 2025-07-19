import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Section from './components/Section/Section';
import SkillSection from './components/SkillSection/SkillSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <SkillSection/>
      <Section title={'PROJECTS'}/>
    </div>
  );
}

export default App;
