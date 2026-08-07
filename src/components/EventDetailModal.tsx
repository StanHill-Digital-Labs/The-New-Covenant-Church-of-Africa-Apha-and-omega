import React from 'react';

interface EventDetailModalProps {
  selectedEvent: Event | null;
  onClose: () => void;
  onOpenPrayerModal?: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  selectedEvent,
  onClose,
  onOpenPrayerModal,
}) => {
  if (!selectedEvent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[90vh] bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] p-6 sm:p-8 overflow-auto space-y-6">
        <button
          onClick={onClose}
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
          
           <a href={`https://maps.google.com/?q=${encodeURIComponent(selectedEvent.location)}`}
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
                onClose();
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
  );
};
