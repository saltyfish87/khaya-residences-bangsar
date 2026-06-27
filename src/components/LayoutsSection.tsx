import { useState } from 'react';
import { LAYOUTS } from '../data/projectData';
import { LayoutType } from '../types';
import { Maximize2, BedDouble, Bath, Car, Check, ChevronRight } from 'lucide-react';

interface LayoutsSectionProps {
  onSelectLayout: (layoutType: string) => void;
}

export default function LayoutsSection({ onSelectLayout }: LayoutsSectionProps) {
  const [selectedType, setSelectedType] = useState<string>(LAYOUTS[0].type);
  const [zoomImage, setZoomImage] = useState<LayoutType | null>(null);

  const activeLayout = LAYOUTS.find(layout => layout.type === selectedType) || LAYOUTS[0];

  return (
    <section id="layouts" className="py-20 sm:py-24 bg-brand-bg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Space & Proportion
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
            Meticulously Crafted Living Configurations
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
          <p className="text-sm sm:text-base text-slate-700 mt-5 leading-relaxed font-sans font-medium">
            Explore premium options balancing efficient layout proportions and designer fitouts, ideal for both independent professionals and expanding families.
          </p>
        </div>

        {/* Layout Master Container: Tab on Left, Image and Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: Vertical Tab Selectors (Stacked) */}
          <div className="lg:col-span-3 flex flex-col space-y-2 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs max-h-[500px] overflow-y-auto">
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 px-3 pb-2 border-b border-slate-100 mb-2">
              Select Configuration
            </span>
            {LAYOUTS.map((layout) => (
              <button
                key={layout.type}
                onClick={() => setSelectedType(layout.type)}
                className={`px-4 py-3.5 text-left text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-xl cursor-pointer ${
                  selectedType === layout.type
                    ? 'bg-slate-900 text-white shadow-md font-extrabold scale-[1.01]'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <div className="flex flex-col">
                  <span>{layout.type.split(" ")[0]} {layout.type.split(" ")[1] || ""}</span>
                  <span className={`text-[10px] font-medium font-mono lowercase tracking-normal mt-0.5 ${
                    selectedType === layout.type ? 'text-brand-gold' : 'text-slate-400'
                  }`}>
                    {layout.size}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT COLUMN: Active Layout Viewport - Info on left, Image on right */}
          <div className="lg:col-span-9 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
              
              {/* Info Area (Left side of right panel) */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-md">
                      {activeLayout.rooms}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 tracking-wide font-semibold mt-3">
                      {activeLayout.type}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 mt-1 font-mono tracking-wider">
                      Estimated Build Up: <span className="text-slate-900">{activeLayout.size}</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed font-sans font-medium">
                    {activeLayout.description}
                  </p>

                  {/* Room Configurations Grid */}
                  <div className="grid grid-cols-3 gap-2.5 my-6">
                    <div className="bg-slate-50/70 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-100">
                      <BedDouble className="w-4 h-4 text-brand-gold mb-1" />
                      <span className="text-[9px] tracking-wider text-slate-400 uppercase font-bold">Bedrooms</span>
                      <span className="text-xs font-bold text-slate-800 mt-0.5">{activeLayout.rooms.split(" ")[0]}</span>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-100">
                      <Bath className="w-4 h-4 text-brand-gold mb-1" />
                      <span className="text-[9px] tracking-wider text-slate-400 uppercase font-bold">Bathrooms</span>
                      <span className="text-xs font-bold text-slate-800 mt-0.5">{activeLayout.baths.split(" ")[0]}</span>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-100">
                      <Car className="w-4 h-4 text-brand-gold mb-1" />
                      <span className="text-[9px] tracking-wider text-slate-400 uppercase font-bold">Carpark</span>
                      <span className="text-xs font-bold text-slate-800 mt-0.5">{activeLayout.carpark.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button
                    onClick={() => onSelectLayout(activeLayout.type)}
                    className="bg-slate-900 hover:bg-brand-gold text-white hover:text-slate-900 w-full py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
                  >
                    <span>REQUEST DETAILS FOR {activeLayout.type.split(" ")[0]}</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* IMAGE ON RIGHT: Floor plan visualization */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 aspect-4/3 flex items-center justify-center p-4 h-full min-h-[300px]">
                  <img
                    src={activeLayout.imageUrl}
                    alt={`${activeLayout.type} architectural floor plan layout concept`}
                    className="object-contain w-full h-full rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setZoomImage(activeLayout)}
                      className="bg-white text-slate-900 p-3 rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center space-x-2 text-xs font-bold tracking-widest shadow-lg cursor-pointer transform translate-y-4 group-hover:translate-y-0"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>ZOOM LAYOUT</span>
                    </button>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-slate-900/95 backdrop-blur-xs text-white text-[9px] tracking-widest uppercase py-1 px-2.5 rounded-md font-bold border border-brand-gold/30">
                    Floor Plan Drawing
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Enlarged Layout Plan Lightbox Modal */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xs flex flex-col items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setZoomImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close trigger */}
            <button 
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 bg-slate-900 text-white hover:bg-brand-gold hover:text-slate-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20 font-bold"
            >
              ✕
            </button>
            
            <div className="rounded-2xl overflow-hidden bg-slate-50 p-6 flex items-center justify-center border border-slate-100">
              <img
                src={zoomImage.imageUrl}
                alt={zoomImage.type}
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-slate-900 font-bold">
                  {zoomImage.type} Layout Plan
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  {zoomImage.size} | {zoomImage.rooms}
                </p>
              </div>
              <button 
                onClick={() => {
                  setZoomImage(null);
                  onSelectLayout(zoomImage.type);
                }}
                className="bg-brand-gold hover:bg-slate-900 text-white py-2 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire Layout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
