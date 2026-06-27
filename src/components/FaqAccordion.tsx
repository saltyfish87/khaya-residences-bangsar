import { useState } from 'react';
import { FAQS } from '../data/projectData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div 
            key={faq.id}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen 
                ? 'bg-brand-white border-brand-gold/40 shadow-xs' 
                : 'bg-brand-white border-brand-gold/15 hover:border-brand-gold/30'
            }`}
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer group"
              aria-expanded={isOpen}
            >
              <div className="flex items-start space-x-3 pr-4">
                <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                  isOpen ? 'text-brand-gold' : 'text-slate-400 group-hover:text-brand-gold/80'
                }`} />
                <span className="font-serif text-sm md:text-base text-slate-900 font-bold leading-relaxed">
                  {faq.question}
                </span>
              </div>
              <div className={`p-1.5 rounded-lg transition-transform duration-300 ${
                isOpen ? 'bg-brand-gold/10 text-brand-gold rotate-180' : 'bg-brand-cream text-slate-500 group-hover:bg-brand-gold/10'
              }`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            
            {/* Animated content expansion */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 border-t border-brand-gold/10 text-xs md:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
