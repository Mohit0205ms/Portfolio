import React, { useState } from 'react';
import './Navbar.css';
import { icons, images } from '../../assets';
import { navbarMenuList as data } from './data/data';
import { iconMapperHelper } from '../../helper/utils'

export default function Navbar() {
  const [menuButtonClicked, setMenuButtonClick] = useState(false);

  let menuButtonId = menuButtonClicked ? 'menu-icon-animation' : 'menu-icon';
  let menuContainerClass = menuButtonClicked ? 'menu-container-with-animation' : 'menu-container';

  const handleMenuButtonClick = () => {
    setMenuButtonClick(!menuButtonClicked);
  }

  return (
    <div className='container'>

      <div className='logo-container'>
        <img src={icons.logo} className='logo' />
      </div>

      <div className={menuContainerClass}>
        {data.map((menu, index) => (
          <div key={index} className='menu' id={menu.Id}>
            <img src={iconMapperHelper(menu.Id)} className={'icon'} />
            <div className='tooltip'>
              <span>{menu.toolTipText}</span>
            </div>
          </div>
        ))}
      </div>

      <div id={menuButtonId} onClick={handleMenuButtonClick}>
        <img src={icons.menu_icon} className='icon' />
      </div>
    </div>
  );
}
