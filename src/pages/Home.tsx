import React, { useState } from 'react';
import { IMAGES, CHURCH_INFO } from '../data/churchData';

interface HomeProps {
  onOpenSupportModal: () => void;
  onOpenPrayerModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenSupportModal, onOpenPrayerModal }) => {
 const [contactName, setContactName] = useState('');
const [contactEmail, setContactEmail] = useState('');
const [contactMsg, setContactMsg] = useState('');
const [submittedMessage, setSubmittedMessage] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState('');

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError('');

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        botcheck: "",
        name: contactName,
        email: contactEmail,
        message: contactMsg,
        subject: `New message from ${contactName} via church website`,
        from_name: "Church Website Contact Form", // shows as the sender name in your inbox
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSubmittedMessage(true);
    } else {
      setSubmitError(data.message || "Something went wrong. Please try again.");
    }
  } catch (err) {
    setSubmitError("Network error — please check your connection and try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-16 md:pt-8">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden bg-[#f0eee8]">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full opacity-40 transition-all duration-700"
            style={{ backgroundImage: `url('${IMAGES.heroBg}')` }}
          ></div>
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f3] via-[#fcf9f3]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center space-y-8 py-20">
          <h1 className="font-headline-xl text-[32px] sm:text-[52px] md:text-[64px] text-[#475749] max-w-4xl mx-auto leading-tight font-bold">
            Welcome to {CHURCH_INFO.fullName}
          </h1>
          <p className="font-body-lg text-[18px] md:text-[22px] text-[#434843] max-w-2xl mx-auto font-normal">
            {CHURCH_INFO.motto}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={scrollToContact}
              className="bg-[#475749] text-white px-8 py-4 rounded-full font-label-sm text-[15px] hover:bg-[#5f6f60] transition-colors w-full sm:w-auto cursor-pointer shadow-md"
            >
              Plan a Visit
            </button>
            <button
              onClick={onOpenSupportModal}
              className="bg-[#fcf9f3] text-[#475749] border border-[#475749] px-8 py-4 rounded-full font-label-sm text-[15px] hover:bg-[#5f6f60] hover:text-white transition-colors w-full sm:w-auto cursor-pointer shadow-sm"
            >
              Support Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Block (Bento Grid Style) */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-[32px] md:text-[40px] text-[#475749] font-semibold">
            Our Vision &amp; Mission
          </h2>
          <div className="w-24 h-1 bg-[#546251] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Goal */}
          <div className="bg-[#e8e2d3] rounded-2xl p-8 sm:p-10 border border-[#c3c8c1]/50 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute -right-10 -top-10 text-[#475749] opacity-5 transform rotate-12 transition-transform group-hover:rotate-45 duration-700 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">auto_stories</span>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#f0eee8] rounded-full flex items-center justify-center mb-6 shadow-xs">
                <span className="material-symbols-outlined text-[#475749] text-3xl">menu_book</span>
              </div>
              <h3 className="font-headline-md text-[26px] text-[#475749] mb-4">
                Spreading the Word
              </h3>
              <p className="font-body-md text-[16px] text-[#434843] leading-relaxed">
                Our primary goal is spreading the Word of God through prophecy, ensuring every ear hears the message of salvation and every heart is touched by divine truth.
              </p>
            </div>
          </div>

          {/* Card 2: Support */}
          <div className="bg-[#ebe8e2] rounded-2xl p-8 sm:p-10 border border-[#c3c8c1]/50 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute -left-10 -bottom-10 text-[#546251] opacity-5 transform -rotate-12 transition-transform group-hover:-rotate-45 duration-700 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">volunteer_activism</span>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#fcf9f3] rounded-full flex items-center justify-center mb-6 shadow-xs">
                <span className="material-symbols-outlined text-[#546251] text-3xl">home_health</span>
              </div>
              <h3 className="font-headline-md text-[26px] text-[#546251] mb-4">
                Community Support
              </h3>
              <p className="font-body-md text-[16px] text-[#434843] leading-relaxed">
                Beyond spiritual nourishment, we are committed to providing physical shelter, food, and medical support to those in need within our community, embodying the love of Christ in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Church Info Banner */}
      <section className="bg-[#475749] text-white my-8">
        <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline-lg text-[32px] md:text-[38px] text-white">
              Join Us in Mumias
            </h2>
            <p className="font-body-md text-[16px] text-white/90 leading-relaxed">
              Our main congregation gathers at {CHURCH_INFO.address}. Experience uplifting worship and deeply rooted community outreach.
            </p>
            <div className="flex items-center gap-3 text-[#e0f1df]">
              <span className="material-symbols-outlined text-2xl">location_on</span>
              <span className="font-label-sm text-[15px]">{CHURCH_INFO.address}</span>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CHURCH_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border border-white px-6 py-3 rounded-full font-label-sm text-[14px] hover:bg-white hover:text-[#475749] transition-colors inline-block cursor-pointer"
            >
              Get Directions
            </a>
          </div>

          <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
            <img
              src={IMAGES.communityMumias}
              alt="Community Gathering in Mumias"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="bg-[#f0eee8] rounded-3xl overflow-hidden border border-[#c3c8c1] flex flex-col md:flex-row shadow-sm">
          {/* Contact Info Panel */}
          <div className="bg-[#d7e7d1] p-8 sm:p-12 md:w-2/5 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="font-headline-lg text-[32px] text-[#121f11] mb-4">
                Get In Touch
              </h2>
              <p className="font-body-md text-[15px] text-[#3d4a3a] mb-8 leading-relaxed">
                We welcome your inquiries, prayer requests, and messages. Reach out to our church office.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#546251] mt-1 text-2xl">call</span>
                  <div>
                    <p className="font-label-sm text-sm text-[#121f11] font-bold">Phone</p>
                    <a href={`tel:${CHURCH_INFO.phone}`} className="font-body-md text-sm text-[#3d4a3a] hover:underline">
                      {CHURCH_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#546251] mt-1 text-2xl">mail</span>
                  <div>
                    <p className="font-label-sm text-sm text-[#121f11] font-bold">Email</p>
                    <a href={`mailto:${CHURCH_INFO.email}`} className="font-body-md text-sm text-[#3d4a3a] hover:underline">
                      {CHURCH_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenPrayerModal}
                className="text-xs text-[#121f11] font-bold underline hover:text-[#546251] cursor-pointer"
              >
                Or submit a prayer request directly &rarr;
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 sm:p-12 md:w-3/5 bg-[#fcf9f3]">
            {!submittedMessage ? (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block font-label-sm text-sm text-[#1c1c18] mb-2 font-bold" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#546251] focus:outline-none transition-colors text-sm"
                  />
                </div>
                
                <div>
		  <label className="block font-label-sm text-sm text-[#1c1c18] mb-2 font-bold" htmlFor="email">
		    Email
		  </label>
		  <input
		    id="email"
		    type="email"
		    required
		    placeholder="you@example.com"
		    value={contactEmail}
		    onChange={(e) => setContactEmail(e.target.value)}
		    className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#546251] focus:outline-none transition-colors text-sm"
		  />
		</div>

                <div>
                  <label className="block font-label-sm text-sm text-[#1c1c18] mb-2 font-bold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#546251] focus:outline-none transition-colors text-sm"
                  ></textarea>
                </div>
                
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
                
                {submitError && (
		    <p className="text-sm text-red-600 font-body-md">{submitError}</p>
		  )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#546251] text-white px-8 py-3.5 rounded-full font-label-sm text-sm hover:bg-[#475749] transition-colors w-full sm:w-auto shadow-md cursor-pointer"
                >
                      {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#d7e7d1] text-[#121f11] rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-4xl">check</span>
                </div>
                <h3 className="font-headline-lg text-2xl text-[#475749]">Message Received!</h3>
                <p className="font-body-md text-sm text-[#434843]">
                  Thank you <strong>{contactName}</strong>. Our church office in Mumias will respond to your message shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmittedMessage(false);
                    setContactName('');
                    setContactEmail('');
                    setContactMsg('');
                  }}
                  className="bg-[#475749] text-white px-6 py-2 rounded-full font-label-sm text-xs cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
