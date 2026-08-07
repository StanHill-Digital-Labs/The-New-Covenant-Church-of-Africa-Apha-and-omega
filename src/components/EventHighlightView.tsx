// components/EventHighlightView.tsx
import React, { useEffect } from 'react';

interface EventHighlightViewProps {
  selectedEvent: ChurchEvent | null;
  onClose: () => void;
  onOpenPrayerModal?: () => void;
}

export const EventHighlightView: React.FC<EventHighlightViewProps> = ({
  selectedEvent,
  onClose,
  onOpenPrayerModal,
}) => {
  // Prevent background scroll while this full-screen view is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedEvent]);

  if (!selectedEvent) return null;

  const hasPhotos = selectedEvent.photos && selectedEvent.photos.length > 0;

  return (
    <div className="fixed inset-0 z-50 bg-[#fcf9f3] overflow-y-auto animate-fadeIn">
      {/* Sticky back bar */}
      <div className="sticky top-0 z-10 bg-[#fcf9f3]/95 backdrop-blur-sm border-b border-[#c3c8c1] px-6 py-4">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#475749] font-label-sm text-sm font-bold hover:text-[#546251] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span>Back to Events</span>
          </button>
          <span className="bg-[#747872] text-white text-xs font-bold px-3 py-1 rounded-full">
            Past Event
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-10 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <span className="bg-[#d7e7d1] text-[#121f11] text-xs font-bold px-3 py-1 rounded-full inline-block">
            {selectedEvent.category}
          </span>
          <h1 className="font-headline-lg text-[32px] sm:text-[40px] text-[#475749] font-bold leading-tight">
            {selectedEvent.title}
          </h1>
        </div>

        {/* Details bar */}
        <div className="bg-[#f0eee8] p-5 rounded-xl border border-[#c3c8c1] flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#1c1c18] font-body-md">
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

        {/* Description */}
        <p className="font-body-lg text-base text-[#434843] leading-relaxed max-w-[720px]">
          {selectedEvent.description}
        </p>

        {/* Photo highlights */}
        <div className="space-y-4">
          <h2 className="font-headline-md text-[22px] text-[#475749] font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#546251]">photo_library</span>
            Event Highlights
          </h2>

          {hasPhotos ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {selectedEvent.photos!.map((photo, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-xl overflow-hidden border border-[#c3c8c1] bg-[#e5e2dc] group cursor-pointer"
                >
                  <img
                    src={photo}
                    alt={`${selectedEvent.title} photo ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#f0eee8] border border-dashed border-[#c3c8c1] rounded-xl p-10 text-center">
              <span className="material-symbols-outlined text-4xl text-[#a8ada5] mb-3 block">
                image
              </span>
              <p className="text-sm text-[#747872] font-body-md">
                Photos from this event haven't been added yet.
              </p>
            </div>
          )}
        </div>

        {/* Footer action */}
        {onOpenPrayerModal && (
          <div className="pt-6 border-t border-[#c3c8c1]/40">
            <button
              onClick={() => {
                onClose();
                onOpenPrayerModal();
              }}
              className="text-[#546251] font-label-sm text-sm font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Inquire / Contact Office</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
