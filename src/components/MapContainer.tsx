import { useState } from 'react';
import { DESTINATIONS, CONNECTIVITY } from '../data/projectData';
import { MapPin, Navigation, Car, Milestone, Compass, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MapContainer() {
  const [activeCategory, setActiveCategory] = useState<string>('Transit Stations');
  const [isEnlarged, setIsEnlarged] = useState(false);

  const activeDestList = DESTINATIONS.find(d => d.category === activeCategory)?.list || DESTINATIONS[0].list;

  return (
    <div className="flex flex-col space-y-10 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
      
      {/* 1. MAJOR ELEMENT: Massive Location Map Image */}
      <div 
        className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-inner group/map cursor-zoom-in"
        onClick={() => setIsEnlarged(true)}
      >
        <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-left border border-brand-gold/30 flex items-center space-x-2.5 shadow-md">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <div>
            <span className="text-[10px] tracking-wider uppercase text-brand-gold font-bold block">
              Jalan Bangsar, Kuala Lumpur
            </span>
            <span className="text-[9px] font-medium text-slate-300 block mt-0.5 leading-none">
              Adjacent to Abdullah Hukum Integration Hub
            </span>
          </div>
        </div>

        {/* Floating click to zoom indicator */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <div className="bg-white/95 text-slate-900 px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase shadow-lg flex items-center space-x-2 border border-slate-100 scale-90 group-hover/map:scale-100 transition-all duration-300">
            <ZoomIn className="w-4 h-4 text-brand-gold" />
            <span>Click to Enlarge</span>
          </div>
        </div>

        <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] bg-white flex items-center justify-center p-4 relative overflow-hidden">
          <img 
            src="https://drive.google.com/thumbnail?id=1UDYIC7fbMXa61AeoaKRgQ-8O9mqBjHQt&sz=w1200"
            alt="Official Khaya Residences Bangsar Schematic Location Map"
            className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover/map:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="bg-slate-900 text-slate-400 p-3 text-center text-[10px] tracking-wider block border-t border-slate-800 font-sans font-medium">
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
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl w-full max-h-[90vh] bg-white rounded-3xl p-3 border border-white/10 shadow-2xl flex flex-col overflow-hidden"
            >
              <button
                onClick={() => setIsEnlarged(false)}
                className="absolute top-4 right-4 bg-slate-900 hover:bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20 cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full h-full overflow-auto flex justify-center items-center p-4 min-h-[50vh] max-h-[75vh]">
                <img
                  src="https://drive.google.com/thumbnail?id=1UDYIC7fbMXa61AeoaKRgQ-8O9mqBjHQt&sz=w1600"
                  alt="Official Khaya Residences Bangsar Schematic Location Map - Enlarged View"
                  className="max-w-full max-h-[70vh] object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 text-center bg-slate-900 border-t border-slate-800 rounded-b-2xl">
                <h4 className="font-serif text-lg text-white font-bold">Khaya Residences Location Map</h4>
                <p className="text-xs text-slate-400 mt-1">Enlarged high-resolution schematic route layout</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. SUB-ELEMENT: Proximity & Connectivity Hub Details directly under the Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 border-t border-slate-100">
        
        {/* Proximity Listing (Transit, Malls, Medical) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded bg-brand-gold/10 text-brand-gold">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-semibold">
                Proximity Destination Hub
              </h3>
            </div>

            {/* Simple Horizontal Selector for categories */}
            <div className="flex flex-wrap gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-100">
              {DESTINATIONS.map((d) => (
                <button
                  key={d.category}
                  onClick={() => setActiveCategory(d.category)}
                  className={`px-3.5 py-1.5 rounded-lg text-[10px] tracking-wider uppercase font-bold transition-all cursor-pointer ${
                    activeCategory === d.category
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
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
                className="flex items-start justify-between p-4 rounded-xl bg-slate-50/50 border border-slate-100 hover:bg-slate-50 transition-all duration-300"
              >
                <div className="flex items-start space-x-3 max-w-[70%]">
                  <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 block leading-snug">
                      {dest.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block mt-1">
                      {dest.distance} distance
                    </span>
                  </div>
                </div>
                
                <div className="text-right shrink-0">
                  <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-slate-800 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg">
                    <Car className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{dest.driveTime.split(' / ')[0]}</span>
                  </span>
                  {dest.driveTime.includes(' / ') && (
                    <span className="text-[9px] text-slate-500 block mt-1 font-medium">
                      {dest.driveTime.split(' / ')[1]}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connectivity Highways Listing */}
        <div className="lg:col-span-4 bg-slate-50/70 rounded-2xl border border-slate-200 p-6 space-y-5">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded bg-brand-gold/10 text-brand-gold">
              <Milestone className="w-4 h-4" />
            </div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-800 font-sans">
              Highways & Access arteries
            </h4>
          </div>
          
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
            Khaya Residences offers signal-free access into primary Kuala Lumpur expressways for smooth commuting.
          </p>

          <div className="space-y-4">
            {CONNECTIVITY.map((c, i) => (
              <div key={i} className="text-left border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                <span className="text-xs font-bold text-slate-900 flex items-center">
                  <Navigation className="w-3.5 h-3.5 text-brand-gold mr-2 shrink-0 rotate-45" />
                  {c.name}
                </span>
                <p className="text-[10px] text-slate-600 leading-normal mt-1 block font-medium">
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
