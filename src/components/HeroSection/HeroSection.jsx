import './HeroSection.css';
import { images } from "../../assets";
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
      {/* Profile Picture section */}
      <div className='profilePictureSection'>
        {/* profile picture */}
        <div className='profilePicContainer'>
          <img src={images.empty_state_profile_pic} className='profilePic' />
        </div>
        <div className='profileTitleContainer'>
          <span id='profileTitle'>Mohit Singh</span>
        </div>
      </div>
      {/* Title */}
      <div className='titleContainer'>
        <AnimatedTitle/>
      </div>
      {/* subtile */}
      <div className='buttonsContainer'>
        <button className='buttons' id='resume'>Resume</button>
        <button className='buttons' id='demoVideo'>Demo Video</button>
      </div>
      {/* auto scrolling animation */}
      <div>
        <Marquee speed={50} gradient={false} style={{marginTop: 30}}>
          <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="React" style={{width: 50, height: 50, marginLeft: 10}} />
          <img src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" alt="AWS" style={{width: 50, height: 50,marginLeft: 10}} />
          <img src="https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png" alt="TypeScript" style={{width: 50, height: 50, marginLeft: 10}} />
          <img src="https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg.webp" alt="TypeScript" style={{width: 50, height: 50, marginLeft: 10}} />
          <img src="https://icon2.cleanpng.com/20180810/ekz/11448a7a96ee808a3cdbaf0df9570976.webp" alt="TypeScript" style={{width: 50, height: 50, marginLeft: 10}} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="TypeScript" style={{width: 50, height: 50, marginLeft: 10}} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEsLuY93v9Am4yIBkmfduJjMzSp5LaflH0w&s" alt="TypeScript" style={{width: 50, height: 50, marginLeft: 10}} />
        </Marquee>
      </div>
    </div>
  );
}
