import homeIconWhite from '../../assets/icons/home-icon-white.svg';
import bellIconWhite from '../../assets/icons/bell-icon-white.svg';
import profileIconWhite from '../../assets/icons/profile-icon-white.svg';
import { useState } from 'react';

interface MenuProps {
  setView: Function;
}

const Menu = (props: MenuProps) => {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleMenuItemClick = (menu: string) => {
    props.setView(menu);
    setActiveMenuItem(menu);
  };

  return (
    <div className="w-full fixed bottom-5 left-0 right-0">
      <nav className="bg-black flex flex-row justify-between rounded-[64px] px-10 py-1 shadow-[rgba(0,_0,_0,_0.50)_0px_0px_8px_0px] text-font_primary_white text-[10px] dark:bg-button_primary_orange ml-6 mr-6">
        <div
          className={`flex flex-col items-center gap-1 px-3.5 py-2 ${activeMenuItem === 'home' ? 'underline font-bold dark:decoration-widget_primary_black' : ''}`}
          onClick={() => handleMenuItemClick('home')}
        >
          <img
            className="h-6 w-6 dark:invert"
            src={homeIconWhite}
            alt="Home icon."
          />
          <p className="dark:text-font_primary_black">Hem</p>
        </div>
        <div
          className={`flex flex-col items-center gap-1 px-3.5 py-2 ${activeMenuItem === 'subscriptions' ? 'underline font-bold dark:decoration-widget_primary_black' : ''}`}
          onClick={() => handleMenuItemClick('subscriptions')}
        >
          <img
            className="h-6 w-6 dark:invert"
            src={bellIconWhite}
            alt="Bell icon."
          />
          <p className="dark:text-font_primary_black">Subs</p>
        </div>
        <div
          className={`flex flex-col items-center gap-1 px-3.5 py-2 ${activeMenuItem === 'profile' ? 'underline font-bold dark:decoration-widget_primary_black' : ''}`}
          onClick={() => handleMenuItemClick('profile')}
        >
          <img
            className="h-6 w-6 dark:invert"
            src={profileIconWhite}
            alt="Profile icon."
          />
          <p className="dark:text-font_primary_black">Profil</p>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
