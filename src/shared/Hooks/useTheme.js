import { useSelector } from "react-redux";

const useTheme = () => {
  const { theme } = useSelector((state) => state.global);
  console.log(theme);
  if (theme === "dark") {
    return true;
  } else {
    return false;
  }
};

export default useTheme;
