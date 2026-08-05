import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CHURCH_INFO } from '../data/churchData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (!isOpen) return null;

  const sermonsUrl = `${window.location.origin}/sermons`;

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  e.stopPropagation();

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(sermonsUrl);
    } else {
      // Fallback for browsers without Clipboard API
      const textarea = document.createElement("textarea");
      textarea.value = sermonsUrl;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (!success) {
        throw new Error("Copying failed.");
      }
    }

    setCopied(true);

    // clear any existing timer before setting a new one, so rapid clicks
    // don't cause the label to flip back early
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error(err);
    alert("Sorry, your browser doesn't support copying automatically.");
  }
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

        <h3 className="font-headline-lg text-[22px] text-[#475749]">Help us Share The Word</h3>
        <p className="font-body-md text-xs text-[#434843] mt-1 mb-4">
          A simple scan could lead someone home.
        </p>

        {/* Generated SVG QR Code representation */}
        <div className="bg-white p-4 rounded-xl border border-[#c3c8c1] inline-block mb-4 shadow-sm">
  <QRCodeSVG
    value={sermonsUrl}
    size={160}
    bgColor="#ffffff"
    fgColor="#475749"
    level="M"
    className="mx-auto"
  />
  <span className="text-[10px] font-bold text-[#546251] block mt-1 tracking-wider uppercase">
    Scan to Visit Our Website
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
            <span className="material-symbols-outlined text-[16px] transition-transform duration-300">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span className="transition-opacity duration-300">{copied ? 'Link Copied!' : 'Copy Web Link'}</span>
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
