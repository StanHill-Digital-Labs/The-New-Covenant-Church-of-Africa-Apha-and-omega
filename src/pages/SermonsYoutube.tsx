import React, { useState } from 'react';
import { SERMONS, LESSONS } from '../data/churchData';
import { Sermon, Lesson } from '../types';

interface SermonsProps {
  onSelectSermon: (sermon: Sermon) => void;
  onSelectLesson: (lesson: Lesson) => void;
}

export const SermonsYoutube: React.FC<SermonsProps> = ({ onSelectSermon, onSelectLesson }) => {
  const [displayedLessonsCount, setDisplayedLessonsCount] = useState(3);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const featuredSermon = SERMONS.find((s) => s.featured) || SERMONS[0];
  const sideSermons = SERMONS.filter((s) => s.id !== featuredSermon.id);

  const categories = ['All', 'Prophetic Insight', 'Bible Study', 'Community Focus'];

console.log("hi there")
console.log(featuredSermon.youtubeId);
console.log(sideSermons.map(s => s.youtubeId));
console.log('youtubeId:', featuredSermon?.youtubeId)

  const filteredLessons = LESSONS.filter(
    (lesson) => activeCategory === 'All' || lesson.category === activeCategory
  );

  const visibleLessons = filteredLessons.slice(0, displayedLessonsCount);

  return (
    <main className="flex-grow pt-[100px] md:pt-[120px] pb-20">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 text-center mb-16">
        <h1 className="font-headline-xl text-[40px] md:text-[52px] text-[#475749] mb-6 font-bold">
          Sermons &amp; Teachings
        </h1>
        <p className="font-body-lg text-[18px] text-[#434843] max-w-2xl mx-auto leading-relaxed">
          Spiritual nourishment for the soul. Explore our archive of prophetic insights, weekly teachings, and deep Bible studies designed to guide you on your journey.
        </p>
      </section>

      {/* Latest Teachings Section (Media Cards) */}
      <section className="max-w-[1200px] mx-auto px-6 mb-20">
        <div className="flex items-end justify-between mb-8 border-b border-[#c3c8c1]/50 pb-4">
          <h2 className="font-headline-lg text-[28px] md:text-[34px] text-[#475749] font-semibold">
            Latest Teachings
          </h2>
          <button
            onClick={() => onSelectSermon(featuredSermon)}
            className="font-label-sm text-sm text-[#546251] hover:text-[#475749] flex items-center gap-1 transition-colors cursor-pointer font-bold"
          >
            Watch Featured Sermon <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* Bento/Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured Sermon (Large 8-col) */}
          <article
            onClick={() => onSelectSermon(featuredSermon)}
            className="md:col-span-8 group relative bg-[#f0eee8] rounded-xl border border-[#c3c8c1] overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative w-full aspect-[16/9] bg-[#e5e2dc] overflow-hidden">
              <img
                src={`https://i3.ytimg.com/vi/${featuredSermon.youtubeId}/hqdefault.jpg`}
                alt={featuredSermon.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#546251]/20 group-hover:bg-[#475749]/40 transition-colors duration-300 flex items-center justify-center backdrop-blur-xs opacity-90 group-hover:opacity-100">
                <div className="w-16 h-16 rounded-full bg-[#fcf9f3]/90 flex items-center justify-center text-[#475749] shadow-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined icon-fill text-3xl ml-1">play_arrow</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-3 font-label-sm text-xs text-[#546251]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {featuredSermon.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">person</span>
                    {featuredSermon.speaker}
                  </span>
                </div>

                <h3 className="font-headline-lg text-[24px] md:text-[28px] text-[#1c1c18] mb-3 group-hover:text-[#475749] transition-colors leading-snug">
                  {featuredSermon.title}
                </h3>

                <p className="font-body-md text-sm text-[#434843] leading-relaxed line-clamp-2">
                  {featuredSermon.description}
                </p>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs text-[#475749] font-bold">
                <span>Play Sermon</span>
                <span className="material-symbols-outlined text-[16px]">east</span>
              </div>
            </div>
          </article>

          {/* Sidebar Sermons (Small 4-col) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {sideSermons.map((sermon) => (
              <article
                key={sermon.id}
                onClick={() => onSelectSermon(sermon)}
                className="flex-1 group bg-[#f0eee8] rounded-xl border border-[#c3c8c1] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative w-full h-36 bg-[#e5e2dc] overflow-hidden">
                  <img
                    src={`https://i3.ytimg.com/vi/${sermon.youtubeId}/hqdefault.jpg`}
                    alt={sermon.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#fcf9f3]/90 flex items-center justify-center text-[#475749] shadow-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined icon-fill text-xl">
                      {sermon.type === 'video' ? 'play_arrow' : 'headphones'}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5 font-label-sm text-xs text-[#546251]">
                    <span>{sermon.date}</span>
                    <span>•</span>
                    <span>{sermon.speaker}</span>
                  </div>

                  <h3 className="font-headline-md text-[18px] text-[#1c1c18] group-hover:text-[#475749] transition-colors leading-tight">
                    {sermon.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Lessons Archive Section (Text Cards) */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10 space-y-3">
          <h2 className="font-headline-lg text-[32px] text-[#475749] font-semibold">
            Spiritual Lessons Archive
          </h2>
          <p className="font-body-md text-[16px] text-[#434843] max-w-xl mx-auto">
            Weekly written insights, prophetic words, and study materials to support your personal devotion.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setDisplayedLessonsCount(3);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#475749] text-white shadow-xs'
                    : 'bg-[#f0eee8] text-[#434843] border border-[#c3c8c1] hover:bg-[#e5e2dc]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleLessons.map((lesson) => (
            <article
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className="bg-[#ffffff] border border-[#c3c8c1] p-8 flex flex-col h-full hover:border-[#475749] hover:bg-[#f6f3ed] transition-all duration-300 rounded-2xl cursor-pointer group shadow-xs hover:shadow-md"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#d7e7d1] text-[#121f11] font-label-sm text-xs rounded-full mb-4 font-bold">
                  {lesson.category}
                </span>
                <h3 className="font-headline-md text-[22px] text-[#1c1c18] mb-2 leading-snug group-hover:text-[#475749] transition-colors">
                  {lesson.title}
                </h3>
                <div className="font-label-sm text-xs text-[#747872] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">menu_book</span>
                  <span>{lesson.readTime}</span>
                </div>
              </div>

              <p className="font-body-md text-sm text-[#434843] flex-grow mb-6 leading-relaxed">
                {lesson.excerpt}
              </p>

              <div className="font-label-sm text-xs text-[#475749] group-hover:text-[#546251] transition-colors mt-auto inline-flex items-center gap-1 font-bold">
                <span>Read Lesson</span>
                <span className="material-symbols-outlined text-[16px]">east</span>
              </div>
            </article>
          ))}
        </div>

        {visibleLessons.length < filteredLessons.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setDisplayedLessonsCount((prev) => prev + 3)}
              className="bg-transparent border border-[#475749] text-[#475749] font-label-sm text-sm px-8 py-3 rounded-full hover:bg-[#475749]/10 transition-colors cursor-pointer shadow-xs font-bold"
            >
              Load More Lessons
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
