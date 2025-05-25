import { useEffect, useState } from "react";

const useIsMobileOrTablet = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024); // mobile + tablet
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobileOrTablet;
};

export default useIsMobileOrTablet;
