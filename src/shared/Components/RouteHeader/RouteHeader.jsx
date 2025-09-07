import { useLocation, Link, matchRoutes } from "react-router-dom";
import { RoutesConfig } from "../../../config/routes.Config";
import { FaHome } from "react-icons/fa";

export default function RouteHeader() {
  const location = useLocation();
  const matches = matchRoutes(RoutesConfig, location);

  if (!matches) return null;

  // dashboard কে বাদ দিচ্ছি
  const filteredMatches = matches.filter((m) => m.route.path !== "/dashboard");

  return (
    <nav className="text-sm theme-text mb-4 bg-white dark:bg-gray-600 shadow-md px-4 rounded-md py-3">
      <ol className="flex items-center gap-2">
        {filteredMatches.map((match, index) => {
          const { pathname } = match;
          const route = match.route;
          const isLast = index === filteredMatches.length - 1;

          const label =
            route.breadcrumb || route.path?.replace(/_/g, " ") || "Unnamed";

          return (
            <li key={pathname} className="flex items-center gap-2">
              {!isLast ? (
                <Link to={pathname} className="hover:underline text-lg">
                  {label}
                </Link>
              ) : (
                <div className=" flex justify-center items-center gap-2">
                  <FaHome className=" sm:text-2xl" /> <span>-</span>
                  <span className="font-semibold text-lg">{label}</span>
                </div>
              )}
              {!isLast && (
                <div className=" h-[24px] w-[2px] border-[1px]"></div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
