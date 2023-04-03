import {
  MOBILE,
  TABLET,
  DESKTOP,
  IPAD_PRO,
  IPHONE6,
  IPHONE6PLUS,
} from "../constants/index";
import { useEffect, useState } from "react";

export const useViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width >= 576 && width < 767) {
    return MOBILE;
  } else if (width >= 767 && width < 960) {
    return TABLET;
  } else if (width >= 960 && width < 1200) {
    return IPAD_PRO;
  } else if (width >= 1200) {
    return DESKTOP;
  } else if (width < 414) {
    return IPHONE6;
  } else if (width >= 414 && width < 576) return IPHONE6PLUS;
};
