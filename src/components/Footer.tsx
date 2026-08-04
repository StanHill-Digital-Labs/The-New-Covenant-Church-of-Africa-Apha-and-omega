import React from 'react';
import { Link } from 'react-router-dom';
import { CHURCH_INFO } from '../data/churchData';

interface FooterProps {
  onOpenBranchesModal?: () => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBranchesModal,
  onOpenPrivacyModal
}) => {
  return (
    <footer className="bg-[#f0eee8] border-t border-[#c3c8c1] w-full py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand & Copyright */}
        <div className="space-y-4">
          <p className="font-headline-md text-[20px] text-[#546251] font-bold leading-tight">
            {CHURCH_INFO.fullName}
          </p>
          <p className="font-body-md text-[14px] text-[#434843]">
            © {CHURCH_INFO.copyrightYear} {CHURCH_INFO.fullName}. All rights reserved.
          </p>
        </div>

        {/* Location & Links */}
        <div className="flex flex-col gap-3">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(CHURCH_INFO.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-sm text-[14px] text-[#434843] hover:text-[#546251] transition-colors leading-relaxed"
          >
            {CHURCH_INFO.address}
          </a>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-3 md:items-end">
          <button
            onClick={onOpenBranchesModal}
            className="font-label-sm text-[14px] text-[#434843] hover:text-[#546251] transition-colors cursor-pointer text-left md:text-right"
          >
            Regional Branches
          </button>
          <button
            onClick={onOpenPrivacyModal}
            className="font-label-sm text-[14px] text-[#434843] hover:text-[#546251] transition-colors cursor-pointer text-left md:text-right"
          >
            Privacy Policy
          </button>
          <span className="text-xs text-[#747872] pt-2">
            M-Pesa Paybill: <strong className="text-[#475749]">{CHURCH_INFO.mPesaPaybill}</strong> | Acc: <strong className="text-[#475749]">{CHURCH_INFO.mPesaAccount}</strong>
          </span>
        </div>
      </div>
    </footer>
  );
};
