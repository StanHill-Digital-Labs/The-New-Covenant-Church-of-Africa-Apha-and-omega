import React from 'react';
import { CHURCH_INFO, FOUNDING_YEAR } from '../data/churchData';

interface FooterProps {
  onOpenBranchesModal?: () => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBranchesModal,
  onOpenPrivacyModal,
}) => {
  return (
    <footer className="bg-[#f0eee8] border-t border-[#c3c8c1] mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Church */}
          <div>
            <h3 className="font-headline-md text-[22px] text-[#475749] font-bold mb-4">
              {CHURCH_INFO.fullName}
            </h3>

            <p className="text-sm leading-7 text-[#434843]">
              A Christ-centered ministry committed to preaching the Gospel,
              raising disciples, strengthening families, and serving our
              communities through faith and compassion.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#475749] mb-4">
              Contact Us
            </h4>

            <div className="space-y-3 text-sm text-[#434843]">

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  CHURCH_INFO.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#475749] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  location_on
                </span>
                <span>{CHURCH_INFO.address}</span>
              </a>

              <a
                href={`tel:${CHURCH_INFO.phone}`}
                className="flex items-center gap-2 hover:text-[#475749] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  call
                </span>
                <span>{CHURCH_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${CHURCH_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#475749] transition-colors break-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                <span>{CHURCH_INFO.email}</span>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#475749] mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">

              <button
                onClick={onOpenBranchesModal}
                className="text-left text-sm text-[#434843] hover:text-[#475749] transition-colors cursor-pointer"
              >
                Regional Branches
              </button>

              <button
                onClick={onOpenPrivacyModal}
                className="text-left text-sm text-[#434843] hover:text-[#475749] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>

              <div className="text-sm text-[#434843] pt-2">
                <div className="font-semibold text-[#475749] mb-1">
                  M-Pesa Giving
                </div>

                <div>
                  Paybill: <strong>{CHURCH_INFO.mPesaPaybill}</strong>
                </div>

                <div>
                  Account: <strong>{CHURCH_INFO.mPesaAccount}</strong>
                </div>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-[#475749] mb-4">
              Connect With Us
            </h4>

            <div className="flex flex-wrap gap-3">

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white border border-[#c3c8c1] flex items-center justify-center hover:bg-[#475749] hover:text-white transition-all"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white border border-[#c3c8c1] flex items-center justify-center hover:bg-[#475749] hover:text-white transition-all"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white border border-[#c3c8c1] flex items-center justify-center hover:bg-[#475749] hover:text-white transition-all"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CHURCH_INFO.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white border border-[#c3c8c1] flex items-center justify-center hover:bg-[#475749] hover:text-white transition-all"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

            </div>

            <p className="mt-5 text-sm text-[#434843] leading-6">
              Stay connected for sermons, church events, prayer sessions,
              devotionals and ministry updates.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#c3c8c1] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-[#747872] text-center md:text-left">
            © {FOUNDING_YEAR}–{new Date().getFullYear()} {CHURCH_INFO.fullName}. All rights reserved.
          </p>

          <p className="text-xs text-[#747872] text-center md:text-right">
	  Crafted with{" "}
	  <a
	    href="https://stanhilllabs.com"
	    target="_blank"
	    rel="noopener noreferrer"
	    className="inline-block animate-heartbeat hover:scale-120 transition-transform duration-300"
	    aria-label="StanHill Labs"
	  >
	    ❤️
	  </a>{" "}
	  <a
	    href="https://stanhilllabs.com"
	    target="_blank"
	    rel="noopener noreferrer"
	    className="inline-flex flex-col items-center after:content-[attr(data-text)] after:font-semibold after:invisible after:h-0 after:overflow-hidden hover:font-semibold"
	    data-text="by StanHill Labs."
	    aria-label="StanHill Labs"
	  >by StanHill Labs. </a>
	</p>

        </div>
      </div>
    </footer>
  );
};
