import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ React Router import
import { useParallaxController } from "react-scroll-parallax";

function useUpdateControllerOnRouteChange() {
  const location = useLocation();
  const parallaxController = useParallaxController();

  useEffect(() => {
    parallaxController.update();
  }, [location.pathname, parallaxController]);
}

export const ParallaxRouteUpdate = () => {
  useUpdateControllerOnRouteChange();
  return null;
};
