import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RoutesConfig } from "./config/routes.Config";
import Theme from "./layout/Theme";
function App() {
  const router = createBrowserRouter(RoutesConfig);
  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
