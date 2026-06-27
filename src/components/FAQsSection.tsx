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
    <section id="faqs" className="py-20 sm:py-24 bg-slate-50 transition-all border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] tracking-widest font-extrabold text-brand-gold uppercase block mb-3">
            HAVE QUESTIONS?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-sans">
            Find immediate answers about the tenure, estimated completion date, developer details, layouts, and premium amenities of Khaya Residences Bangsar.
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
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-white border-brand-gold/40 shadow-sm' 
                      : 'bg-white border-slate-100 hover:border-brand-gold/30'
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
                      <span className="font-serif text-sm sm:text-base text-slate-900 font-bold leading-relaxed">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`p-1.5 rounded-lg transition-transform duration-300 ${
                      isOpen ? 'bg-brand-gold/10 text-brand-gold rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-gold/10 group-hover:text-brand-gold'
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
                    <div className="p-5 sm:p-6 pt-0 border-t border-slate-50 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
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
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-brand-gold text-white hover:text-slate-900 font-extrabold text-[10px] tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
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
