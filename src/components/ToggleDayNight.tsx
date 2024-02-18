'use client';

import { FC, useState } from 'react';
import { Light_Icon } from './svgs';
import { Dark_Icon } from './svgs';

interface ToggleDayNightProps {}

const ToggleDayNight: FC<ToggleDayNightProps> = ({}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="max-md:hidden flex items-center justify-center w-6 h-6 relative overflow-hidden"
      aria-label="toggle dark mode"
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
          isDarkMode
            ? 'translate-y-full opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        <Light_Icon />
      </div>
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
          isDarkMode
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <Dark_Icon />
      </div>
    </button>
  );
};

export default ToggleDayNight;
