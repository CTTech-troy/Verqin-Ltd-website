import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Wraps a <Routes> tree and animates between route changes.
// It keeps the previous location mounted during a short fade-out, then
// swaps to the new location and performs a fade-in. It also scrolls to
// the top when the new route is displayed.
export default function AnimatedRoutes({ children, exitDuration = 200 }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;

    // start exit animation
    setIsExiting(true);

    // after exit animation time, switch the rendered location
    timerRef.current = setTimeout(() => {
      setDisplayLocation(location);
      // ensure new page starts at top
      try {
        window.scrollTo({ top: 0, behavior: 'auto' });
      } catch (e) {
        // ignore in non-browser environments
      }

      // short delay to allow the DOM to update and then play the fade-in
      setTimeout(() => setIsExiting(false), 20);
    }, exitDuration);

    return () => clearTimeout(timerRef.current);
  }, [location, displayLocation, exitDuration]);

  // The children should be a single <Routes> element; we pass an overridden
  // `location` prop so React Router renders the route tree for `displayLocation`.
  const routes = React.Children.only(children);
  const routesWithLocation = React.cloneElement(routes, { location: displayLocation });

  return (
    <div className={`relative ${isExiting ? 'animate-fade-out' : 'animate-fade-in'}`}>
      {routesWithLocation}
    </div>
  );
}
