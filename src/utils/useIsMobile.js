import { useEffect, useState } from "react";

const useIsMobileOrTablet = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();

      // Check width for mobile + tablet (<= 1024px)
      const isSmallScreen = width <= 1024;

      // Simple tablet detection via user agent
      // Matches iPad, Android tablets (but NOT Android phones), and generic 'tablet' string
      const isTabletUA = /ipad|android(?!.*mobile)|tablet/.test(userAgent);

      setIsMobileOrTablet(isSmallScreen || isTabletUA);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobileOrTablet;
};

export default useIsMobileOrTablet;
