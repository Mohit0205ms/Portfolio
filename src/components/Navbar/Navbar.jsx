import React from 'react';
import './Navbar.css';
import { icons, images } from '../../assets';

export default function Navbar() {
  return (
    <div className='container'>
      {/* logo */}
      <div className='logo-container'>
        <img src={images.logo} className='logo'/>
      </div>
      {/* menus */}
      <div className={'menu-container'}>
        <div className='menu' id='home'>
          <img src={icons.home_icon} className={'icon'} />
          <div className='tooltip'>
            <span>Home</span>
          </div>
        </div>
        <div className='menu' id='projects'>
          <img src={icons.projects_icon} className={'icon'} />
          <div className='tooltip'>
            <span>Projects</span>
          </div>
        </div>
        <div className='menu' id='github'>
          <img src={icons.github_icon} className={'icon'} />
          <div className='tooltip'>
            <span>Github</span>
          </div>
        </div>
        <div className='menu' id='skills'>
          <img src={icons.skills_icon} className={'icon'} />
          <div className='tooltip'>
            <span>Skills</span>
          </div>
        </div>
        <div className='menu' id='experiences'>
          <img src={icons.experience_icon} className={'icon'} />
          <div className='tooltip'>
            <span>Experience</span>
          </div>
        </div>
        <div className='menu' id='contactUs'>
          <img src={icons.contact_us_icon} className={'icon'} />
          <div className='tooltip'>
            <span>Contact Us</span>
          </div>
        </div>
        <div className='menu' id='aboutMe'>
          <img src={icons.about} className={'icon'} />
          <div className='tooltip'>
            <span>About Me</span>
          </div>
        </div>
      </div>
      {/* menu button */}
      <div id='menu-icon'>
        <img src={icons.menu_icon} className='icon' />
      </div>
    </div>
  );
}
