import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  Dumbbell, 
  Leaf, 
  Compass, 
  Tv, 
  Dribbble, 
  Smile, 
  ShoppingBag, 
  Award,
  ChevronRight,
  ZoomIn,
  X
} from 'lucide-react';
import { FACILITIES } from '../data/projectData';

export default function FacilitiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');
  const [lightboxDesc, setLightboxDesc] = useState<string>('');
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number>(0);

  const facilityHighlights = [
    {
      id: 'pool',
      title: "50-Meter Infinity Horizon Pool",
      category: "Primary Level Facility",
      desc: "A tranquil, elevated aquatic terrace seamlessly integrating lounge chairs, lush shade trees, and spectacular open-sky orientation.",
      thumbnailUrl: "https://drive.google.com/thumbnail?id=14mXmvDW4uOljA9O3uQnrbFA2RsjPPq7X&sz=w1200",
      largeUrl: "https://drive.google.com/thumbnail?id=14mXmvDW4uOljA9O3uQnrbFA2RsjPPq7X&sz=w1600"
    },
    {
      id: 'skydeck',
      title: "Sky Deck Sanctuary & Leisure Suite",
      category: "Sky Summit Facility",
      desc: "A premium social viewing lounge with floor-to-ceiling panoramic glass, offering an incredible bird's-eye perspective of the surrounding skyline.",
      thumbnailUrl: "https://drive.google.com/thumbnail?id=1k-KOA-yMgf9-sCtg-jeOzX13MTi1IOnC&sz=w1200",
      largeUrl: "https://drive.google.com/thumbnail?id=1k-KOA-yMgf9-sCtg-jeOzX13MTi1IOnC&sz=w1600"
    }
  ];

  const currentHighlight = facilityHighlights[activeHighlightIndex];

  // Categories extraction
  const categories = ['All', 'Aqua', 'Wellness', 'Nature', 'Social', 'Sports', 'Family', 'Convenience'];

  // Helper to match category with correct icon
  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'aqua':
        return <Droplets className="w-5 h-5 text-brand-gold" />;
      case 'wellness':
        return <Dumbbell className="w-5 h-5 text-brand-gold" />;
      case 'nature':
        return <Leaf className="w-5 h-5 text-brand-gold" />;
      case 'social':
        return <Compass className="w-5 h-5 text-brand-gold" />;
      case 'sports':
        return <Dribbble className="w-5 h-5 text-brand-gold" />;
      case 'family':
        return <Smile className="w-5 h-5 text-brand-gold" />;
      case 'convenience':
        return <ShoppingBag className="w-5 h-5 text-brand-gold" />;
      default:
        return <Award className="w-5 h-5 text-brand-gold" />;
    }
  };

  const filteredFacilities = activeCategory === 'All' 
    ? FACILITIES 
    : FACILITIES.filter(f => f.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="facilities" className="py-20 sm:py-24 bg-brand-bg relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold leading-tight text-slate-900"
          >
            Epitome of Bespoke Well-being
          </motion.h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-700 mt-5 leading-relaxed font-sans font-medium"
          >
            Spanning over multiple levels of resort recreation, Khaya Residences offers a holistic range of features designed for personal restoration, physical energy and modern family connections.
          </motion.p>
        </div>

        {/* Column Left and Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
          
          {/* Column Left: High-Resolution Visual Showcase Card */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-4">
            {/* Quick Selector Tabs to choose facility image */}
            <div className="flex space-x-2 border-b border-slate-100 pb-3">
              {facilityHighlights.map((hl, idx) => (
                <button
                  key={hl.id}
                  onClick={() => setActiveHighlightIndex(idx)}
                  className={`px-4 py-2 text-xs font-bold font-sans rounded-xl transition-all duration-300 cursor-pointer ${
                    activeHighlightIndex === idx
                      ? 'bg-brand-gold text-slate-950 shadow-md scale-102 font-extrabold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {hl.id === 'pool' ? 'Infinity Pool' : 'Sky Deck Lounge'}
                </button>
              ))}
            </div>

            <motion.div 
              key={activeHighlightIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group cursor-pointer w-full flex flex-col bg-brand-charcoal"
              onClick={() => {
                setLightboxImage(currentHighlight.largeUrl);
                setLightboxTitle(currentHighlight.title);
                setLightboxDesc(currentHighlight.desc);
              }}
            >
              {/* Entirely visible fitted image container */}
              <div className="relative w-full overflow-hidden bg-slate-950 flex items-center justify-center aspect-[16/10]">
                <img 
                  src={currentHighlight.thumbnailUrl} 
                  alt={`${currentHighlight.title} rendering`}
                  className="w-full h-full object-contain transition-transform duration-[6s] ease-out group-hover:scale-101"
                  referrerPolicy="no-referrer"
                />
                
                {/* Enlarge Overlay Indicator */}
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 text-slate-900 px-4 py-2 rounded-full font-sans text-[10px] font-bold tracking-widest uppercase shadow-md flex items-center space-x-1.5 border border-slate-100">
                    <ZoomIn className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Enlarge Render View</span>
                  </div>
                </div>
              </div>

              {/* Clean content box below the image */}
              <div className="p-6 bg-brand-charcoal border-t border-white/5 text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-brand-gold block mb-1">
                  {currentHighlight.category}
                </span>
                <h3 className="font-serif text-lg font-extrabold text-white tracking-wide">
                  {currentHighlight.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed font-semibold">
                  {currentHighlight.desc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column Right: Elegant Interactive Amenities Checklist */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xs h-full flex flex-col justify-between">
              
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-bold tracking-wide">
                  Complete Lifestyle Amenities
                </h3>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  Showing all {filteredFacilities.length} lifestyle features meticulously planned for Khaya Residences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar my-4">
                {filteredFacilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-gold/40 hover:bg-white transition-all duration-300 flex items-start space-x-3 group"
                  >
                    <div className="p-2 bg-brand-gold/5 border border-brand-gold/25 rounded-xl text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-slate-950 transition-colors duration-300">
                      {getCategoryIcon(facility.category)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 tracking-wide group-hover:text-brand-gold transition-colors">
                        {facility.name}
                      </h4>
                      <span className="text-[8px] uppercase font-mono tracking-widest text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded-md inline-block mt-1">
                        {facility.category}
                      </span>
                      <p className="text-[10px] text-slate-600 mt-1.5 leading-relaxed font-sans font-medium">
                        {facility.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Advisory note */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <span className="flex items-center gap-1.5 font-sans font-medium">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping" />
                  Direct elevator access from all levels
                </span>
                <span className="font-bold text-brand-gold">EXCLUSIVE RECREATION</span>
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
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-slate-900 hover:bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20 cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full h-full overflow-auto flex justify-center items-center p-4 min-h-[50vh] max-h-[75vh]">
                <img
                  src={lightboxImage}
                  alt={lightboxTitle}
                  className="max-w-full max-h-[70vh] object-contain select-none rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 text-center bg-slate-900 border-t border-slate-800 rounded-b-2xl">
                <h4 className="font-serif text-lg text-white font-bold">{lightboxTitle}</h4>
                <p className="text-xs text-slate-400 mt-1">{lightboxDesc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
