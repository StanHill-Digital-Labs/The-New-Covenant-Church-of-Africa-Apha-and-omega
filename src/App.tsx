import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SupportModal } from './components/SupportModal';
import { PrayerModal } from './components/PrayerModal';
import { ShareModal } from './components/ShareModal';
import { SermonPlayerModal } from './components/SermonPlayerModal';
import { LessonReaderModal } from './components/LessonReaderModal';
import { BranchesModal } from './components/BranchesModal';
import { PrivacyModal } from './components/PrivacyModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Sermons } from './pages/Sermons';

import { Sermon, Lesson } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [prayerModalOpen, setPrayerModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [branchesModalOpen, setBranchesModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const [activeSermon, setActiveSermon] = useState<Sermon | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#fcf9f3] text-[#1c1c18] font-sans">
        {/* Navigation Bar */}
        <Header
          onOpenSupportModal={() => setSupportModalOpen(true)}
          onOpenShareModal={() => setShareModalOpen(true)}
          onOpenPrayerModal={() => setPrayerModalOpen(true)}
        />

        {/* Page Routes */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenSupportModal={() => setSupportModalOpen(true)}
                  onOpenPrayerModal={() => setPrayerModalOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  onOpenPrayerModal={() => setPrayerModalOpen(true)}
                />
              }
            />
            <Route
              path="/sermons"
              element={
                <Sermons
                  onSelectSermon={(sermon) => setActiveSermon(sermon)}
                  onSelectLesson={(lesson) => setActiveLesson(lesson)}
                />
              }
            />
            {/* Fallback to Home */}
            <Route
              path="*"
              element={
                <Home
                  onOpenSupportModal={() => setSupportModalOpen(true)}
                  onOpenPrayerModal={() => setPrayerModalOpen(true)}
                />
              }
            />
          </Routes>
        </div>

        {/* Universal Footer */}
        <Footer
          onOpenBranchesModal={() => setBranchesModalOpen(true)}
          onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        />

        {/* Modals */}
        <SupportModal
          isOpen={supportModalOpen}
          onClose={() => setSupportModalOpen(false)}
        />

        <PrayerModal
          isOpen={prayerModalOpen}
          onClose={() => setPrayerModalOpen(false)}
        />

        <ShareModal
          isOpen={shareModalOpen}
          onClose={() => setShareModalOpen(false)}
        />

        <BranchesModal
          isOpen={branchesModalOpen}
          onClose={() => setBranchesModalOpen(false)}
        />

        <PrivacyModal
          isOpen={privacyModalOpen}
          onClose={() => setPrivacyModalOpen(false)}
        />

        <SermonPlayerModal
          sermon={activeSermon}
          onClose={() => setActiveSermon(null)}
        />

        <LessonReaderModal
          lesson={activeLesson}
          onClose={() => setActiveLesson(null)}
        />
      </div>
    </Router>
  );
}
