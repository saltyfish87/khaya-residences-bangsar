import { SPECIFICATIONS } from '../data/projectData';
import { Landmark, ShieldAlert } from 'lucide-react';

export default function SpecificationsTable() {
  return (
    <div className="bg-white rounded-2xl border border-brand-gold/15 p-6 sm:p-8 shadow-xs">
      <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-brand-gold/10">
        <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold">
          <Landmark className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif text-base text-slate-800 tracking-wide font-bold">
            Technical Details
          </h4>
        </div>
      </div>

      <div className="flex flex-col divide-y divide-brand-gold/10">
        {SPECIFICATIONS.map((spec, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-3"
          >
            <span className="text-[10px] tracking-wider uppercase text-slate-500 font-bold font-sans">
              {spec.label}
            </span>
            <span className="text-xs font-bold text-slate-800 text-right">
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-brand-gold/15 flex items-start space-x-2.5 text-[10px] text-slate-600 leading-normal">
        <ShieldAlert className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-800">Transparency:</strong> Details checked against the master plan submitting filings for Khaya Residences. Land governed by TNB leasehold agreements under Melati Ehsan Group orchestration.
        </p>
      </div>
    </div>
  );
}
