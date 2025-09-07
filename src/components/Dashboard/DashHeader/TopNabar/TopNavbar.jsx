import { useDispatch } from "react-redux";
import { sidebarToggled } from "../../../../store/global/globalSlice";
import { Icons } from "../../../../shared/constant/icon.constant";
import Toggler from "./Toggler";
import UserDropdown from "./UserDropDown";

const TopNavbar = ({ openSidebar }) => {
  const dispatch = useDispatch();
  return (
    <header className="dark:bg-black py-4 w-full z-[9999] flex items-center justify-between px-4">
      <h1 className="text-lg font-bold theme-text">Dashboard</h1>
      <div className=" flex items-center gap-2">
        <UserDropdown />
        <Icons.notification className=" text-2xl cursor-pointer hover:scale-110 transition-transform duration-700 hover:font-bold mx-4 theme-text" />
        <Toggler />
      </div>
      <button
        className="md:hidden px-3 py-1 rounded"
        onClick={() => dispatch(sidebarToggled(!openSidebar))}
      >
        <Icons.menu className=" text-2xl cursor-pointer hover:scale-110 transition-transform duration-700 hover:font-bold theme-text" />
      </button>
    </header>
  );
};

export default TopNavbar;
