import React, { useState } from 'react';
import { CHURCH_INFO } from '../data/churchData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.origin;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md max-h-[90vh] md:max-h-[95vh]  bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] p-6 text-center overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#747872] hover:text-[#1c1c18] p-2 rounded-full hover:bg-[#e5e2dc] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="w-12 h-12 rounded-full bg-[#d7e7d1] text-[#475749] flex items-center justify-center mx-auto mb-3">
          <span className="material-symbols-outlined text-2xl">qr_code_2</span>
        </div>

        <h3 className="font-headline-lg text-[22px] text-[#475749]">Church Directory & QR</h3>
        <p className="font-body-md text-xs text-[#434843] mt-1 mb-4">
          Scan or share to connect with {CHURCH_INFO.fullName}
        </p>

        {/* Generated SVG QR Code representation */}
        <div className="bg-white p-4 rounded-xl border border-[#c3c8c1] inline-block mb-4 shadow-sm">
          <svg className="w-40 h-40 mx-auto" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#ffffff" />
            {/* Position markers */}
            <rect x="10" y="10" width="25" height="25" fill="#475749" />
            <rect x="15" y="15" width="15" height="15" fill="#ffffff" />
            <rect x="18" y="18" width="9" height="9" fill="#475749" />

            <rect x="65" y="10" width="25" height="25" fill="#475749" />
            <rect x="70" y="15" width="15" height="15" fill="#ffffff" />
            <rect x="73" y="18" width="9" height="9" fill="#475749" />

            <rect x="10" y="65" width="25" height="25" fill="#475749" />
            <rect x="15" y="70" width="15" height="15" fill="#ffffff" />
            <rect x="18" y="73" width="9" height="9" fill="#475749" />

            {/* Random data squares representation */}
            <rect x="42" y="12" width="6" height="6" fill="#475749" />
            <rect x="50" y="18" width="6" height="6" fill="#475749" />
            <rect x="42" y="28" width="6" height="6" fill="#475749" />
            <rect x="12" y="42" width="6" height="6" fill="#475749" />
            <rect x="24" y="48" width="6" height="6" fill="#475749" />
            <rect x="42" y="42" width="16" height="16" fill="#475749" />
            <rect x="65" y="42" width="8" height="8" fill="#475749" />
            <rect x="78" y="48" width="8" height="8" fill="#475749" />
            <rect x="42" y="65" width="8" height="8" fill="#475749" />
            <rect x="54" y="78" width="8" height="8" fill="#475749" />
            <rect x="68" y="68" width="14" height="14" fill="#475749" />
          </svg>
          <span className="text-[10px] font-bold text-[#546251] block mt-1 tracking-wider uppercase">
            Official Church Directory
          </span>
        </div>

        <div className="text-xs text-[#434843] space-y-1 mb-4 text-left bg-[#f0eee8] p-3 rounded-lg border border-[#c3c8c1]">
          <p><strong>Address:</strong> {CHURCH_INFO.address}</p>
          <p><strong>Office Phone:</strong> {CHURCH_INFO.phone}</p>
          <p><strong>Email:</strong> {CHURCH_INFO.email}</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 bg-[#475749] text-white py-2.5 rounded-full font-label-sm text-xs hover:bg-[#5f6f60] transition-colors cursor-pointer flex items-center justify-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Link Copied!' : 'Copy Web Link'}</span>
          </button>
          
          <a
            href={`tel:${CHURCH_INFO.phone}`}
            className="bg-[#d7e7d1] text-[#121f11] px-4 py-2.5 rounded-full font-label-sm text-xs hover:bg-[#bccbb5] transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>Call Office</span>
          </a>
        </div>
      </div>
    </div>
  );
};
