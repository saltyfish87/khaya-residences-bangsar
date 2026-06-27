import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/projectData';
import { GalleryItem } from '../types';
import { ZoomIn, Eye } from 'lucide-react';

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-brand-bg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

         {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
            Immersion of Form and Function
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
          <p className="text-sm sm:text-base text-slate-700 mt-5 leading-relaxed font-sans font-medium">
            Explore premium renderings representing the architecture, spaces, and lifestyles curated meticulously for the residents of Khaya Residences.
          </p>
        </div>

        {/* Masonry-like Grid containing ALL gallery items in a single high-contrast gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 cursor-pointer flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveItem(item)}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-100 flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-slate-900 p-3.5 rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg scale-90 group-hover:scale-100">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between grow bg-white">
                <div>
                  <h4 className="font-serif text-lg text-slate-950 group-hover:text-brand-gold transition-colors font-bold leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-sans font-medium">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] tracking-widest text-brand-gold font-bold uppercase">
                  <span>Enlarge Render View</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full screen Immersive Magnifier Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xs flex flex-col items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl border border-brand-gold/25 p-2 md:p-3 transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close trigger button */}
            <button 
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 bg-white hover:bg-brand-gold text-slate-900 w-10 h-10 rounded-full shadow-lg transition-colors z-20 font-bold text-sm"
              aria-label="Close modal"
            >
              ✕
            </button>
            
            {/* Visual Container */}
            <div className="rounded-xl overflow-hidden bg-slate-950 aspect-16/9 flex items-center justify-center border border-slate-800 relative">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[75vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 pt-12">
                <span className="text-[10px] tracking-widest uppercase text-brand-gold font-bold bg-brand-gold/20 px-2.5 py-1 rounded-md border border-brand-gold/30 inline-block mb-2">
                  Project Render
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-white tracking-wide font-semibold">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-slate-200 mt-1 max-w-3xl leading-relaxed font-medium">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-[11px] text-slate-400 tracking-wider uppercase mt-4 text-center font-bold">
            Click outside the image or click "✕" to close.
          </div>
        </div>
      )}
    </section>
  );
}
