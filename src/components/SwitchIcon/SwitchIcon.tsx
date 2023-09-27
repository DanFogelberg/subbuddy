import { useState } from 'react';

const SwitchIcon = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [switchPlacement, setSwitchPlacement] = useState('justify-start');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
    setSwitchPlacement(isDarkMode ? 'justify-end' : 'justify-start');
  };

  return (
    <div
      className={`transition-all flex ${switchPlacement} items-center border-2 border-font_primary_black w-[30px] h-[17px] rounded-[13px] p-[1px] dark:border-font_primary_white`}
      onClick={toggleDarkMode}
    >
      <div className="bg-font_primary_black w-[11px] h-[11px] rounded-[50%] dark:bg-font_primary_white"></div>
    </div>
  );
};

export default SwitchIcon;
