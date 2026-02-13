
import React from 'react';
import { ExportFormat } from '../types';

interface PreviewCardProps {
  qrDataUrl: string;
  onDownload: (format: ExportFormat) => void;
  hasContent: boolean;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ qrDataUrl, onDownload, hasContent }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-center">
      <div className="relative group w-full max-w-[300px] aspect-square flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden mb-8 border border-slate-100">
        {qrDataUrl && hasContent ? (
          <img 
            src={qrDataUrl} 
            alt="QR Preview" 
            className="w-full h-full object-contain p-4 drop-shadow-md transition-transform group-hover:scale-105 duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-300 gap-4">
            <i className="fa-solid fa-qrcode text-8xl opacity-20"></i>
            <p className="text-sm font-medium">Waiting for input...</p>
          </div>
        )}
      </div>

      <div className="w-full space-y-4">
        <h3 className="text-center font-bold text-slate-700 uppercase tracking-widest text-xs">
          Export Options
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => onDownload(ExportFormat.PNG)}
            disabled={!qrDataUrl || !hasContent}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-slate-200 rounded-2xl text-slate-700 font-bold text-sm hover:border-blue-500 hover:text-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <i className="fa-solid fa-image group-hover:bounce"></i>
            PNG
          </button>
          <button
            onClick={() => onDownload(ExportFormat.JPG)}
            disabled={!qrDataUrl || !hasContent}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-slate-200 rounded-2xl text-slate-700 font-bold text-sm hover:border-amber-500 hover:text-amber-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <i className="fa-solid fa-file-image"></i>
            JPG
          </button>
          <button
            onClick={() => onDownload(ExportFormat.PDF)}
            disabled={!qrDataUrl || !hasContent}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-slate-200 rounded-2xl text-slate-700 font-bold text-sm hover:border-red-500 hover:text-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <i className="fa-solid fa-file-pdf"></i>
            PDF
          </button>
        </div>
        
        <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
               <i className="fa-solid fa-shield-halved mr-1"></i> Privacy First: Generation is 100% Client-Side
            </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
