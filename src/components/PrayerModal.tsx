import React, { useState } from 'react';
import { CHURCH_INFO } from '../data/churchData';

interface PrayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrayerModal: React.FC<PrayerModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState('Prayer Request');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] p-6 sm:p-8 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#747872] hover:text-[#1c1c18] p-2 rounded-full hover:bg-[#e5e2dc] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#d5e4ce] text-[#546251] mb-2">
                <span className="material-symbols-outlined text-2xl">chat</span>
              </div>
              <h3 className="font-headline-lg text-[24px] text-[#475749]">Prayer Requests & Inquiries</h3>
              <p className="font-body-md text-xs text-[#434843] mt-1">
                Our church elders and pastoral team led by Prophet Raphael Zedekiah pray over every request.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1c1c18] mb-1">Type of Request</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#546251] focus:outline-none"
                >
                  <option value="Prayer Request">Prayer Request / Intercession</option>
                  <option value="Healing & Restoration">Healing & Restoration</option>
                  <option value="Prophetic Guidance">Prophetic Guidance / Counseling</option>
                  <option value="General Inquiry">General Church Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1c1c18] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#546251] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1c1c18] mb-1">Phone Number or Email</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +254 712 345 678 or email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#546251] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1c1c18] mb-1">Your Message or Prayer Request</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share your prayer need or message in confidence..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#546251] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#546251] text-white py-3 rounded-full font-label-sm text-sm hover:bg-[#475749] transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Submit Prayer Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#d7e7d1] text-[#121f11] rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-4xl">mark_email_read</span>
            </div>
            <h3 className="font-headline-lg text-[24px] text-[#475749]">Request Received in Faith!</h3>
            <p className="font-body-md text-sm text-[#434843]">
              Thank you <strong className="text-[#1c1c18]">{name}</strong>. Your prayer request has been submitted to the pastoral team at {CHURCH_INFO.shortName}.
            </p>
            <p className="text-xs italic text-[#565348] bg-[#f6f3ed] p-3 rounded-lg border border-[#c3c8c1]">
              "For where two or three gather in my name, there am I with them." — Matthew 18:20
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#475749] text-white px-8 py-2 rounded-full font-label-sm text-sm cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
