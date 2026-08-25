// components/ImpactStorySection.tsx
import React from 'react';
import { IMPACT_STORIES } from '../data/churchData';

export const ImpactStorySection: React.FC = () => {
  if (IMPACT_STORIES.length === 0) return null;

  const story = IMPACT_STORIES[0]; // currently featuring one story

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="font-headline-lg text-[32px] text-[#121f11] mb-2">
          Faith in Action
        </h2>
        <p className="font-body-md text-[15px] text-[#3d4a3a] max-w-[560px] mx-auto leading-relaxed">
          True worship shows up in how we care for one another. Here's one story of that love at work.
        </p>
      </div>

      <div className="bg-[#f0eee8] rounded-3xl overflow-hidden border border-[#c3c8c1] flex flex-col md:flex-row shadow-sm">
        {/* Image */}
        <div className="md:w-1/2 min-h-[280px] md:min-h-[420px] bg-[#e5e2dc]">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center space-y-5 bg-[#fcf9f3]">
          <div>
            <span className="inline-block bg-[#d7e7d1] text-[#121f11] font-label-sm text-xs font-bold px-3 py-1 rounded-full mb-4">
              Community Outreach
            </span>
            <h3 className="font-headline-md text-[24px] text-[#475749] font-bold leading-snug mb-2">
              {story.title}
            </h3>
            <p className="font-body-md text-[15px] text-[#546251] italic mb-4">
              {story.punchline}
            </p>
          </div>

          <p className="font-body-md text-sm text-[#1c1c18] leading-relaxed">
            {story.story}
          </p>

          {story.quote && (
            <blockquote className="border-l-4 border-[#546251] bg-[#e8e2d3]/50 pl-4 py-3 rounded-r-lg">
              <p className="italic text-sm text-[#565348] leading-relaxed">
                "{story.quote}"
              </p>
              {story.quotePerson && (
                <p className="text-xs font-bold text-[#475749] mt-2">
                  — {story.quotePerson}
                </p>
              )}
            </blockquote>
          )}
        </div>
      </div>
    </section>
  );
};
