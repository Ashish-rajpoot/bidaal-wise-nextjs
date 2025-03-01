"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";

const NavContext = createContext(null);

export function NavProvider({ children }) {
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  // Function to update nav height dynamically
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    // Listen for window resize to update height dynamically
    const handleResize = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavContext.Provider value={{ navHeight, navRef, setNavHeight }}>
      {children}
    </NavContext.Provider>
  );
}

// Custom hook for easy access
export function useNavHeight() {
  return useContext(NavContext);
}
