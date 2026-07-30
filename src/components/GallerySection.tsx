import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/projectData';
import { GalleryItem } from '../types';
import { ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-brand-bg transition-all border-t border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3">
            Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-charcoal tracking-tight font-light">
            Architectural Visuals
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-4 leading-relaxed font-sans font-light max-w-xl mx-auto">
            Renderings showcasing the design, spaces, and ambiance of Khaya Residences.
          </p>
        </div>

        {/* Clean Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group bg-brand-white border border-stone-300/60 p-4 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveItem(item)}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-[#F8F5F0] flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-brand-white text-brand-charcoal px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] border border-stone-300/60 flex items-center gap-1.5 font-medium">
                    <ZoomIn className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Enlarge</span>
                  </span>
                </div>
              </div>
              <div className="pt-5 pb-2">
                <h4 className="font-serif text-xl text-brand-charcoal font-light">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 mt-1.5 leading-relaxed font-sans font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full screen Immersive Magnifier Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-brand-charcoal/90 backdrop-blur-xs flex flex-col items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-brand-white border border-stone-300 p-6 transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 text-brand-charcoal hover:text-brand-gold text-2xl font-light z-20 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <div className="bg-[#F8F5F0] aspect-16/9 flex items-center justify-center border border-stone-300/60 relative p-2">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 border-t border-stone-300/60 mt-4 text-center">
              <h3 className="font-serif text-2xl text-brand-charcoal font-light">
                {activeItem.title}
              </h3>
              <p className="text-xs text-slate-700 mt-1 font-sans font-light max-w-2xl mx-auto">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

