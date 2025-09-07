import React from "react";
import useTheme from "../../../../shared/Hooks/useTheme";
import { setTheme } from "../../../../store/global/globalSlice";
import { useDispatch } from "react-redux";

const Toggler = () => {
  const dispatch = useDispatch();
  const isDark = useTheme();
  console.log(isDark);
  const darkModeToggler = () => {
    if (isDark) {
      dispatch(setTheme("light"));
    } else {
      dispatch(setTheme("dark"));
    }
  };
  console.log(isDark);
  return (
    <div>
      <label className="inline-flex items-center relative cursor-pointer">
        <input
          id="toggle"
          type="checkbox"
          className="peer hidden"
          checked={isDark ? true : false}
          onChange={darkModeToggler}
        />
        <div
          className="relative w-[50px] h-[30px] bg-gray-300 peer-checked:bg-zinc-600 rounded-full 
          after:absolute after:content-[''] after:w-[32px] after:h-[32px] after:bg-gradient-to-r 
          from-orange-400 to-yellow-300 peer-checked:after:from-zinc-800 peer-checked:after:to-zinc-900 
          after:rounded-full after:top-[1px] after:left-[2px] peer-checked:after:left-[22px] 
          after:transition-all duration-300 shadow-inner"
        ></div>

        {/* Sun Icon */}
        <svg
          viewBox="0 0 24 24"
          className="fill-yellow-400 absolute w-6 h-6 left-[6px] peer-checked:opacity-0 transition duration-300"
        >
          <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Z" />
        </svg>

        {/* Moon Icon */}
        <svg
          viewBox="0 0 24 24"
          className="fill-white opacity-0 peer-checked:opacity-100 absolute w-4 h-4 right-[6px] transition duration-300"
        >
          <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Z" />
        </svg>
      </label>
    </div>
  );
};

export default Toggler;
