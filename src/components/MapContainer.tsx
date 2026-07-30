import { useState } from 'react';
import { DESTINATIONS, CONNECTIVITY } from '../data/projectData';
import { ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MapContainer() {
  const [activeCategory, setActiveCategory] = useState<string>('Transit Stations');
  const [isEnlarged, setIsEnlarged] = useState(false);

  const activeDestList = DESTINATIONS.find(d => d.category === activeCategory)?.list || DESTINATIONS[0].list;

  return (
    <div className="flex flex-col space-y-10 bg-brand-white border border-stone-300/60 p-6 sm:p-10 shadow-xs">
      
      {/* 1. MAJOR ELEMENT: Location Map Image */}
      <div 
        className="relative overflow-hidden border border-stone-300/60 bg-[#F8F5F0] group/map cursor-zoom-in"
        onClick={() => setIsEnlarged(true)}
      >
        <div className="absolute top-4 left-4 z-10 bg-brand-charcoal text-brand-white px-4 py-2 border border-stone-300/40 text-left">
          <span className="text-[10px] tracking-[0.24em] uppercase text-brand-gold font-normal block">
            Jalan Bangsar, Kuala Lumpur
          </span>
          <span className="text-[9px] font-light text-stone-300 block mt-0.5">
            Adjacent to Abdullah Hukum Integration Hub
          </span>
        </div>

        <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="bg-brand-white text-brand-charcoal px-4 py-2 font-sans text-xs tracking-[0.2em] uppercase border border-stone-300/60 flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-brand-gold" />
            <span>Enlarge Map</span>
          </span>
        </div>

        <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] bg-brand-white flex items-center justify-center p-4 relative overflow-hidden">
          <img 
            src="https://drive.google.com/thumbnail?id=1UDYIC7fbMXa61AeoaKRgQ-8O9mqBjHQt&sz=w1200"
            alt="Official Khaya Residences Bangsar Schematic Location Map"
            className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover/map:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="bg-brand-charcoal text-stone-300 p-3 text-center text-[10px] tracking-[0.2em] font-sans font-light border-t border-stone-800 uppercase">
          Khaya Residences Location Map — Click to enlarge
        </div>
      </div>

      {/* Lightbox Modal for Location Map */}
      <AnimatePresence>
        {isEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEnlarged(false)}
            className="fixed inset-0 z-50 bg-brand-charcoal/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl w-full max-h-[90vh] bg-brand-white p-6 border border-stone-300 flex flex-col overflow-hidden"
            >
              <button
                onClick={() => setIsEnlarged(false)}
                className="absolute top-4 right-4 text-brand-charcoal hover:text-brand-gold text-2xl font-light z-20 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full h-full overflow-auto flex justify-center items-center p-4 min-h-[50vh] max-h-[75vh]">
                <img
                  src="https://drive.google.com/thumbnail?id=1UDYIC7fbMXa61AeoaKRgQ-8O9mqBjHQt&sz=w1600"
                  alt="Official Khaya Residences Bangsar Schematic Location Map - Enlarged View"
                  className="max-w-full max-h-[70vh] object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 text-center bg-brand-charcoal border-t border-stone-800 text-brand-white mt-2">
                <h4 className="font-serif text-xl font-light">Khaya Residences Location Map</h4>
                <p className="text-xs text-stone-300 mt-0.5 font-light">Schematic connectivity & route layout</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. SUB-ELEMENT: Proximity & Connectivity Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-stone-300/60">
        
        {/* Proximity Listing */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-300/60 pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-medium block">
                Accessibility
              </span>
              <h3 className="font-serif text-2xl text-brand-charcoal font-light">
                Surrounding Hubs
              </h3>
            </div>

            {/* Category selector */}
            <div className="flex flex-wrap gap-2">
              {DESTINATIONS.map((d) => (
                <button
                  key={d.category}
                  onClick={() => setActiveCategory(d.category)}
                  className={`px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-light border transition-all cursor-pointer ${
                    activeCategory === d.category
                      ? 'bg-brand-charcoal text-brand-white border-brand-charcoal'
                      : 'border-stone-300/60 text-slate-700 hover:border-brand-charcoal'
                  }`}
                >
                  {d.category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeDestList.map((dest, index) => (
              <div 
                key={index} 
                className="flex items-start justify-between p-4 bg-[#F8F5F0] border border-stone-300/60"
              >
                <div>
                  <span className="text-sm font-serif text-brand-charcoal block">
                    {dest.name}
                  </span>
                  <span className="text-[10px] text-brand-gold font-light uppercase tracking-[0.2em] block mt-1">
                    {dest.distance}
                  </span>
                </div>
                
                <div className="text-right">
                  <span className="text-xs font-sans text-brand-charcoal font-medium">
                    {dest.driveTime.split(' / ')[0]}
                  </span>
                  {dest.driveTime.includes(' / ') && (
                    <span className="text-[10px] text-slate-700 block font-light">
                      {dest.driveTime.split(' / ')[1]}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connectivity Highways */}
        <div className="lg:col-span-4 bg-[#F8F5F0] border border-stone-300/60 p-6 space-y-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-medium block">
              Expressways
            </span>
            <h4 className="text-xl font-serif text-brand-charcoal font-light mt-0.5">
              Access Routes
            </h4>
          </div>

          <div className="space-y-4 pt-2">
            {CONNECTIVITY.map((c, i) => (
              <div key={i} className="border-b border-stone-300/60 pb-3 last:border-b-0 last:pb-0">
                <span className="text-xs font-sans text-brand-charcoal font-medium uppercase tracking-[0.15em] block">
                  {c.name}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed mt-1 font-sans font-light">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

