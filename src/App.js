import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Card from './components/Card/Card';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Section/>
    </div>
  );
}

export default App;
