import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';
import copy from '../../../content/pages/crop2026-programme.json';
// Text, images and links: src/content/pages/crop2026-programme.json (editable in the website editors).

const components = copy.components;

const schedule = copy.schedule;

const typeColors: Record<string, string> = {
  Plenary: 'bg-[#0A2540] text-white',
  Workshop: 'bg-teal-600 text-white',
  Roundtable: 'bg-orange-500 text-white',
  Youth: 'bg-rose-500 text-white',
  Research: 'bg-green-600 text-white',
  Cultural: 'bg-purple-600 text-white',
  Social: 'bg-[#D4AF37] text-[#0A2540]',
  General: 'bg-gray-100 text-gray-700',
};

export default function ProgrammePage() {
  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={copy.hero.image}
              alt={copy.hero.imageAlt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">{copy.hero.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.hero.title}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">{copy.hero.text}</p>
          </div>
        </section>

        {/* Programme Components */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.programmeComponents.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.programmeComponents.heading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DOWNLOAD FULL PROGRAMME PDF VIEWER ─── */}
        <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">{copy.downloadFullProgrammePdfViewer.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.downloadFullProgrammePdfViewer.heading}</h2>
              <p className="text-white/70 text-base max-w-2xl mx-auto mb-8">{copy.downloadFullProgrammePdfViewer.text}</p>

              {/*
                ============================================================
                PROGRAMME PDF — HOW TO UPDATE WHEN YOU HAVE A NEW VERSION
                ============================================================
                1. Upload your updated PDF to Cloudinary (drag & drop into
                   your Cloudinary Media Library at cloudinary.com).
                2. After upload, click the PDF to open its details.
                3. Copy the URL — it should look like:
                   https://res.cloudinary.com/dhjajm7ru/raw/upload/v.../filename.pdf
                4. Replace the URL in BOTH places below:
                   - The "Download PDF" href (line below)
                   - The iframe src (inside the PDF viewer section)
                ============================================================
              */}

              {/* Download & Zoom Controls */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <a
                  href={copy.downloadAndZoomControls.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                >
                  <i className="ri-download-2-line text-lg"></i>{copy.downloadAndZoomControls.link}</a>
                <span className="text-white/50 text-sm flex items-center gap-2">
                  <i className="ri-zoom-in-line"></i>{copy.downloadAndZoomControls.label}</span>
              </div>
            </div>

            {/* PDF Viewer iframe */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/*
                ============================================================
                PDF IFRAME — TO UPDATE THE PDF:
                1. Upload your updated PDF to Cloudinary
                2. Copy the URL (image/upload/ path)
                3. Replace BOTH: the Cloudinary URL in the Google Docs Viewer
                   src below AND the Download button href above
                The Google Docs Viewer proxy bypasses Chrome's cross-origin
                iframe blocking so the PDF preview always works.
                ============================================================
              */}
              <iframe
                src={copy.pdfViewerIframe.embedUrl}
                className="w-full"
                style={{ height: '800px', border: 'none' }}
                title={copy.pdfViewerIframe.title}
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* 3-Day Schedule */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.s3DaySchedule.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.s3DaySchedule.heading}</h2>
              <p className="text-gray-500 text-sm mt-2">{copy.s3DaySchedule.text}</p>
            </div>

            {/* Quick link back to PDF viewer above */}
            <div className="text-center mb-8">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0A2540] font-semibold rounded-lg hover:bg-[#C4A137] transition-all duration-300 shadow-md whitespace-nowrap cursor-pointer"
              >
                <i className="ri-file-pdf-2-line text-lg"></i>{copy.quickLinkBackToPdf.link}</a>
            </div>

            <div className="space-y-12">
              {schedule.map((day) => (
                <div key={day.day} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="bg-gradient-to-r from-[#0A2540] to-[#1a4a7a] px-6 py-5 md:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {day.day}: {day.date}
                        </h3>
                        <p className="text-[#D4AF37] font-semibold">{copy.quickLinkBackToPdf.text}{day.theme}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    {day.sessions.map((session, i) => (
                      <div key={i} className="flex flex-col md:flex-row gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="md:w-40 flex-shrink-0">
                          <span className="text-[#D4AF37] font-bold text-sm">{session.time}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="text-base font-bold text-[#0A2540]">{session.title}</h4>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${typeColors[session.type] || 'bg-gray-100 text-gray-600'}`}>
                              {session.type}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm flex items-center gap-1 mb-1">
                            <i className="ri-map-pin-line"></i>{session.location}
                          </p>
                          {session.desc && <p className="text-gray-600 text-sm leading-relaxed">{session.desc}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.cta.heading}</h2>
            <p className="text-lg text-white/80 mb-8">{copy.cta.text}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/crop2026/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-user-add-line text-lg"></i>{copy.cta.text2}</Link>
              <Link
                to="/crop2026/outcomes"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-award-line text-lg"></i>{copy.cta.text3}</Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}