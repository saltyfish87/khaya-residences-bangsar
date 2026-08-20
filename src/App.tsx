import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Compass, 
  Train, 
  Briefcase, 
  ShoppingBag, 
  Sparkles, 
  Trees, 
  ArrowUp, 
  Phone, 
  Mail, 
  Check, 
  Dumbbell, 
  Waves, 
  Heart, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';

import Header from './components/Header';
import SpecificationsTable from './components/SpecificationsTable';
import MapContainer from './components/MapContainer';
import LayoutsSection from './components/LayoutsSection';
import FacilitiesSection from './components/FacilitiesSection';
import GallerySection from './components/GallerySection';
import ContactForm from './components/ContactForm';
import SchemaInjector from './components/SchemaInjector';
import FAQsSection from './components/FAQsSection';
import { KEY_FEATURES, FACILITIES } from './data/projectData';

// Cleaned up imports

export default function App() {
  const [selectedLayoutForInquiry, setSelectedLayoutForInquiry] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  const whatsappUrl = "https://wa.me/60108278932?text=[KHAYA]%20Hi,%20I%20would%20like%20to%20know%20more%20about%20Khaya%20Residences%20Bangsar.";

  // Dynamic SEO & Meta Injections on Mount
  useEffect(() => {
    // 1. Set document title
    document.title = "Khaya Residences Bangsar | Khaya Tree Residences | Premium Living Near Mid Valley & KL Sentral";

    // 2. Add or update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Explore Khaya Residences (also known as Khaya Tree Residences or Khaya Tree Residence) in Bangsar. Discover luxurious serviced residence layout plans, exclusive facilities, superb connectivity near Mid Valley and KL Sentral, official pricing, and site progress.');

    // 2b. Add or update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'khaya residence, khaya residences, khaya tree residences, khaya tree residence, khaya tree bangsar, khaya residences bangsar, khaya tree residences bangsar, khaya residence pricing, khaya residence location, khaya residence showroom, khaya residence layout, khaya residence map, khaya residence developer, khaya residence show unit, khaya residence facilities, khaya residence contact, khaya residences pricing, khaya residences location, khaya residences showroom, khaya residences layout, khaya residences map, khaya residences developer, khaya residences show unit, khaya residences facilities, khaya residences contact, khaya tree residences pricing, khaya tree residences location, khaya tree residences showroom, khaya tree residences layout, khaya tree residences map, khaya tree residences developer, khaya tree residences show unit, khaya tree residences facilities, khaya tree residences contact, khaya tree residence pricing, khaya tree residence location, khaya tree residence showroom, khaya tree residence layout, khaya tree residence map, khaya tree residence developer, khaya tree residence show unit, khaya tree residence facilities, khaya tree residence contact, khaya tree bangsar pricing, khaya tree bangsar location, khaya tree bangsar showroom, khaya tree bangsar layout, khaya tree bangsar map, khaya tree bangsar developer, khaya tree bangsar show unit, khaya tree bangsar facilities, khaya tree bangsar contact');

    // 2c. Add Google Site Verification dynamically
    let gsv = document.querySelector('meta[name="google-site-verification"]');
    if (!gsv) {
      gsv = document.createElement('meta');
      gsv.setAttribute('name', 'google-site-verification');
      document.head.appendChild(gsv);
    }
    gsv.setAttribute('content', 'F0rKKU7cLaxnCeUFNP8-H2o_c4ez_f2Ai_HiujqIR9U');

    // 3. Add or update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://khaya-residence.my/');

    // 4. Scroll position monitor for floating widgets
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectLayout = (layoutType: string) => {
    setSelectedLayoutForInquiry(layoutType);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = contactSection.getBoundingClientRect().top;
      const offsetPosition = elemRect - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  // Mapping string IDs to beautiful Lucide React elements for dynamic feature cards
  const getFeatureIcon = (id: string) => {
    switch(id) {
      case 'feature-1': return <Compass className="w-6 h-6 text-brand-gold" />;
      case 'feature-2': return <Train className="w-6 h-6 text-brand-gold" />;
      case 'feature-3': return <Briefcase className="w-6 h-6 text-brand-gold" />;
      case 'feature-4': return <ShoppingBag className="w-6 h-6 text-brand-gold" />;
      case 'feature-5': return <Sparkles className="w-6 h-6 text-brand-gold" />;
      case 'feature-6': return <Trees className="w-6 h-6 text-brand-gold" />;
      default: return <Building2 className="w-6 h-6 text-brand-gold" />;
    }
  };

  const getFacilityIcon = (cat: string) => {
    switch(cat.toLowerCase()) {
      case 'aqua': return <Waves className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />;
      case 'wellness': return <Dumbbell className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />;
      case 'nature': return <Trees className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />;
      case 'social': return <Sparkles className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />;
      case 'sports': return <Dumbbell className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />;
      default: return <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />;
    }
  };



  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal overflow-x-hidden selection:bg-brand-gold selection:text-brand-charcoal animate-fade-in relative">
      
      {/* 1. SEO Rich Schemas Injections */}
      <SchemaInjector />

      {/* 2. Fixed Header */}
      <Header whatsappUrl={whatsappUrl} />

      {/* 3. HERO SECTION (Headline in front of 50% Black Shaded Background Image) */}
      <section 
        id="home" 
        className="relative min-h-[82vh] sm:min-h-[88vh] flex flex-col justify-center overflow-hidden bg-black text-white pt-28 pb-16"
      >
        {/* Full-bleed Architectural Hero Background Image */}
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src="https://drive.google.com/thumbnail?id=1qJ_Bu8qIc_7_t17PtagWdRqDChP50AHp&sz=w1600" 
            alt="Khaya Residences Architectural Landmark View"
            className="w-full h-full object-cover object-bottom scale-102 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Solid Pure Black Shader Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        </div>

        {/* Hero Headline Content in Front */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            {/* Eyebrow Tag */}
            <span className="text-xs sm:text-sm uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3 drop-shadow-sm">
              Now Open For Exclusive Preview
            </span>

            {/* Main Headline - White Typography */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-light text-white leading-[1.1] drop-shadow-md">
              <span className="text-white">Khaya</span> <span className="font-serif italic font-normal text-white">Residences</span>
            </h1>

            <p className="font-serif italic text-lg sm:text-2xl text-stone-100 mt-2 font-light tracking-wide drop-shadow-xs">
              Jalan Bangsar · Kuala Lumpur
            </p>

            <p className="text-sm sm:text-base max-w-2xl mx-auto mt-5 text-stone-100 leading-relaxed font-sans font-light drop-shadow-xs">
              An iconic 61-storey architectural landmark positioned along Jalan Bangsar. Experience seamless LRT transit connectivity, 40+ resort lifestyle amenities, and breathtaking panoramic city vistas.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  const el = document.getElementById('overview');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="btn-solid bg-brand-gold text-brand-charcoal border border-brand-gold hover:bg-white hover:border-white hover:text-brand-charcoal px-8 py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 w-full sm:w-auto cursor-pointer shadow-md"
              >
                EXPLORE DETAILS
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal px-8 py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-2 backdrop-blur-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP INQUIRY</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3.5 KEY SPECIFICATIONS STRIP SECTION */}
      <section className="bg-brand-white border-y border-stone-300/80 py-8 transition-all shadow-xs relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-stone-200 text-center"
          >
            <div className="p-3 sm:p-4 flex flex-col justify-center">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light block leading-none">
                61
              </span>
              <span className="text-xs text-slate-800 font-sans tracking-[0.2em] uppercase block mt-2 font-medium">
                Storeys Tall
              </span>
            </div>

            <div className="p-3 sm:p-4 flex flex-col justify-center">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light block leading-none">
                0.4 km
              </span>
              <span className="text-xs text-slate-800 font-sans tracking-[0.2em] uppercase block mt-2 font-medium">
                To LRT / KTM Hub
              </span>
            </div>

            <div className="p-3 sm:p-4 flex flex-col justify-center">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light block leading-none">
                40+
              </span>
              <span className="text-xs text-slate-800 font-sans tracking-[0.2em] uppercase block mt-2 font-medium">
                Resort Facilities
              </span>
            </div>

            <div className="p-3 sm:p-4 flex flex-col justify-center">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light block leading-none">
                Q2 2029
              </span>
              <span className="text-xs text-slate-800 font-sans tracking-[0.2em] uppercase block mt-2 font-medium">
                Completion
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. DETAILS / SPECS OVERVIEW SECTION */}
      <section id="overview" className="py-20 sm:py-28 bg-brand-bg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Column 1 (Left): Project narrative copy */}
            <div className="lg:col-span-4 flex flex-col justify-between text-left bg-brand-white p-6 sm:p-10 border border-stone-300/60 shadow-xs">
              <div>
                <span className="text-xs uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3">
                  Urban Sanctuary
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal tracking-tight leading-tight font-light">
                  An Elegant Respite On Jalan Bangsar
                </h2>
                <div className="w-12 h-px bg-brand-gold my-6" />
                
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-light">
                  Khaya Residences is strategically positioned within Jalan Bangsar, connecting Bangsar, Mid Valley and KL Sentral. The project is designed to support modern urban lifestyles with convenient access to transportation, commercial hubs and lifestyle amenities.
                </p>

                <p className="text-xs sm:text-sm text-slate-800 mt-4 leading-relaxed font-sans font-light">
                  Developed in synergy, the design philosophy emphasizes natural ventilation corridors, a grand entry foyer, and bespoke visual spaces featuring curated community convenience outlets right at the base block.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-300/60">
                <a
                  href="#contact"
                  className="btn-solid bg-brand-charcoal text-brand-white border border-brand-charcoal hover:bg-transparent hover:text-brand-charcoal w-full py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center"
                >
                  REGISTER INTEREST
                </a>
              </div>
            </div>

            {/* Column 2 (Center): Facade Image */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="relative group overflow-hidden border border-stone-300/60 bg-[#F8F5F0] aspect-[4/5] sm:aspect-auto sm:h-full min-h-[350px]">
                <img 
                  src="https://drive.google.com/thumbnail?id=15uAp2Za2-FIe1s7RYEX3IYpg1UPpN1DN&sz=w1200" 
                  alt="Khaya Residences Tower Facade" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 bg-brand-charcoal text-brand-white text-[9px] tracking-[0.24em] uppercase py-1.5 px-3 font-light border border-stone-300/40">
                  Architectural Facade
                </span>
              </div>
            </div>

            {/* Column 3 (Right): Technical Spec table */}
            <div className="lg:col-span-4">
              <SpecificationsTable />
            </div>

          </div>

        </div>
      </section>

      {/* 5. KEY FEATURES SECTION */}
      <section id="features" className="py-20 sm:py-28 bg-brand-bg transition-all border-y border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3">
              Design Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-charcoal tracking-tight font-light">
              Distinguishing Features
            </h2>
            <p className="text-sm sm:text-base text-slate-800 mt-4 leading-relaxed font-sans font-light max-w-xl mx-auto">
              Discover the core advantages defining Khaya Residences as a premier urban address.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {KEY_FEATURES.map((feat) => (
              <div 
                key={feat.id}
                className="p-8 bg-brand-white border border-stone-300/60 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="mb-6">
                    {getFeatureIcon(feat.id)}
                  </div>
                  <h3 className="font-serif text-2xl text-brand-charcoal font-light">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 mt-3 leading-relaxed font-sans font-light">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-stone-300/60 text-[10px] tracking-[0.24em] text-brand-gold font-medium uppercase">
                  METROPOLITAN ASSET
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3D 360° VIRTUAL TOUR SECTION */}
      <section id="virtual-tour" className="py-20 sm:py-28 bg-brand-charcoal text-white relative overflow-hidden transition-all border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3">
              Immersive Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight font-light">
              360° Virtual Experience
            </h2>
            <p className="text-sm sm:text-base text-stone-200 mt-4 leading-relaxed font-sans font-light max-w-xl mx-auto">
              Step inside Khaya Residences through our interactive 360-degree tour. Explore the design and spaces virtually.
            </p>
          </div>

          {/* Interactive Virtual Tour Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative border border-stone-800 bg-brand-charcoal group"
          >
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] md:h-[600px] bg-black">
              <iframe
                src="https://virtualtour.my/melati-ehsan-group/khaya-residences/vr360"
                title="Khaya Residences Bangsar 360 Virtual Tour"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
                allow="gyroscope; accelerometer; xr-spatial-tracking"
              />
            </div>

            <div className="bg-brand-charcoal px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
              <div className="flex items-center space-x-3 text-left">
                <Compass className="w-5 h-5 text-brand-gold" />
                <div>
                  <span className="text-xs font-serif text-white block">
                    Interactive Virtual Exploration
                  </span>
                  <span className="text-[10px] text-stone-300 font-light block mt-0.5">
                    Drag on display to rotate, click hotspots to navigate.
                  </span>
                </div>
              </div>

              <a
                href="https://virtualtour.my/melati-ehsan-group/khaya-residences/vr360"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border border-stone-700 text-stone-200 hover:border-brand-gold hover:text-brand-gold px-5 py-2.5 text-xs tracking-[0.24em] uppercase transition-colors flex items-center space-x-2"
              >
                <span>Fullscreen View</span>
                <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. LOCATION CONTAINER */}
      <section id="location" className="py-20 sm:py-28 bg-brand-bg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3">
              Location
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-charcoal tracking-tight font-light">
              Connected Address
            </h2>
            <p className="text-sm sm:text-base text-slate-800 mt-4 leading-relaxed font-sans font-light max-w-xl mx-auto">
              Enjoy direct walking proximity to LRT pathways and immediate entries toward PJ or KL CBD.
            </p>
          </div>

          <MapContainer />

        </div>
      </section>

      {/* 7. LAYOUTS */}
      <LayoutsSection onSelectLayout={handleSelectLayout} />

      {/* 8. FACILITIES */}
      <FacilitiesSection />

      {/* 9. GALLERY */}
      <GallerySection />

      {/* 10. FAQS */}
      <FAQsSection />

      {/* 12. CONTACT */}
      <section id="contact" className="py-20 sm:py-28 bg-brand-bg transition-all border-t border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3">
                  Get In Touch
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal tracking-tight leading-tight font-light">
                  Enquire Today
                </h2>
                <div className="w-12 h-px bg-brand-gold my-6" />
                
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-light">
                  Have questions about Khaya Residences? Submit your enquiry and an IQI Realty representative will respond to you shortly with full project details and floor plans.
                </p>

                {/* Agency Badge Card */}
                <div className="bg-brand-white p-6 border border-stone-300/60 my-8 shadow-xs">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-brand-gold font-medium mb-2">
                    Marketing Agency
                  </div>
                  <h4 className="font-serif text-xl text-brand-charcoal font-light">
                    IQI REALTY SDN. BHD.
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-slate-700 block mt-1 font-mono">
                    Code: 1113417U / 201401037274 (E (1) 1584)
                  </span>
                </div>

                <div className="space-y-3">
                  <a 
                    href="tel:+60108278932"
                    className="flex items-center space-x-3 p-4 bg-brand-white border border-stone-300/60 hover:border-brand-charcoal transition-colors text-xs tracking-wider text-brand-charcoal font-medium"
                  >
                    <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>010-8278932</span>
                  </a>
                  <a 
                    href="mailto:shyanyeews@gmail.com"
                    className="flex items-center space-x-3 p-4 bg-brand-white border border-stone-300/60 hover:border-brand-charcoal transition-colors text-xs tracking-wider text-brand-charcoal font-medium break-all"
                  >
                    <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>shyanyeews@gmail.com</span>
                  </a>
                </div>

              </div>

              <div className="mt-8 p-4 bg-[#F8F5F0] border border-stone-300/60 text-xs text-slate-800 leading-relaxed font-sans font-light">
                <strong className="font-medium text-brand-charcoal">Disclaimer Compliance:</strong> This website is privately managed under registered license REN 46305. It does not constitute the official portal representing Melati Ehsan Group or Tenaga Nasional Berhad. All images represent conceptual rendering artistry and information is subject to alteration without notice.
              </div>

            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-7">
              <ContactForm 
                layoutSelection={selectedLayoutForInquiry} 
                onSuccess={() => setSelectedLayoutForInquiry('')} 
              />
            </div>

          </div>

        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-brand-charcoal text-brand-white pt-16 pb-8 border-t border-stone-800 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-stone-800 pb-12 mb-10">
            
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://drive.google.com/thumbnail?id=18qdXyQJ2ywPyrZ79Me_KgOK2S-9bIvK0&sz=w200" 
                  alt="Khaya Residences Logo" 
                  className="w-10 h-10 rounded-full object-cover border border-stone-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-serif text-lg tracking-widest text-brand-gold block font-light leading-none">
                    KHAYA
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.25em] text-stone-400 block mt-1 leading-none">
                    RESIDENCES BANGSAR
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed font-sans font-light">
                A premium architectural high-rise connecting Bangsar and KL Eco City. Providing walking proximity tunnels supporting 40+ dynamic lifestyle amenities.
              </p>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.24em] font-medium text-brand-gold">
                Directories
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Overview', id: 'overview' },
                  { label: 'Location', id: 'location' },
                  { label: 'Floor Layouts', id: 'layouts' },
                  { label: 'Facilities', id: 'facilities' },
                  { label: 'Gallery', id: 'gallery' },
                  { label: 'FAQs', id: 'faq' }
                ].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="text-xs text-stone-400 hover:text-brand-gold transition-colors text-left font-sans font-light block"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.24em] font-medium text-brand-gold">
                Advisory Credentials
              </h4>
              <div className="text-xs text-stone-400 space-y-2 leading-relaxed font-light">
                <p><strong>Agency:</strong> IQI REALTY SDN. BHD. (1113417U / 201401037274)</p>
                <p><strong>Licensing:</strong> Shyan Yee (REN 46305)</p>
                <p><strong>Contact:</strong> +6010-8278932</p>
                <p><strong>Email:</strong> shyanyeews@gmail.com</p>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 py-4 text-xs text-stone-400 font-light">
            <button 
              onClick={() => setActiveLegalModal('disclaimer')} 
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
            <span className="text-stone-700 hidden sm:inline">•</span>
            <button 
              onClick={() => setActiveLegalModal('privacy')} 
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-stone-700 hidden sm:inline">•</span>
            <button 
              onClick={() => setActiveLegalModal('terms')} 
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>

          {/* Legal Modal */}
          <AnimatePresence>
            {activeLegalModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveLegalModal(null)}
                  className="fixed inset-0 bg-brand-charcoal/80 backdrop-blur-xs"
                />
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="relative bg-brand-white text-brand-charcoal w-full max-w-lg p-8 border border-stone-300 z-10 text-left shadow-2xl"
                >
                  <button 
                    onClick={() => setActiveLegalModal(null)}
                    className="absolute top-4 right-4 text-brand-charcoal hover:text-brand-gold text-xl font-light cursor-pointer"
                  >
                    ✕
                  </button>
                  
                  {activeLegalModal === 'disclaimer' && (
                    <div>
                      <h4 className="font-serif text-2xl font-light mb-4">
                        Project Disclaimer
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans font-light">
                        This showcase is privately managed and updated by Shyan Yee (REN 46305) under the marketing registration of IQI REALTY SDN. BHD. (1113417U / 201401037274). It is NOT the official corporate portal of Melati Ehsan Group or Tenaga Nasional Berhad (TNB).
                      </p>
                    </div>
                  )}

                  {activeLegalModal === 'privacy' && (
                    <div>
                      <h4 className="font-serif text-2xl font-light mb-4">
                        Privacy Policy
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans font-light">
                        Your data security is of paramount importance. Any particulars supplied through our consultation request form are processed strictly to share project details, send digital brochures, or arrange physical site presentation briefings for Khaya Residences Bangsar.
                      </p>
                    </div>
                  )}

                  {activeLegalModal === 'terms' && (
                    <div>
                      <h4 className="font-serif text-2xl font-light mb-4">
                        Terms & Conditions
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans font-light">
                        By submitting your details via our consultation portals on this landing page, you grant express consent to be contacted directly by Shyan Yee (REN 46305) or IQI REALTY SDN. BHD. representatives regarding registration of interest, previews, and unit availability updates for Khaya Residences.
                      </p>
                    </div>
                  )}

                  <div className="mt-8 pt-4 border-t border-stone-300/60 text-right">
                    <button 
                      onClick={() => setActiveLegalModal(null)}
                      className="bg-brand-charcoal text-brand-white hover:bg-brand-gold py-2.5 px-6 text-xs tracking-[0.24em] uppercase transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <div className="mt-8 pt-4 border-t border-stone-800 text-center flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-400 font-light">
            <p>Copyright © {currentYear} Shyan Yee. All Rights Reserved.</p>
            <p className="tracking-widest uppercase text-[10px] font-mono text-brand-gold mt-1 md:mt-0">
              REN 46305 · IQI REALTY SDN. BHD.
            </p>
          </div>

        </div>
      </footer>

      {/* 14. FLOATING CTA WIDGETS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-2.5">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollToTop}
              className="w-10 h-10 bg-brand-charcoal text-brand-gold hover:text-brand-white border border-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-brand-gold text-brand-charcoal flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg"
          title="Consult directly over WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-brand-charcoal/20" />
        </a>
      </div>

    </div>
  );
}

