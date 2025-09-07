import { useEffect } from "react";
import useTheme from "../../shared/Hooks/useTheme";

const Theme = ({ children }) => {
  const isDark = useTheme();
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDark]);

  return <>{children}</>;
};

export default Theme;
