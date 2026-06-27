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
import { KEY_FEATURES, FACILITIES } from './data/projectData';

// Cleaned up imports

export default function App() {
  const [selectedLayoutForInquiry, setSelectedLayoutForInquiry] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  const whatsappUrl = "https://wa.me/60195598932?text=[KHAYA]%20Hi,%20I%20would%20like%20to%20know%20more%20about%20Khaya%20Residences%20Bangsar.";

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
    canonical.setAttribute('href', 'https://khaya-residence.my');

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

      {/* 2. Fixed Headers */}
      <Header whatsappUrl={whatsappUrl} />

      {/* 3. HERO SECTION (Full Height Immersive Cinematic Display) */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white"
      >
        {/* Parallax Slow Zoom Architectural Background - Bright and Visible */}
        <div className="absolute inset-0 z-0 select-none">
          <motion.div 
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 8, ease: 'easeOut' }}
            className="w-full h-full animate-hero-background"
          >
            <img 
              src="https://drive.google.com/thumbnail?id=1qJ_Bu8qIc_7_t17PtagWdRqDChP50AHp&sz=w1600" 
              alt="Khaya Residences Contemporary Architectural Landmark View"
              className="w-full h-full object-cover object-bottom opacity-100"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Elegant high-contrast uniform dark overlay to ensure perfect text readability */}
          <div className="absolute inset-0 bg-slate-950/75 z-10" />
          
          {/* Subtle white-to-transparent overlay gradient at the bottom for smooth transition to the white overview section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/30 to-transparent z-15 pointer-events-none" />
        </div>

        {/* Hero Content Display - Transparent elegant typography over background */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="max-w-4xl mx-auto text-white"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-brand-gold bg-slate-950/80 border border-brand-gold/30 px-5 py-2.5 rounded-full inline-block shadow-lg hero-text-shadow-sub">
              NOW OPEN FOR EXCLUSIVE PREVIEW
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-bold leading-tight text-white mt-8 hero-text-shadow-heading">
              Khaya Residences Bangsar
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-6 text-slate-100 leading-relaxed font-sans font-light tracking-wide hero-text-shadow-sub">
              A thoughtfully designed architectural landmark positioned within one of Kuala Lumpur's most established urban corridors, offering seamless transit connections, luxury facilities, and iconic panoramic views.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <button
                onClick={() => {
                  const el = document.getElementById('overview');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-white hover:bg-brand-gold text-slate-950 hover:text-slate-950 font-extrabold px-8 py-4 rounded-xl text-xs tracking-widest uppercase transition-all duration-300 w-full sm:w-auto shadow-lg cursor-pointer"
              >
                EXPLORE DETAILS
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold hover:bg-white text-slate-950 hover:text-slate-950 font-extrabold px-8 py-4 rounded-xl text-xs tracking-widest uppercase transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP INQUIRY</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <div className="flex flex-col items-center space-y-2 opacity-80 animate-bounce">
            <span className="text-[9px] tracking-[0.2em] text-slate-200 uppercase font-extrabold font-sans drop-shadow-md">
              SCROLL DOWN TO EXPLORE
            </span>
            <div className="w-1.5 h-3 bg-brand-gold rounded-full" />
          </div>
        </div>

      </section>

      {/* 4. DETAILS / SPECS OVERVIEW SECTION (3-Column Layout: Narrative, Facade Image, Specs Table) */}
      <section id="overview" className="py-20 sm:py-24 bg-brand-bg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Column 1 (Left): Project narrative copy */}
            <div className="lg:col-span-4 flex flex-col justify-between text-left bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/85 shadow-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-md inline-block">
                  Urban Enclave Overview
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 mt-5 tracking-tight leading-tight font-extrabold">
                  An Elegant Respite On Jalan Bangsar
                </h2>
                <div className="w-12 h-0.5 bg-brand-gold my-5" />
                
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                  Khaya Residences is strategically positioned within Jalan Bangsar, connecting Bangsar, Mid Valley and KL Sentral. The project is designed to support modern urban lifestyles with convenient access to transportation, commercial hubs and lifestyle amenities.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 mt-4 leading-relaxed font-sans font-medium">
                  Developed in synergy, the design philosophy emphasizes natural ventilation corridors, a grand triple-height entry foyer, and bespoke visual spaces featuring approximately 15,000 square feet of curated community convenience outlets centered right at the base block.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="bg-slate-900 hover:bg-brand-gold text-white hover:text-slate-900 w-full py-4 rounded-xl text-[10px] font-extrabold tracking-widest uppercase transition-all duration-300 flex items-center justify-center"
                >
                  REQUEST REGISTRATION DETAILS
                </a>
              </div>
            </div>

            {/* Column 2 (Center): Majestic Google Drive Facade Image */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="relative group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm aspect-[4/5] sm:aspect-auto sm:h-full min-h-[350px]">
                <img 
                  src="https://drive.google.com/thumbnail?id=15uAp2Za2-FIe1s7RYEX3IYpg1UPpN1DN&sz=w1200" 
                  alt="Khaya Residences Majestic Tower Facade" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-xs text-white text-[9px] tracking-widest uppercase py-1.5 px-3 rounded-lg font-bold border border-brand-gold/30">
                  Iconic Tower Facade Image
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
      <section id="features" className="py-20 sm:py-24 bg-brand-bg transition-all border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
              Signature Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
              Distinguishing Structural Elements
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
            <p className="text-sm sm:text-base text-slate-700 mt-5 leading-relaxed font-sans font-medium">
              Discover the core fundamental advantages defining Khaya Residences as a premier community framework and private residence choice.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KEY_FEATURES.map((feat) => (
              <div 
                key={feat.id}
                className="premium-card p-6 rounded-2xl flex flex-col justify-between shadow-xs bg-white border border-slate-100"
              >
                <div>
                  <div className="w-12 h-12 bg-brand-gold/15 rounded-xl flex items-center justify-center text-brand-gold mb-5">
                    {getFeatureIcon(feat.id)}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-slate-900 font-semibold tracking-wide">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-700 mt-3 leading-relaxed font-sans font-semibold">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[10px] tracking-wider text-brand-gold font-bold uppercase">
                  <span className="text-slate-500 font-bold">METROPOLITAN ASSET</span>
                  <Check className="w-3.5 h-3.5 text-brand-gold" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3D 360° VIRTUAL TOUR SECTION */}
      <section id="virtual-tour" className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden transition-all border-y border-slate-800">
        {/* Background decorative lights */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
              Immersive Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-4 tracking-tight leading-tight font-extrabold">
              360° Virtual Experience Tour
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
            <p className="text-sm sm:text-base text-slate-300 mt-5 leading-relaxed font-sans font-medium">
              Step inside Khaya Residences through our high-definition interactive 360-degree tour. Explore the exquisite design, premium finishes, and luxury spaces virtually from anywhere.
            </p>
          </div>

          {/* Interactive Virtual Tour Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group"
          >
            {/* Aspect ratio frame for VR 360 tour */}
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] md:h-[650px] bg-slate-950">
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

            {/* Premium Control Bar */}
            <div className="bg-slate-900/90 backdrop-blur-md px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <div className="flex items-center space-x-3 text-left">
                <div className="p-2.5 rounded-xl bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                  <Compass className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white tracking-wide block">
                    Interactive Virtual Exploration Suite
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                    Drag on the display to rotate, and click hot spots to move between luxury areas.
                  </span>
                </div>
              </div>

              <a
                href="https://virtualtour.my/melati-ehsan-group/khaya-residences/vr360"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-brand-gold hover:bg-white hover:text-slate-950 text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg cursor-pointer"
              >
                <span>Open in Fullscreen Tab</span>
                <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. LOCATION CONTAINER DIALOG (Embed Zoomable Maps) */}
      <section id="location" className="py-20 sm:py-24 bg-brand-bg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
              Urban Integration Mapping
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
              A Strategic Intersection on Jalan Bangsar
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
            <p className="text-sm sm:text-base text-slate-700 mt-5 leading-relaxed font-sans font-medium">
              Enjoy direct walking proximity to LRT pathways, immediate entries towards PJ or KL CBD, and close placement to elite landmarks.
            </p>
          </div>

          <MapContainer />

        </div>
      </section>

      {/* 7. DYNAMIC LAYOUTS VIEWER GRID (Responsive tabs and enlarger modalities) */}
      <LayoutsSection onSelectLayout={handleSelectLayout} />

      {/* 8. CURATED RESORT AMENITY ECOSYSTEM */}
      <FacilitiesSection />

      {/* 9. PORTFOLIO VISUAL GALLERY */}
      <GallerySection />



      {/* 12. IMMERSIVE CONTACT CONSULTATION & ENQUIRY REGISTRATION (Honeypot, Captcha Verify, Agent Profiles) */}
      <section id="contact" className="py-20 sm:py-24 bg-brand-bg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Col: Advisory Profile and direct phone coordinators */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left">
              <div>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
                  Get in Touch
                </h2>
                
                <div className="w-16 h-0.5 bg-brand-gold my-6" />
                
                <p className="text-sm text-slate-700 leading-relaxed font-sans font-medium">
                  Have questions about Khaya Residences? Submit your enquiry, and an IQI Realty representative will respond to you shortly with full project details and floor plans.
                </p>

                {/* Agency Badge Card */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start space-x-4 my-8">
                  {/* Circular visual placeholder with initials in primary gold branding */}
                  <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center border border-brand-gold text-brand-gold shrink-0 font-serif font-bold text-lg">
                    IQI
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-slate-900 font-bold">
                      IQI REALTY SDN. BHD.
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold block font-mono font-bold mt-1">
                      Code: 1113417U / 201401037274
                    </span>
                    <span className="text-xs text-slate-700 font-medium block mt-1">
                      Registered Real Estate Agency (E (1) 1584)
                    </span>
                  </div>
                </div>

                 <div className="space-y-3">
                  <a 
                    href="tel:+60195598932"
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-brand-gold transition-colors text-xs font-bold tracking-wider text-slate-800"
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span>DIRECT TELEPHONY: 019-5598932</span>
                  </a>
                  <a 
                    href="mailto:shyanyeews@gmail.com"
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-brand-gold transition-colors text-xs font-bold tracking-wider text-slate-800 break-all"
                  >
                    <Mail className="w-4 h-4 text-brand-gold" />
                    <span>OFFICIAL WRITE: shyanyeews@gmail.com</span>
                  </a>
                </div>

              </div>

              {/* Strict Regulatory disclaimer displayed in context */}
              <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-brand-gold/15 flex items-start space-x-3 text-[10px] text-slate-700 leading-relaxed font-sans font-medium">
                <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-800">Disclaimer Compliance:</strong> This website is privately managed under registered license REN 46305. It does not constituent the official portal representing Melati Ehsan Group or Tenaga Nasional Berhad. All images represent conceptual rendering artistry and information is subject to alteration without notices.
                </p>
              </div>

            </div>

            {/* Right Col: Compliant Form with reCAPTCHA slider */}
            <div className="lg:col-span-7">
              <ContactForm 
                layoutSelection={selectedLayoutForInquiry} 
                onSuccess={() => setSelectedLayoutForInquiry('')} 
              />
            </div>

          </div>

        </div>
      </section>

      {/* 13. REGULATORY COMPLIANCE FOOTER & QUICK LINKS */}
      <footer className="bg-brand-charcoal text-brand-white pt-16 pb-8 border-t border-brand-gold/10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-brand-white/10 pb-12 mb-10">
            
            {/* Column Left: Brand Bio tree */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://drive.google.com/thumbnail?id=18qdXyQJ2ywPyrZ79Me_KgOK2S-9bIvK0&sz=w200" 
                  alt="Khaya Residences Logo" 
                  className="w-10 h-10 rounded-full object-cover border border-brand-gold/40 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-serif text-base tracking-widest text-brand-gold block font-semibold leading-none">
                    KHAYA
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.25em] text-brand-white/50 block mt-0.5 leading-none">
                    RESIDENCES BANGSAR
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-brand-white/60 leading-relaxed font-sans font-light">
                Explore a premium designed architectural high-rise connecting Bangsar and KL Eco City. Providing walking proximity tunnels supporting 40+ dynamic lifestyle amenities.
              </p>
            </div>

            {/* Column Middle: Navigation Quick links */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold">
                Property Directories
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Overview Specifications', id: 'overview' },
                  { label: 'Proximity location', id: 'location' },
                  { label: 'Floor Layouts', id: 'layouts' },
                  { label: 'Visual Gallery', id: 'gallery' },
                  { label: 'Technical Inquiries', id: 'faq' }
                ].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="text-[11px] text-brand-white/70 hover:text-brand-gold transition-colors text-left font-sans block"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Column Right: Representing Real estate agency credentials */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold">
                Registered Broker Coordinates
              </h4>
              <div className="text-[11px] text-brand-white/70 space-y-2 leading-relaxed">
                <p><strong>Agency:</strong> IQI REALTY SDN. BHD. (1113417U / 201401037274)</p>
                <p><strong>Licensing:</strong> Shyan Yee (REN 46305)</p>
                <p><strong>Primary Contact:</strong> +6019-5598932</p>
                <p><strong>Technical Write:</strong> shyanyeews@gmail.com</p>
              </div>
              
              {/* Simple non-tracking Social Buttons mapped to requested parameters */}
              <div className="flex space-x-3 pt-1">
                {[
                  { name: 'Youtube', url: 'https://youtube.com', icon: '▶' },
                  { name: 'Facebook', url: 'https://facebook.com', icon: 'f' },
                  { name: 'Instagram', url: 'https://instagram.com', icon: '📸' }
                ].map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg bg-brand-white/5 hover:bg-brand-gold text-brand-white hover:text-brand-charcoal text-xs flex items-center justify-center transition-all"
                    title={soc.name}
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* MINIMALIST COMPLIANCE LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-t border-b border-brand-white/10 mt-6 text-xs text-brand-white/70">
            <button 
              onClick={() => setActiveLegalModal('disclaimer')} 
              className="hover:text-brand-gold transition-colors font-medium cursor-pointer"
            >
              Disclaimer
            </button>
            <span className="text-brand-white/20 hidden sm:inline">•</span>
            <button 
              onClick={() => setActiveLegalModal('privacy')} 
              className="hover:text-brand-gold transition-colors font-medium cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-brand-white/20 hidden sm:inline">•</span>
            <button 
              onClick={() => setActiveLegalModal('terms')} 
              className="hover:text-brand-gold transition-colors font-medium cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>

          {/* DYNAMIC LEADING MODAL FOR LEGAL TEXT */}
          <AnimatePresence>
            {activeLegalModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveLegalModal(null)}
                  className="fixed inset-0 bg-brand-charcoal/80 backdrop-blur-md"
                />
                
                {/* Modal Container */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1.0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative bg-white text-slate-900 w-full max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl border border-brand-gold/25 z-10 text-left"
                >
                  <button 
                    onClick={() => setActiveLegalModal(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1.5 rounded-lg transition-colors cursor-pointer text-lg font-bold"
                  >
                    ✕
                  </button>
                  
                  {activeLegalModal === 'disclaimer' && (
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-slate-900 font-bold mb-4">
                        Project Disclaimer
                      </h4>
                      <div className="w-12 h-1 bg-brand-gold mb-5" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                        This showcase is privately managed and updated by Shyan Yee (REN 46305) under the marketing registration of IQI REALTY SDN. BHD. (1113417U / 201401037274). It is NOT the official corporate portal of Melati Ehsan Group or Tenaga Nasional Berhad (TNB).
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium mt-3">
                        All materials, architectural drawings, travel approximations, and design renders shown are curated artistic concepts only. Final specifications and allotments remain subject to officially executed sale and purchase agreements.
                      </p>
                    </div>
                  )}

                  {activeLegalModal === 'privacy' && (
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-slate-900 font-bold mb-4">
                        Privacy Policy
                      </h4>
                      <div className="w-12 h-1 bg-brand-gold mb-5" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                        Your data security is of paramount importance to our advisory agency. Any particulars supplied through our consultation request form (e.g. your Name, Phone Number, and Email Address) are processed strictly to share project details, send digital brochures, or arrange physical site presentation briefings for Khaya Residences Bangsar.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium mt-3">
                        We adhere to clean privacy standards: your information is processed securely by our registered negotiator and is never distributed, transferred, or sold to third-party list brokers.
                      </p>
                    </div>
                  )}

                  {activeLegalModal === 'terms' && (
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-slate-900 font-bold mb-4">
                        Terms & Conditions
                      </h4>
                      <div className="w-12 h-1 bg-brand-gold mb-5" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                        By submitting your details via our consultation portals on this landing page, you grant express consent to be contacted directly by Shyan Yee (REN 46305) or IQI REALTY SDN. BHD. (1113417U / 201401037274) representatives via telephone, direct WhatsApp messages, or official emails regarding registration of interest, previews, and unit availability updates for Khaya Residences.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium mt-3">
                        All estimated pricing figures, layouts, and sizes advertised are indicative and subject to change by developers without prior notice.
                      </p>
                    </div>
                  )}

                  <div className="mt-8 pt-4 border-t border-slate-100 text-right">
                    <button 
                      onClick={() => setActiveLegalModal(null)}
                      className="bg-slate-900 text-white hover:bg-brand-gold hover:text-slate-950 px-5 py-2.5 rounded-lg text-xs tracking-widest uppercase transition-colors cursor-pointer font-bold"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <div className="mt-10 pt-4 border-t border-brand-white/5 text-center flex flex-col md:flex-row items-center justify-between text-[11px] text-brand-white/40 space-y-2 md:space-y-0">
            <p>Copyright © {currentYear} Shyan Yee. All Rights Reserved.</p>
            <p className="tracking-widest uppercase text-[10px] font-mono text-brand-gold">
              REN 46305 · IQI REALTY SDN. BHD. (1113417U / 201401037274)
            </p>
          </div>

        </div>
      </footer>

      {/* 14. FLOATING CTA WIDGETS (WhatsApp button & Back To Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-2.5">
        
        {/* Dynamic scroll back to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1.0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              onClick={handleScrollToTop}
              className="w-11 h-11 rounded-full bg-brand-charcoal text-brand-gold hover:text-brand-white border border-brand-gold/30 hover:border-brand-gold flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Persistent Premium gold-pulsing WhatsApp floating button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group relative relative"
          title="Consult directly over WhatsApp"
        >
          {/* Pulsing ring banner effect */}
          <span className="absolute inset-0 rounded-full bg-brand-gold/20 animate-ping" />
          <MessageSquare className="w-6 h-6 fill-brand-charcoal/20 relative z-10" />
        </a>

      </div>

    </div>
  );
}
