import { useState, useEffect } from "react";

export const useScrollTrigger = (triggerHeight = 300) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerHeight]);

  return scrolled;
};
