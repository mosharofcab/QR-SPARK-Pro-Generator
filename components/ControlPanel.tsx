
import React from 'react';
import { QRSettings } from '../types';

interface ControlPanelProps {
  settings: QRSettings;
  setSettings: React.Dispatch<React.SetStateAction<QRSettings>>;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ settings, setSettings }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
      <div className="space-y-8">
        {/* Content Input */}
        <section>
          <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
            QR Content
          </label>
          <textarea
            name="content"
            value={settings.content}
            onChange={handleChange}
            placeholder="Type text, paste URLs, or enter symbols..."
            className="w-full min-h-[120px] p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none text-slate-800 font-medium"
          />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colors */}
          <section>
            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
              Colors
            </label>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase">Foreground</p>
                <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl">
                  <input
                    type="color"
                    name="fgColor"
                    value={settings.fgColor}
                    onChange={handleChange}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent"
                  />
                  <input 
                    type="text" 
                    value={settings.fgColor} 
                    readOnly 
                    className="bg-transparent text-xs font-mono w-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase">Background</p>
                <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl">
                  <input
                    type="color"
                    name="bgColor"
                    value={settings.bgColor}
                    onChange={handleChange}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent"
                  />
                  <input 
                    type="text" 
                    value={settings.bgColor} 
                    readOnly 
                    className="bg-transparent text-xs font-mono w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Error Correction */}
          <section>
            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
              Error Correction
            </label>
            <select
              name="errorCorrectionLevel"
              value={settings.errorCorrectionLevel}
              onChange={handleChange}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none appearance-none"
            >
              <option value="L">Low (7%)</option>
              <option value="M">Medium (15%)</option>
              <option value="Q">Quartile (25%)</option>
              <option value="H">High (30%)</option>
            </select>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Size */}
          <section>
            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
              QR Size ({settings.size}px)
            </label>
            <input
              type="range"
              name="size"
              min="100"
              max="1000"
              step="10"
              value={settings.size}
              onChange={handleChange}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </section>

          {/* Margin */}
          <section>
            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
              Margin ({settings.margin})
            </label>
            <input
              type="range"
              name="margin"
              min="0"
              max="10"
              step="1"
              value={settings.margin}
              onChange={handleChange}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
