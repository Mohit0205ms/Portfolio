import './HeroSection.css';
import { icons, images } from "../../assets";
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee";

export default function HeroSection() {

  const titleStyle = {
    fontSize: '1.3em',
    fontWeight: '500',
  };
  const AnimatedTitle = () => {
    return (
      <TypeAnimation
        sequence={[
          "Basically, I'm a learner...",
          1000,
          "No no, I'm a good learner.",
          1000,
          "Wait... I'm a front-end developer!",
          1000,
          "No no, actually... I'm a back-end developer too.",
          1000,
          "Umm... maybe I'm full stack?",
          1000,
          "No no... I am a Software Engineer!",
        ]}
        speed={50}
        style={titleStyle}
      />
    )
  }
  return(
    <div className='heroSectionContainer'>
      <div className='profilePictureSection'>
        <div className='profilePicContainer'>
          <img src={images.empty_state_profile_pic} className='profilePic' />
        </div>
        <div className='profileTitleContainer'>
          <span id='profileTitle'>Mohit Singh</span>
        </div>
      </div>
      <div className='titleContainer'>
        <AnimatedTitle/>
      </div>
      <div className='buttonsContainer'>
        <button className='buttons' id='resume'>Resume</button>
        <button className='buttons' id='demoVideo'>Demo Video</button>
      </div>
      <div className='skillsSection'>
        <Marquee speed={50} gradient={false}>
          <div className='skillContainer'>
            <img src={icons.react_logo} className='skillIcon'/>
            <span>React.js</span>
          </div>
          <div className='skillContainer'>
            <img src={icons.react_logo} className='skillIcon'/>
            <span>React.js</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
