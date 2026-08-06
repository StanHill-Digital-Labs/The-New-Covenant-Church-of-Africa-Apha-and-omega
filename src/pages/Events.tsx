import React, { useState } from 'react';
import { EVENTS, CHURCH_INFO, IMAGES } from '../data/churchData';
import { ChurchEvent } from '../types';

interface EventsProps {
  onOpenPrayerModal?: () => void;
}

export const Events: React.FC<EventsProps> = ({ onOpenPrayerModal }) => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Past'>('Upcoming');
  const [selectedEvent, setSelectedEvent] = useState<ChurchEvent | null>(null);

  const filteredEvents = EVENTS.filter((evt) => {
    if (filter === 'Upcoming') return !evt.isPast;
    if (filter === 'Past') return evt.isPast;
    return true;
  });

  return (
    <main className="flex-grow pt-28 pb-20">
      {/* 1. Hero Header */}
      <section className="relative bg-[#f0eee8] border-b border-[#c3c8c1]/60 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={IMAGES.communityMumias}
            alt="Gathering"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center space-y-4">
          <span className="font-label-sm text-xs text-[#546251] uppercase tracking-wider font-bold bg-[#d7e7d1] px-3.5 py-1 rounded-full border border-[#546251]/20">
            Gatherings &amp; Fellowship
          </span>
          <h1 className="font-headline-xl text-[38px] sm:text-[48px] text-[#475749] font-bold">
            Church Events &amp; Gatherings
          </h1>
          <p className="font-body-lg text-[16px] sm:text-[18px] text-[#434843] max-w-2xl mx-auto leading-relaxed">
            Stay connected with our upcoming worship services, prayer nights, youth fellowships, and community outreach programs in Mumias and beyond.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs & Content Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Filter Tab Bar */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#f0eee8] p-1.5 rounded-full border border-[#c3c8c1] flex items-center gap-1 shadow-xs">
            {(['Upcoming', 'Past', 'All'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-full font-label-sm text-sm transition-all duration-200 cursor-pointer ${
                  filter === tab
                    ? 'bg-[#475749] text-white shadow-xs font-bold'
                    : 'text-[#434843] hover:text-[#1c1c18] hover:bg-[#e5e2dc]/60'
                }`}
              >
                {tab === 'All' ? 'All Events' : `${tab} Events`}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-[#fcf9f3] rounded-2xl border border-[#c3c8c1] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative h-48 bg-[#f0eee8] overflow-hidden">
                    <img
                      src={evt.image || IMAGES.sermonPulpit}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-[#475749] text-white font-label-sm text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        {evt.category}
                      </span>
                      {evt.isPast ? (
                        <span className="bg-[#747872] text-white font-label-sm text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                          Past
                        </span>
                      ) : (
                        <span className="bg-[#d7e7d1] text-[#121f11] font-label-sm text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#546251]/20">
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5 text-xs font-label-sm font-bold text-[#546251]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#434843]">
                        <span className="material-symbols-outlined text-[18px] text-[#546251]">schedule</span>
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#434843] truncate">
                        <span className="material-symbols-outlined text-[18px] text-[#546251] shrink-0">location_on</span>
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>

                    <h3 className="font-headline-md text-[20px] text-[#1c1c18] font-bold leading-snug group-hover:text-[#475749] transition-colors">
                      {evt.title}
                    </h3>

                    <p className="font-body-md text-sm text-[#434843] line-clamp-3 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-[#c3c8c1]/30 pt-4 mt-2">
                  <button
                    onClick={() => setSelectedEvent(evt)}
                    className="bg-[#546251] text-white px-4 py-2 rounded-full font-label-sm text-xs hover:bg-[#475749] transition-colors cursor-pointer"
                  >
                    Event Details
                  </button>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(evt.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#475749] hover:text-[#121f11] font-label-sm text-xs font-bold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Directions</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-[#f0eee8] rounded-2xl p-12 text-center max-w-md mx-auto border border-[#c3c8c1] space-y-4">
            <span className="material-symbols-outlined text-5xl text-[#747872]">event_busy</span>
            <h3 className="font-headline-md text-xl text-[#475749]">No {filter} Events Found</h3>
            <p className="font-body-md text-sm text-[#434843]">
              There are currently no events matching this category. Please check back soon or switch filters.
            </p>
            <button
              onClick={() => setFilter('All')}
              className="bg-[#475749] text-white px-6 py-2 rounded-full font-label-sm text-xs cursor-pointer"
            >
              View All Events
            </button>
          </div>
        )}
      </section>

      {/* 4. Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] p-6 sm:p-8 overflow-hidden space-y-6">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-[#747872] hover:text-[#1c1c18] p-2 rounded-full hover:bg-[#e5e2dc] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#d7e7d1] text-[#121f11] text-xs font-bold px-3 py-0.5 rounded-full">
                  {selectedEvent.category}
                </span>
                {selectedEvent.isPast && (
                  <span className="bg-[#747872] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                    Past Event
                  </span>
                )}
              </div>
              <h3 className="font-headline-lg text-[24px] text-[#475749] font-bold leading-snug">
                {selectedEvent.title}
              </h3>
            </div>

            <div className="bg-[#f0eee8] p-4 rounded-xl border border-[#c3c8c1] space-y-2 text-sm text-[#1c1c18] font-body-md">
              <div className="flex items-center gap-2 font-bold text-[#475749]">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>{selectedEvent.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#546251]">schedule</span>
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#546251]">location_on</span>
                <span>{selectedEvent.location}</span>
              </div>
            </div>

            <p className="font-body-md text-sm text-[#434843] leading-relaxed">
              {selectedEvent.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#c3c8c1]/40">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(selectedEvent.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#475749] text-white px-5 py-2.5 rounded-full font-label-sm text-xs hover:bg-[#5f6f60] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">map</span>
                <span>Open Map Directions</span>
              </a>

              {onOpenPrayerModal && (
                <button
                  onClick={() => {
                    setSelectedEvent(null);
                    onOpenPrayerModal();
                  }}
                  className="text-[#546251] font-label-sm text-xs font-bold hover:underline cursor-pointer"
                >
                  Inquire / Contact Office
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
