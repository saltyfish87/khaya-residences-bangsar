import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface HeaderProps {
  whatsappUrl: string;
}

export default function Header({ whatsappUrl }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'OVERVIEW', id: 'overview' },
    { label: 'KEY FEATURES', id: 'features' },
    { label: 'LOCATION', id: 'location' },
    { label: 'LAYOUTS', id: 'layouts' },
    { label: 'FACILITIES', id: 'facilities' },
    { label: 'GALLERY', id: 'gallery' },
    { label: 'CONTACT', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-brand-charcoal/95 backdrop-blur-md border-[#D4AF37]/15 py-3 shadow-md' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Beautiful Google Drive Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <img 
              src="https://drive.google.com/thumbnail?id=18qdXyQJ2ywPyrZ79Me_KgOK2S-9bIvK0&sz=w200" 
              alt="Khaya Residences Logo" 
              className="w-10 h-10 rounded-full object-cover shadow-md border border-brand-gold/40 transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-serif text-lg tracking-widest block font-bold leading-none transition-colors duration-300 text-white">
                KHAYA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] block mt-1 leading-none font-bold transition-colors duration-300 text-brand-gold">
                RESIDENCES BANGSAR
              </span>
            </div>
          </div>
 
          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-widest transition-all duration-300 relative uppercase ${
                  activeSection === item.id 
                    ? 'text-brand-gold bg-slate-950/30' 
                    : 'text-slate-200 hover:text-brand-gold hover:bg-white/10'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-gold" />
                )}
              </button>
            ))}
          </nav>
 
          {/* Mobile Hamburger button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl focus:outline-none transition-colors text-white hover:text-brand-gold hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
 
        </div>
      </div>
 
      {/* Mobile Drawer menu */}
      <div 
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-brand-charcoal/98 backdrop-blur-md border-l border-[#D4AF37]/15 z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="px-5 py-6 space-y-3 flex flex-col h-full bg-brand-charcoal">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left py-3.5 border-b border-slate-800 text-xs font-bold tracking-widest transition-all uppercase ${
                activeSection === item.id 
                  ? 'text-brand-gold pl-2 border-brand-gold/40' 
                  : 'text-slate-300 hover:text-white hover:pl-2'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-6 mt-auto">
            <div className="text-[10px] text-slate-400 text-center pt-2 leading-relaxed font-sans font-medium">
              Shyan Yee · REN 46305 · IQI REALTY SDN. BHD. (1113417U / 201401037274)
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
