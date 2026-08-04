import React from 'react';
import { CHURCH_INFO } from '../data/churchData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#747872] hover:text-[#1c1c18] p-2 rounded-full hover:bg-[#e5e2dc] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h3 className="font-headline-lg text-[22px] text-[#475749]">Privacy Policy & Data Security</h3>
        
        <p className="font-body-md text-xs text-[#434843]">
          {CHURCH_INFO.fullName} ("we", "our", or "the Church") is committed to honoring your privacy and safeguarding your personal information.
        </p>

        <div className="space-y-3 text-xs text-[#1c1c18] font-body-md leading-relaxed">
          <div>
            <h4 className="font-bold text-[#475749]">1. Information We Collect</h4>
            <p className="text-[#434843]">
              We only collect personal information that you voluntarily provide to us when submitting prayer requests, making donations, or contacting our office (such as name, phone number, and email address).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#475749]">2. How We Use Your Information</h4>
            <p className="text-[#434843]">
              Your contact details are used exclusively for pastoral prayer support, donation acknowledgment, and church updates. We never sell or share your personal details with third parties.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#475749]">3. Financial Security</h4>
            <p className="text-[#434843]">
              All tithes and offerings processed via M-Pesa or payment gateways adhere to strict encrypted banking standards.
            </p>
          </div>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="bg-[#475749] text-white px-6 py-2 rounded-full font-label-sm text-xs cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
