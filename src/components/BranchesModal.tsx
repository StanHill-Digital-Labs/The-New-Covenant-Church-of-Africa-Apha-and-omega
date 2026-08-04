import React from 'react';
import { BRANCHES, CHURCH_INFO } from '../data/churchData';

interface BranchesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BranchesModal: React.FC<BranchesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#747872] hover:text-[#1c1c18] p-2 rounded-full hover:bg-[#e5e2dc] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#d7e7d1] text-[#475749] mb-2">
            <span className="material-symbols-outlined text-2xl">church</span>
          </div>
          <h3 className="font-headline-lg text-[24px] text-[#475749]">Regional Branches & Assemblies</h3>
          <p className="font-body-md text-xs text-[#434843] mt-1">
            Connect with our vibrant congregations across Western Kenya and Nairobi.
          </p>
        </div>

        <div className="space-y-4">
          {BRANCHES.map((branch, idx) => (
            <div
              key={idx}
              className="bg-[#f0eee8] p-4 rounded-xl border border-[#c3c8c1] space-y-1 hover:border-[#546251] transition-colors"
            >
              <h4 className="font-headline-md text-lg text-[#1c1c18]">{branch.name}</h4>
              <p className="text-xs text-[#434843] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#546251]">location_on</span>
                {branch.location}
              </p>
              <p className="text-xs text-[#434843] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#546251]">person</span>
                Leader: <strong className="text-[#1c1c18]">{branch.leader}</strong>
              </p>
              <p className="text-xs text-[#434843] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#546251]">call</span>
                {branch.phone}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-[#475749] text-white px-6 py-2 rounded-full font-label-sm text-xs cursor-pointer"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
};
