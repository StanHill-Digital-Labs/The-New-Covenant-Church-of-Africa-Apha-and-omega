import React, { useState } from 'react';
import { Sermon } from '../types';

interface SermonPlayerModalProps {
  sermon: Sermon | null;
  onClose: () => void;
}

export const SermonPlayerModalYoutube: React.FC<SermonPlayerModalProps> = ({ sermon, onClose }) => {
 const [activeTab, setActiveTab] = useState<'player' | 'notes'>('player');

  if (!sermon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f0eee8] border-b border-[#c3c8c1]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#475749]">
              {sermon.type === 'video' ? 'videocam' : 'graphic_eq'}
            </span>
            <span className="font-label-sm text-xs text-[#546251] uppercase tracking-wider font-bold">
              {sermon.type === 'video' ? 'Video Teaching' : 'Audio Sermon'} • {sermon.duration}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#747872] hover:text-[#1c1c18] p-1.5 rounded-full hover:bg-[#e5e2dc] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-[#c3c8c1] bg-[#f6f3ed]">
          <button
            onClick={() => setActiveTab('player')}
            className={`flex-1 py-3 text-center text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'player'
                ? 'bg-[#fcf9f3] text-[#475749] border-b-2 border-[#475749]'
                : 'text-[#434843] hover:text-[#475749]'
            }`}
          >
            Media Player
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex-1 py-3 text-center text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'notes'
                ? 'bg-[#fcf9f3] text-[#475749] border-b-2 border-[#475749]'
                : 'text-[#434843] hover:text-[#475749]'
            }`}
          >
            Sermon Key Points
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'player' ? (
            <div>
              {/* Media Container */}
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-inner group mb-6">
                
				<div className="aspect-video overflow-hidden rounded-xl shadow-lg">
		  <iframe
		    className="w-full h-full"
		    src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
		    title={sermon.title}
		    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		    allowFullScreen
		  />
		</div>
             </div>

              {/* Title & Metadata */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#546251]">
                  <span className="flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {sermon.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[16px]">person</span>
                    {sermon.speaker}
                  </span>
                </div>

                <h2 className="font-headline-lg text-[24px] text-[#1c1c18] leading-snug">
                  {sermon.title}
                </h2>

                <p className="font-body-md text-sm text-[#434843] leading-relaxed">
                  {sermon.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-headline-md text-xl text-[#475749]">Summary & Prophetic Takeaways</h3>
              <p className="text-sm text-[#434843]">
                Key scripture references and teachings from <strong>{sermon.speaker}</strong> delivered at {sermon.date}:
              </p>

              <div className="space-y-3 pt-2">
                {sermon.summaryPoints?.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#f0eee8] rounded-lg border border-[#c3c8c1]/60">
                    <span className="w-6 h-6 rounded-full bg-[#475749] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-[#1c1c18] font-body-md leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-[#f0eee8] border-t border-[#c3c8c1] flex items-center justify-between text-xs text-[#434843]">
          <span>The New Covenant Church of Africa</span>
          <button
            onClick={() => setActiveTab(activeTab === 'player' ? 'notes' : 'player')}
            className="text-[#475749] font-bold hover:underline cursor-pointer"
          >
            {activeTab === 'player' ? 'View Notes' : 'Return to Media'}
          </button>
        </div>
      </div>
    </div>
  );
};
