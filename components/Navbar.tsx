import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => 
    isActive(path) 
      ? "text-text-primary text-base font-bold" 
      : "text-text-secondary hover:text-text-primary text-base font-medium transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-background-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 text-primary group">
              <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">travel_explore</span>
              <h2 className="text-2xl font-bold">رحلاتي</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/hotels" className={linkClass('/hotels')}>الفنادق</Link>
              <Link to="/flights" className={linkClass('/flights')}>الطيران</Link>
              <Link to="/packages" className={linkClass('/packages')}>الحج والعمرة</Link>
              <Link to="/visa" className={linkClass('/visa')}>خدمات التأشيرة</Link>
              <Link to="/activities" className={linkClass('/activities')}>الأنشطة</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex cursor-pointer items-center justify-center rounded-full h-10 gap-2 text-sm font-bold min-w-0 px-3 border border-gray-200 dark:border-gray-700 hover:bg-neutral-light dark:hover:bg-gray-800 transition-colors">
              <span className="hidden sm:inline">ر.س</span>
              <span className="material-symbols-outlined text-xl">currency_exchange</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-full h-10 gap-2 text-sm font-bold min-w-0 px-3 border border-gray-200 dark:border-gray-700 hover:bg-neutral-light dark:hover:bg-gray-800 transition-colors">
              <span className="hidden sm:inline">En</span>
              <span className="material-symbols-outlined text-xl">language</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-full size-10 text-sm font-bold min-w-0 border border-gray-200 dark:border-gray-700 hover:bg-neutral-light dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-xl">help_outline</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-full size-10 text-sm font-bold min-w-0 bg-primary text-white hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-xl">person_outline</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu (Simplified for this demo) */}
      <div className="md:hidden flex justify-around border-t border-gray-200 bg-white py-2 overflow-x-auto">
        <Link to="/hotels" className="flex flex-col items-center px-4 text-xs text-text-secondary">
          <span className="material-symbols-outlined">hotel</span>
          <span>الفنادق</span>
        </Link>
        <Link to="/flights" className="flex flex-col items-center px-4 text-xs text-text-secondary">
          <span className="material-symbols-outlined">flight</span>
          <span>الطيران</span>
        </Link>
        <Link to="/packages" className="flex flex-col items-center px-4 text-xs text-text-secondary">
          <span className="material-symbols-outlined">mosque</span>
          <span>عمرة</span>
        </Link>
         <Link to="/visa" className="flex flex-col items-center px-4 text-xs text-text-secondary">
          <span className="material-symbols-outlined">description</span>
          <span>تأشيرة</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;