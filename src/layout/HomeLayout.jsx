import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Navbar/Header/Header";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/login", "/registration"];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);
  return (
    <div className="min-h-100vh lg:w-full mx-auto w-full flex flex-col font-primary grow theme-bg theme-text">
      <div className="px-8 w-full overflow-hidden">
        {!hideHeaderFooter && <Header />}
      </div>
      <main className="min-h-screen w-full grow theme-bg theme-text">
        <Outlet />
      </main>
      <div className="px-8 overflow-hidden">
        {!hideHeaderFooter && <Footer />}
      </div>
    </div>
  );
};

export default HomeLayout;
