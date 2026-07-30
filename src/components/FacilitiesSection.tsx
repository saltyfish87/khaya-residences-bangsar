import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X } from 'lucide-react';
import { FACILITIES } from '../data/projectData';

export default function FacilitiesSection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');
  const [lightboxDesc, setLightboxDesc] = useState<string>('');
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number>(0);

  const facilityHighlights = [
    {
      id: 'pool',
      title: "50-Meter Infinity Horizon Pool",
      category: "Level 8 Podium Deck",
      desc: "A tranquil aquatic terrace seamlessly integrating lounge cabanas, shaded landscape decks, and panoramic city orientation.",
      thumbnailUrl: "https://assets.cdn.filesafe.space/lACwR9t89exHjDBEit6g/media/6a2281cb49e55f85196e75ef.webp",
      largeUrl: "https://assets.cdn.filesafe.space/lACwR9t89exHjDBEit6g/media/6a2281cb49e55f85196e75ef.webp"
    },
    {
      id: 'skydeck',
      title: "Sky Deck Sanctuary & Sky Gym",
      category: "Rooftop Summit",
      desc: "A social viewing observatory with floor-to-ceiling panoramic glass, offering an incredible bird's-eye perspective of the Bangsar and KL skyline.",
      thumbnailUrl: "https://drive.google.com/thumbnail?id=1k-KOA-yMgf9-sCtg-jeOzX13MTi1IOnC&sz=w1200",
      largeUrl: "https://drive.google.com/thumbnail?id=1k-KOA-yMgf9-sCtg-jeOzX13MTi1IOnC&sz=w1600"
    }
  ];

  const currentHighlight = facilityHighlights[activeHighlightIndex];

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden border-t border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3">
            Lifestyle Facilities
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight font-light text-brand-charcoal">
            Resort Recreation
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-4 leading-relaxed font-sans font-light max-w-xl mx-auto">
            Spanning multiple levels, Khaya Residences offers a curated range of amenities designed for physical restoration and quiet retreat.
          </p>
        </div>

        {/* 2-Column Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column Left: Visual Showcase Card */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="flex space-x-6 border-b border-stone-300/60 pb-3">
              {facilityHighlights.map((hl, idx) => (
                <button
                  key={hl.id}
                  onClick={() => setActiveHighlightIndex(idx)}
                  className={`text-xs font-medium tracking-[0.18em] uppercase transition-colors relative pb-2 cursor-pointer ${
                    activeHighlightIndex === idx
                      ? 'text-brand-charcoal font-semibold'
                      : 'text-slate-600 hover:text-brand-charcoal'
                  }`}
                >
                  <span>{hl.id === 'pool' ? 'Infinity Pool' : 'Sky Deck Lounge'}</span>
                  {activeHighlightIndex === idx && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold" />
                  )}
                </button>
              ))}
            </div>

            <div 
              key={activeHighlightIndex}
              className="relative border border-stone-300/60 bg-brand-white p-4 group cursor-pointer w-full flex flex-col"
              onClick={() => {
                setLightboxImage(currentHighlight.largeUrl);
                setLightboxTitle(currentHighlight.title);
                setLightboxDesc(currentHighlight.desc);
              }}
            >
              <div className="relative w-full overflow-hidden bg-[#F8F5F0] flex items-center justify-center aspect-[16/10]">
                <img 
                  src={currentHighlight.thumbnailUrl} 
                  alt={`${currentHighlight.title} rendering`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-brand-white text-brand-charcoal px-4 py-2 text-[10px] uppercase tracking-[0.22em] border border-stone-300/60 shadow-xs flex items-center gap-2">
                    <ZoomIn className="w-3.5 h-3.5 text-brand-gold" />
                    <span>View Full Render</span>
                  </span>
                </div>
              </div>

              <div className="pt-6 pb-2 text-left">
                <span className="text-xs uppercase tracking-[0.32em] font-medium text-brand-gold block mb-1">
                  {currentHighlight.category}
                </span>
                <h3 className="font-serif text-2xl text-brand-charcoal font-light">
                  {currentHighlight.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 font-sans mt-2 leading-relaxed font-light">
                  {currentHighlight.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Column Right: Complete Facilities List */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-brand-white border border-stone-300/60 p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs">
              <div>
                <span className="text-xs uppercase tracking-[0.32em] font-medium text-brand-gold block mb-1">
                  Amenities Directory
                </span>
                <h3 className="font-serif text-2xl text-brand-charcoal font-light">
                  All Lifestyle Features
                </h3>
                <p className="text-xs text-slate-800 mt-2 font-sans font-light border-b border-stone-300/60 pb-4">
                  Featuring 40+ curated recreation amenities across the podium and rooftop decks.
                </p>

                <ul className="divide-y divide-stone-300/60 max-h-[420px] overflow-y-auto pr-1 text-xs">
                  {FACILITIES.map((facility, index) => (
                    <li key={index} className="py-3.5 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-serif text-base text-brand-charcoal font-normal">
                          {facility.name}
                        </h4>
                        <p className="text-[11px] text-slate-800 leading-relaxed font-sans font-light mt-0.5">
                          {facility.description}
                        </p>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-brand-gold font-medium whitespace-nowrap shrink-0 mt-1">
                        {facility.category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-300/60 text-xs text-slate-800 font-sans font-light flex items-center justify-between">
                <span>Elevator access across all levels</span>
                <span className="text-brand-gold font-medium uppercase tracking-wider text-[10px]">Exclusive Use</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Facilities Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-brand-charcoal/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-brand-white p-6 border border-stone-300 flex flex-col overflow-hidden"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 text-brand-charcoal hover:text-brand-gold text-2xl font-light z-20 cursor-pointer"
              >
                ✕
              </button>
              
              <div className="w-full h-full overflow-auto flex justify-center items-center p-2 max-h-[72vh]">
                <img
                  src={lightboxImage}
                  alt={lightboxTitle}
                  className="max-w-full max-h-[70vh] object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 text-center border-t border-stone-300/60 mt-4">
                <h4 className="font-serif text-2xl text-brand-charcoal font-light">{lightboxTitle}</h4>
                <p className="text-xs text-slate-700 mt-1 font-sans font-light">{lightboxDesc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

