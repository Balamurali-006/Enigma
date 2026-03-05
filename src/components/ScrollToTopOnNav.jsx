import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnNav() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Handle Navigation (clicking links)
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // 2. Handle Page Reloads (F5)
    // This tells the browser NOT to remember the scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
}