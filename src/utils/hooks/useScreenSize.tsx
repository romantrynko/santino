'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

const ScreenSizeContext = createContext({
  isPortrait: false,
  isMobile: false,
  isMobileInPortrait: false,
  width: 0,
  height: 0,
});

interface ScreenSizeProviderProps {
  children: React.ReactNode;
}

export const ScreenSizeProvider = ({ children }: ScreenSizeProviderProps) => {
  const [screenSize, setScreenSize] = useState({
    isPortrait: false,
    isMobile: false,
    isMobileInPortrait: false,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getResult();
    const isMobile = result.device.type === 'mobile';

    const handleResize = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches;
      const isMobileInPortrait = isMobile && isPortrait;

      setScreenSize({
        isPortrait,
        isMobile,
        isMobileInPortrait,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <ScreenSizeContext.Provider value={screenSize}>{children}</ScreenSizeContext.Provider>;
};

export const useScreenSize = () => useContext(ScreenSizeContext);
