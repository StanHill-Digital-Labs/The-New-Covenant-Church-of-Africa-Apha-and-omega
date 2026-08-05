import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Lesson } from '../types';

interface LessonReaderModalProps {
  lesson: Lesson | null;
  onClose: () => void;
}

export const LessonReaderModal: React.FC<LessonReaderModalProps> = ({ lesson, onClose }) => {
  if (!lesson) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f0eee8] border-b border-[#c3c8c1]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#d7e7d1] text-[#121f11] font-label-sm text-xs rounded-full font-bold">
              {lesson.category}
            </span>
            <span className="text-xs text-[#747872]">{lesson.readTime}</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#747872] hover:text-[#1c1c18] p-1.5 rounded-full hover:bg-[#e5e2dc] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Lesson Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          <div className="border-b border-[#c3c8c1]/60 pb-4">
            <h2 className="font-headline-lg text-[28px] text-[#475749] mb-2 leading-tight">
              {lesson.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-[#546251]">
              <span className="font-semibold">{lesson.author}</span>
              <span>•</span>
              <span>{lesson.date}</span>
            </div>
          </div>

          <p className="font-body-lg text-base italic text-[#565348] bg-[#e8e2d3]/50 p-4 rounded-xl border border-[#ccc6b8]/50">
            "{lesson.excerpt}"
          </p>

          <div className="markdown-body font-body-md text-base text-[#1c1c18] leading-relaxed">
  <ReactMarkdown
    components={{
      h1: ({ children }) => (
        <h1 className="font-headline-lg text-3xl text-[#475749] mt-8 mb-4 first:mt-0">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="font-headline-md text-2xl text-[#475749] mt-8 mb-4 first:mt-0">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="font-headline-md text-xl text-[#475749] mt-8 mb-3 first:mt-0">
          {children}
        </h3>
      ),
      p: ({ children }) => (
        <p className="mb-4 leading-8 text-[#1c1c18]">
          {children}
        </p>
      ),
      ul: ({ children }) => (
        <ul className="list-disc pl-6 mb-4 space-y-2">
          {children}
        </ul>
      ),
      ol: ({ children }) => (
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          {children}
        </ol>
      ),
      li: ({ children }) => (
        <li>{children}</li>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-[#475749] bg-[#f6f3ed] italic px-4 py-3 my-5 rounded-r-lg">
          {children}
        </blockquote>
      ),
      strong: ({ children }) => (
        <strong className="font-bold text-[#475749]">
          {children}
        </strong>
      ),
    }}
  >
    {lesson.content}
  </ReactMarkdown>
</div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#f0eee8] border-t border-[#c3c8c1] flex items-center justify-between">
          <span className="text-xs text-[#747872]">The New Covenant Church of Africa</span>
          <button
            onClick={onClose}
            className="bg-[#475749] text-white px-6 py-2 rounded-full font-label-sm text-xs hover:bg-[#5f6f60] transition-colors cursor-pointer"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
