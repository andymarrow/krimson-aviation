"use client";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative p-2.5 rounded-full transition-all duration-300 ease-out 
      bg-gray-100 hover:bg-gray-200 text-krimson
      dark:bg-white/10 dark:hover:bg-white/20 dark:text-amber-400
      backdrop-blur-sm ring-1 ring-transparent dark:ring-white/10"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <HiSun className="w-5 h-5" />
      ) : (
        <HiMoon className="w-5 h-5" />
      )}
    </button>
  );
}