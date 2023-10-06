"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


    useEffect(() => {
      console.log("ThemeSwitcher mounted")
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
    className={`p-2 rounded-md hover:scale-110 active:scale-100 duration-200 
    bg-gradient-to-r from-violet-400 to-indigo-300 text-white dark:bg-violet-300 text-sm md:text-base flex items-center 
    justify-center space-x-2`}
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  >
    {theme === "light" ? "Dark" : "Light"}
  </button>
  
  );
};