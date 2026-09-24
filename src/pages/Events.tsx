import React, { useState } from 'react';
import { EventDetailModal } from '../components/EventDetailModal';
import { EventHighlightView } from '../components/EventHighlightView';
import { EVENTS, CHURCH_INFO, IMAGES } from '../data/churchData';
import { ChurchEvent } from '../types';

interface EventsProps {
  onOpenPrayerModal?: () => void;
}

export const Events: React.FC<EventsProps> = ({ onOpenPrayerModal }) => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Past'>('All');
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
                {tab === 'All' ? 'All' : `${tab}`}
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
                    {!evt.isPast==true ? 'Event Details' : 'See highlights'}
                  </button>
		{!evt.isPast==true &&
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(evt.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#475749] hover:text-[#121f11] font-label-sm text-xs font-bold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Directions</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a> }
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
              There are currently no new events. Please check back soon.
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
      {selectedEvent && !selectedEvent.isPast && (
	  <EventDetailModal
	    selectedEvent={selectedEvent}
	    onClose={() => setSelectedEvent(null)}
	    onOpenPrayerModal={onOpenPrayerModal}
	  />
	)}

	{selectedEvent && selectedEvent.isPast && (
	  <EventHighlightView
	    selectedEvent={selectedEvent}
	    onClose={() => setSelectedEvent(null)}
	    onOpenPrayerModal={onOpenPrayerModal}
	  />
	)}
      
      {/* 5. Stay Connected Section */}
      <section className="bg-[#f0eee8] py-20 border-t border-[#c3c8c1]/60 mt-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14 space-y-3 max-w-2xl mx-auto">
            <span className="font-label-sm text-xs text-[#546251] uppercase tracking-wider font-bold bg-[#d7e7d1] px-3.5 py-1 rounded-full border border-[#546251]/20">
              Community &amp; Media
            </span>
            <h2 className="font-headline-lg text-[32px] md:text-[40px] text-[#475749] font-bold">
              Stay Connected
            </h2>
            <p className="font-body-md text-[16px] text-[#434843]">
              Don't miss what's happening next. Follow our community channels for live event updates, inspirational messages, and fellowship announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* 1. WhatsApp Card - Visually Primary / Accent Card */}
            <div className="bg-[#d7e7d1] rounded-2xl p-7 border-2 border-[#546251]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-3 right-3 bg-[#121f11] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Most Active
              </div>

              <div className="space-y-4 pt-2">
                <div className="w-12 h-12 rounded-xl bg-[#121f11] text-white flex items-center justify-center shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>

                <div>
                  <h3 className="font-headline-md text-[20px] text-[#121f11] font-bold leading-snug">
                    Join Our WhatsApp Group
                  </h3>
                  <p className="font-body-md text-xs text-[#3d4a3a] mt-1.5 leading-relaxed">
                    Get instant event reminders, daily scripture, and prayer updates directly on your phone.
                  </p>
                </div>
              </div>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('WhatsApp community link coming soon! Contact church office in Mumias for immediate access.'); }}
                className="bg-[#121f11] text-white px-5 py-2.5 rounded-full font-label-sm text-xs hover:bg-[#233522] transition-colors inline-flex items-center justify-between w-full font-bold shadow-xs cursor-pointer"
              >
                <span>Connect on WhatsApp</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* 2. Facebook Card */}
            <div className="bg-[#fcf9f3] rounded-2xl p-7 border border-[#c3c8c1] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#475749] text-white flex items-center justify-center shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>

                <div>
                  <h3 className="font-headline-md text-[18px] text-[#1c1c18] font-bold leading-snug">
                    Follow Us on Facebook
                  </h3>
                  <p className="font-body-md text-xs text-[#434843] mt-1.5 leading-relaxed">
                    See photos, live updates, and official church announcements from Mumias.
                  </p>
                </div>
              </div>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Facebook page link coming soon!'); }}
                className="bg-[#f0eee8] text-[#475749] border border-[#c3c8c1] px-4 py-2.5 rounded-full font-label-sm text-xs hover:bg-[#475749] hover:text-white transition-colors inline-flex items-center justify-between w-full font-bold cursor-pointer"
              >
                <span>Visit Facebook Page</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>

            {/* 3. Instagram Card */}
            <div className="bg-[#fcf9f3] rounded-2xl p-7 border border-[#c3c8c1] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#475749] text-white flex items-center justify-center shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>

                <div>
                  <h3 className="font-headline-md text-[18px] text-[#1c1c18] font-bold leading-snug">
                    Follow on Instagram
                  </h3>
                  <p className="font-body-md text-xs text-[#434843] mt-1.5 leading-relaxed">
                    Inspiring scripture graphics, youth fellowship moments &amp; stories.
                  </p>
                </div>
              </div>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Instagram account link coming soon!'); }}
                className="bg-[#f0eee8] text-[#475749] border border-[#c3c8c1] px-4 py-2.5 rounded-full font-label-sm text-xs hover:bg-[#475749] hover:text-white transition-colors inline-flex items-center justify-between w-full font-bold cursor-pointer"
              >
                <span>Follow Instagram</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>

            {/* 4. YouTube Card */}
            <div className="bg-[#fcf9f3] rounded-2xl p-7 border border-[#c3c8c1] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#475749] text-white flex items-center justify-center shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>

                <div>
                  <h3 className="font-headline-md text-[18px] text-[#1c1c18] font-bold leading-snug">
                    Watch on YouTube
                  </h3>
                  <p className="font-body-md text-xs text-[#434843] mt-1.5 leading-relaxed">
                    Catch our latest sermons, worship streams, and prophetic teachings.
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="bg-[#f0eee8] text-[#475749] border border-[#c3c8c1] px-4 py-2.5 rounded-full font-label-sm text-xs hover:bg-[#475749] hover:text-white transition-colors inline-flex items-center justify-between w-full font-bold cursor-pointer"
              >
                <span>Catch Latest Sermons</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
};
