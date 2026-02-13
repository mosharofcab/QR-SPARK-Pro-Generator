
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <i className="fa-solid fa-qrcode text-white text-xl"></i>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">QR SPARK</h1>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Pro Generator</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">History</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95">
            Log In
          </button>
        </nav>

        <button className="md:hidden text-slate-600 p-2">
          <i className="fa-solid fa-bars-staggered text-xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
