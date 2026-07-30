import { SPECIFICATIONS } from '../data/projectData';

export default function SpecificationsTable() {
  return (
    <div className="bg-brand-white p-6 sm:p-8 border border-stone-300/60 shadow-xs">
      <div className="mb-6 pb-4 border-b border-stone-300/60">
        <span className="text-[10px] tracking-[0.35em] uppercase text-brand-gold font-medium block">
          Project Essentials
        </span>
        <h3 className="font-serif text-xl text-brand-charcoal mt-1 font-light">
          Key Specifications
        </h3>
      </div>

      <ul className="divide-y divide-stone-300/60 text-sm">
        {SPECIFICATIONS.map((spec, index) => (
          <li 
            key={index} 
            className="flex items-center justify-between py-3.5 gap-4"
          >
            <span className="text-xs uppercase tracking-wider text-slate-800 font-medium font-sans">
              {spec.label}
            </span>
            <span className="font-serif text-base font-normal text-brand-charcoal text-right">
              {spec.value}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-stone-300/60 text-xs text-slate-800 leading-relaxed font-sans font-light">
        <span className="text-brand-gold font-medium">Notice:</span> Details verified against master plan filings for Khaya Residences Bangsar under Melati Ehsan Group orchestration.
      </div>
    </div>
  );
}

