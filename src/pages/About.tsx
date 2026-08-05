import React, { useState } from 'react';
import { IMAGES, LEADERS, CHURCH_INFO } from '../data/churchData';
import { Leader } from '../types';

interface AboutProps {
  onOpenPrayerModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenPrayerModal }) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <main className="flex-grow pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-6">
            <h1 className="font-headline-xl text-[40px] md:text-[52px] text-[#475749] leading-tight font-bold">
              Our Prophetic Roots
            </h1>
            <p className="font-body-lg text-[18px] text-[#434843] leading-relaxed">
              Rooted in spiritual revelation and guided by a divine mandate, our foundation is built upon unwavering faith. We are called to be a sanctuary of hope, nurturing a community where the ancient truths of scripture meet the everyday realities of life in Africa.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenPrayerModal}
                className="bg-[#546251] text-white px-6 py-3 rounded-full font-label-sm text-sm hover:bg-[#475749] transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Connect with Pastoral Leadership</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-6 rounded-2xl overflow-hidden border border-[#c3c8c1] bg-[#f0eee8] h-[380px] md:h-[420px] shadow-md">
            <img
              src={IMAGES.baobabHero}
              alt="Majestic Baobab Tree at Sunrise"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#f6f3ed] py-20 border-y border-[#c3c8c1]/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-headline-lg text-[32px] md:text-[40px] text-[#475749] font-semibold">
              Guided by Spirit
            </h2>
            <p className="font-body-md text-[16px] text-[#434843] max-w-2xl mx-auto">
              Meet the dedicated leaders shepherding our congregation with wisdom and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERS.map((leader) => (
              <div
                key={leader.id}
                onClick={() => setSelectedLeader(leader)}
                className="bg-[#f0eee8] border border-[#c3c8c1] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer group"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#fcf9f3] shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-headline-md text-[22px] text-[#1c1c18] mb-2 leading-snug group-hover:text-[#475749] transition-colors">
                  {leader.name}
                </h3>
                <p className="font-label-sm text-[12px] text-[#546251] uppercase tracking-wider font-bold">
                  {leader.role}
                </p>
                <span className="mt-4 text-xs text-[#475749] font-bold group-hover:underline flex items-center gap-1">
                  Read Bio &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Church History Overview */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="bg-[#e8e2d3] rounded-3xl p-8 sm:p-12 border border-[#ccc6b8] space-y-6 text-center max-w-4xl mx-auto">
          <h3 className="font-headline-lg text-[30px] text-[#475749]">
            A Sanctuary of Truth in Mumias & Across Africa
          </h3>
          <p className="font-body-md text-[16px] text-[#434843] leading-relaxed">
            Since our founding, {CHURCH_INFO.fullName} has grown from a humble gathering into a thriving sanctuary of spiritual renewal. We remain dedicated to spreading salvation, nurturing children and youth, supporting those in hardship, and witnessing God's glory through prophecy.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-bold text-[#121f11]">
            <span className="bg-[#d7e7d1] px-4 py-2 rounded-full border border-[#546251]/30">
              ✓ Prophetic Teaching
            </span>
            <span className="bg-[#d7e7d1] px-4 py-2 rounded-full border border-[#546251]/30">
              ✓ Community Relief & Aid
            </span>
            <span className="bg-[#d7e7d1] px-4 py-2 rounded-full border border-[#546251]/30">
              ✓ Youth & Family Guidance
            </span>
          </div>
        </div>
      </section>

      {/* Leader Bio Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
    <div className="relative w-full max-w-lg max-h-[90vh] bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] overflow-y-auto">
      <div className="p-5 sm:p-8">
        <button
          onClick={() => setSelectedLeader(null)}
          className="absolute top-4 right-4 text-[#747872] hover:text-[#1c1c18] p-2 rounded-full hover:bg-[#e5e2dc] transition-colors cursor-pointer z-10"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="text-center mb-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#d7e7d1] shadow-md">
            <img
              src={selectedLeader.image}
              alt={selectedLeader.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-headline-lg text-[20px] sm:text-[24px] text-[#475749]">{selectedLeader.name}</h3>
          <p className="font-label-sm text-xs text-[#546251] uppercase tracking-wider font-bold">
            {selectedLeader.role}
          </p>
        </div>
        <p className="font-body-md text-sm text-[#1c1c18] leading-relaxed mb-4 bg-[#f0eee8] p-4 rounded-xl border border-[#c3c8c1]">
          {selectedLeader.bio}
        </p>
        {selectedLeader.scriptureQuote && (
          <blockquote className="italic text-xs text-[#565348] border-l-4 border-[#546251] pl-3 py-1 mb-6">
            {selectedLeader.scriptureQuote}
          </blockquote>
        )}
        <div className="text-center">
          <button
            onClick={() => setSelectedLeader(null)}
            className="bg-[#475749] text-white px-6 py-2 rounded-full font-label-sm text-xs cursor-pointer"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </main>
  );
};
