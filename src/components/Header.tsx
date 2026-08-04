import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CHURCH_INFO } from '../data/churchData';

interface HeaderProps {
  onOpenSupportModal: () => void;
  onOpenShareModal: () => void;
  onOpenPrayerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSupportModal,
  onOpenShareModal,
  onOpenPrayerModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fcf9f3]/95 backdrop-blur-md shadow-sm border-b border-[#c3c8c1]/50'
          : 'bg-[#fcf9f3]/90 backdrop-blur-md border-b border-[#c3c8c1]/30'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-20">
        {/* Brand */}
        <Link
          to="/"
          className="font-headline-md text-[18px] md:text-[22px] text-[#475749] font-bold truncate max-w-[240px] sm:max-w-[360px] md:max-w-[480px] leading-snug hover:opacity-90 transition-opacity"
          title={CHURCH_INFO.fullName}
        >
          {CHURCH_INFO.fullName}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`font-label-sm text-[14px] transition-colors py-1 ${
              isActive('/')
                ? 'text-[#475749] font-bold border-b-2 border-[#475749]'
                : 'text-[#434843] hover:text-[#475749]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-label-sm text-[14px] transition-colors py-1 ${
              isActive('/about')
                ? 'text-[#475749] font-bold border-b-2 border-[#475749]'
                : 'text-[#434843] hover:text-[#475749]'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/sermons"
            className={`font-label-sm text-[14px] transition-colors py-1 ${
              isActive('/sermons')
                ? 'text-[#475749] font-bold border-b-2 border-[#475749]'
                : 'text-[#434843] hover:text-[#475749]'
            }`}
          >
            Sermons/Teachings
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-[#c3c8c1] pr-4">
            <button
              onClick={onOpenShareModal}
              title="QR Code & Church Info"
              className="text-[#434843] hover:text-[#475749] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-[#e5e2dc]/60 cursor-pointer"
            >
              <span className="material-symbols-outlined">qr_code_2</span>
            </button>
            <Link
              to="/sermons"
              title="Video Library & Sermons"
              className="text-[#434843] hover:text-[#475749] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-[#e5e2dc]/60 cursor-pointer"
            >
              <span className="material-symbols-outlined">video_library</span>
            </Link>
            <button
              onClick={onOpenPrayerModal}
              title="Prayer Requests & Inquiries"
              className="text-[#434843] hover:text-[#475749] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-[#e5e2dc]/60 cursor-pointer"
            >
              <span className="material-symbols-outlined">chat</span>
            </button>
          </div>

          <button
            onClick={onOpenSupportModal}
            className="bg-[#475749] text-white px-6 py-2.5 rounded-full font-label-sm text-[14px] hover:bg-[#5f6f60] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            Support Our Mission
          </button>
        </div>

        {/* Mobile Menu Button & Quick Support */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenSupportModal}
            className="bg-[#475749] text-white px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap"
          >
            Support
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#475749] p-2 rounded-md hover:bg-[#e5e2dc]/50 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f3] border-b border-[#c3c8c1] px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4 font-label-sm">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg text-[16px] transition-colors ${
                isActive('/')
                  ? 'bg-[#d7e7d1] text-[#121f11] font-bold'
                  : 'text-[#434843] hover:bg-[#f0eee8]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg text-[16px] transition-colors ${
                isActive('/about')
                  ? 'bg-[#d7e7d1] text-[#121f11] font-bold'
                  : 'text-[#434843] hover:bg-[#f0eee8]'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/sermons"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg text-[16px] transition-colors ${
                isActive('/sermons')
                  ? 'bg-[#d7e7d1] text-[#121f11] font-bold'
                  : 'text-[#434843] hover:bg-[#f0eee8]'
              }`}
            >
              Sermons/Teachings
            </Link>

            <div className="pt-4 border-t border-[#c3c8c1]/50 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSupportModal();
                }}
                className="w-full bg-[#475749] text-white py-3 rounded-full font-label-sm text-center shadow-sm cursor-pointer"
              >
                Support Our Mission
              </button>
              
              <div className="flex justify-around pt-2 text-[#434843]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShareModal();
                  }}
                  className="flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-[#e5e2dc] text-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                  <span>QR / Share</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPrayerModal();
                  }}
                  className="flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-[#e5e2dc] text-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Prayer Request</span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
