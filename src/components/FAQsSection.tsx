import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/projectData';
import { HelpCircle, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

export default function FAQsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const visibleFaqs = showAll ? FAQS : FAQS.slice(0, 3);

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-brand-bg transition-all border-t border-stone-300/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.38em] font-medium text-brand-gold block mb-3">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-charcoal tracking-tight font-light">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-4 leading-relaxed font-sans font-light max-w-xl mx-auto">
            Find immediate details regarding tenure, timeline, developer background, layouts, and amenities.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4" id="faq-accordion-container">
          <AnimatePresence initial={false}>
            {visibleFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-brand-white border-brand-charcoal shadow-xs' 
                      : 'bg-brand-white border-stone-300/60 hover:border-brand-charcoal/60'
                  }`}
                  id={`faq-card-${faq.id}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                    id={`faq-btn-${faq.id}`}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4 pr-4">
                      <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                        isOpen ? 'text-brand-gold' : 'text-slate-400 group-hover:text-brand-gold'
                      }`} />
                      <span className="font-serif text-base sm:text-lg text-brand-charcoal font-light leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`p-1.5 transition-transform duration-300 ${
                      isOpen ? 'bg-brand-gold/10 text-brand-gold rotate-180' : 'bg-stone-100 text-slate-600 group-hover:bg-brand-gold/10 group-hover:text-brand-gold'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  {/* Smooth dynamic answer expansion */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-5 sm:p-6 pt-0 border-t border-stone-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-light">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Trigger Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-solid inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-charcoal hover:bg-brand-gold text-brand-white hover:text-brand-charcoal text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-xs cursor-pointer border border-brand-charcoal"
            id="faq-toggle-more-btn"
          >
            <span>{showAll ? 'Show Fewer Questions' : 'See More Questions'}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
}
