
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-qrcode text-white text-sm"></i>
            </div>
            <span className="font-bold text-slate-900 tracking-tight">QR SPARK PRO</span>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} QR Spark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
