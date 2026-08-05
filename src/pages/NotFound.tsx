import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <span className="material-symbols-outlined text-6xl text-[#546251] mb-4">
        search_off
      </span>
      <h1 className="font-headline-lg text-[32px] text-[#475749] mb-2">
        Page Not Found
      </h1>
      <p className="font-body-md text-sm text-[#434843] mb-8 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="bg-[#475749] text-white px-8 py-3 rounded-full font-label-sm text-sm hover:bg-[#5f6f60] transition-colors shadow-md"
      >
        Return to Homepage
      </Link>
    </div>
  );
};
