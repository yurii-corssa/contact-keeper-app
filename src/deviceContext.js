import { useMediaQuery } from '@chakra-ui/react';
import { createContext, useContext, useEffect, useState } from 'react';

const DeviceContext = createContext();

export const useDevice = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
  const [isMobile, isTablet, isDesktop] = useMediaQuery([
    '(max-width: 767px)',
    '(min-width: 768px) and (max-width: 1023px)',
    '(min-width: 1024px)',
  ]);
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    if (isMobile) setDeviceType('mobile');
    if (isTablet) setDeviceType('tablet');
    if (isDesktop) setDeviceType('desktop');
  }, [isDesktop, isMobile, isTablet]);

  return (
    <DeviceContext.Provider value={{ deviceType }}>
      {children}
    </DeviceContext.Provider>
  );
};
