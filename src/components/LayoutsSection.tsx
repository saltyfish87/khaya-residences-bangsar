import { useState } from 'react';
import { LAYOUTS } from '../data/projectData';
import { LayoutType } from '../types';
import { Maximize2, MessageSquare } from 'lucide-react';

interface LayoutsSectionProps {
  onSelectLayout: (layoutType: string) => void;
}

export default function LayoutsSection({ onSelectLayout }: LayoutsSectionProps) {
  const [selectedType, setSelectedType] = useState<string>(LAYOUTS[0].type);
  const [zoomImage, setZoomImage] = useState<LayoutType | null>(null);

  const activeLayout = LAYOUTS.find(layout => layout.type === selectedType) || LAYOUTS[0];

  return (
    <section id="layouts" className="py-20 sm:py-28 bg-brand-bg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3">
            Floor Plans
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-charcoal tracking-tight font-light">
            Choose Your Layout
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-4 leading-relaxed font-sans font-light max-w-xl mx-auto">
            Thoughtfully designed layouts for modern living. Spacious, functional, and timeless.
          </p>
        </div>

        {/* Horizontal Editorial Tabs */}
        <div className="flex justify-center gap-6 sm:gap-10 border-b border-stone-300/60 mb-10 overflow-x-auto pb-px no-scrollbar">
          {LAYOUTS.map((layout) => {
            const isActive = selectedType === layout.type;
            const shortLabel = layout.type.split(" ")[0] + " " + (layout.type.split(" ")[1] || "");
            return (
              <button
                key={layout.type}
                onClick={() => setSelectedType(layout.type)}
                className={`relative pb-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-brand-charcoal font-bold' : 'text-slate-700 hover:text-brand-charcoal'
                }`}
              >
                <span>{shortLabel}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold" />
                )}
              </button>
            );
          })}
        </div>

        {/* Editorial Stage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: Specs & Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] text-brand-gold font-medium block">
                {activeLayout.type}
              </span>
              
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-brand-charcoal mt-2 mb-4 leading-none">
                {activeLayout.size.replace(" sq ft", "")} <small className="text-lg font-sans uppercase tracking-wider font-medium text-slate-800">sq ft</small>
              </div>

              <p className="text-sm text-slate-800 leading-relaxed font-sans font-light mb-6">
                {activeLayout.description}
              </p>

              {/* Specs Hairline Table */}
              <ul className="border-t border-stone-300/60 divide-y divide-stone-300/60 text-sm">
                <li className="flex justify-between py-3">
                  <span className="text-xs uppercase tracking-wider text-slate-800 font-medium">Configuration</span>
                  <span className="font-serif text-base text-brand-charcoal font-normal">{activeLayout.rooms}</span>
                </li>
                <li className="flex justify-between py-3">
                  <span className="text-xs uppercase tracking-wider text-slate-800 font-medium">Bathrooms</span>
                  <span className="font-serif text-base text-brand-charcoal font-normal">{activeLayout.baths}</span>
                </li>
                <li className="flex justify-between py-3">
                  <span className="text-xs uppercase tracking-wider text-slate-800 font-medium">Car Parks</span>
                  <span className="font-serif text-base text-brand-charcoal font-normal">{activeLayout.carpark}</span>
                </li>
                <li className="flex justify-between py-3">
                  <span className="text-xs uppercase tracking-wider text-slate-800 font-medium">Facing & Orientation</span>
                  <span className="font-serif text-base text-brand-charcoal font-normal">Bangsar / KL Skyline View</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href={`https://wa.me/60108278932?text=${encodeURIComponent(`[KHAYA RESIDENCES] Hi, I would like to inquire about Layout ${activeLayout.type} (${activeLayout.size}, ${activeLayout.rooms}) at Khaya Residences Bangsar.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid inline-flex items-center justify-center space-x-2 bg-brand-charcoal text-brand-white border border-brand-charcoal px-8 py-4 text-xs tracking-[0.24em] uppercase transition-all duration-300 w-full hover:bg-transparent hover:text-brand-charcoal cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire Layout on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Image Visual Frame */}
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden bg-[#F8F5F0] border border-stone-300/60 p-6 sm:p-10 min-h-[420px] sm:min-h-[520px] flex items-center justify-center">
              <img
                src={activeLayout.imageUrl}
                alt={`${activeLayout.type} architectural floor plan layout concept`}
                className="object-contain w-full max-h-[480px] transition-transform duration-700 ease-out group-hover:scale-102 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setZoomImage(activeLayout)}
                className="absolute right-4 bottom-4 text-[10px] tracking-[0.24em] uppercase text-slate-700 hover:text-brand-charcoal transition-colors flex items-center space-x-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 border border-stone-300/60 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Enlarge Plan</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Enlarged Layout Plan Lightbox Modal */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-brand-charcoal/90 backdrop-blur-xs flex flex-col items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setZoomImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-brand-white border border-stone-300 p-6 sm:p-8 transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close trigger */}
            <button 
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 text-brand-charcoal hover:text-brand-gold w-8 h-8 flex items-center justify-center transition-colors z-20 text-xl font-light cursor-pointer"
            >
              ✕
            </button>
            
            <div className="bg-[#F8F5F0] p-6 flex items-center justify-center border border-stone-300/60">
              <img
                src={zoomImage.imageUrl}
                alt={zoomImage.type}
                className="max-h-[70vh] w-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-300/60 pt-4">
              <div>
                <h3 className="font-serif text-2xl text-brand-charcoal font-light">
                  {zoomImage.type} Layout Plan
                </h3>
                <p className="text-xs text-slate-700 font-sans tracking-wider mt-0.5">
                  {zoomImage.size} | {zoomImage.rooms}
                </p>
              </div>
              <a 
                href={`https://wa.me/60108278932?text=${encodeURIComponent(`[KHAYA RESIDENCES] Hi, I would like to inquire about Layout ${zoomImage.type} (${zoomImage.size}, ${zoomImage.rooms}) at Khaya Residences Bangsar.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setZoomImage(null)}
                className="bg-brand-gold hover:bg-brand-charcoal text-white py-3 px-6 text-xs tracking-[0.2em] uppercase transition-colors cursor-pointer flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

