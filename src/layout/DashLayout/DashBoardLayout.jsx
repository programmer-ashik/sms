import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import TopNavbar from "../../components/Dashboard/DashHeader/TopNabar/TopNavbar";
import Sidebar from "../../components/Dashboard/DashHeader/Sidebar/Sidebar";
import DemoSidebar from "../../components/Dashboard/DashHeader/Sidebar/DemoSidebar";
export default function DashBoardLayout() {
  const openSidebar = useSelector((state) => state.global.sidebarExpanded);
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] w-full">
      {/* Top Navbar */}
      <div className="row-span-1">
        <TopNavbar openSidebar={openSidebar} />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-[310px_auto] overflow-hidden">
        {/* Sidebar */}
        <div className=" md:block dark:bg-gray-700">
          {/* <Sidebar openSidebar={openSidebar} /> */}
          <DemoSidebar openSidebar={openSidebar} />
        </div>
        {/* Main Outlet */}
        <div className="h-[calc(100vh-64px)]">
          <main className=" h-full p-2 overflow-scroll grow theme-bg theme-text">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
