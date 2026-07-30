import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, User, Globe, MessageSquare, CheckCircle, ShieldCheck, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  layoutSelection?: string;
  onSuccess: () => void;
}

export default function ContactForm({ layoutSelection = '', onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'Malaysia',
    message: layoutSelection 
      ? `Hi, I would like to request more details, layout plans, and pricing estimations for ${layoutSelection} of Khaya Residences Bangsar.` 
      : '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [verificationProgress, setVerificationProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (layoutSelection) {
      setFormData(prev => ({
        ...prev,
        message: `Hi, I would like to request more details, layout plans, and pricing estimations for ${layoutSelection} of Khaya Residences Bangsar.`
      }));
    }
  }, [layoutSelection]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const startDrag = () => {
    setIsDragging(true);
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || verificationSuccess || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const touch = 'touches' in e && e.touches && e.touches.length > 0 ? e.touches[0] : null;
    const clientX = touch ? touch.clientX : (e as React.MouseEvent).clientX;
    const offset = clientX - rect.left;
    const percentage = Math.min(Math.max(Math.round((offset / rect.width) * 100), 0), 100);

    setVerificationProgress(percentage);

    if (percentage >= 98) {
      setVerificationSuccess(true);
      setVerificationProgress(100);
      setIsDragging(false);
    }
  };

  const stopDrag = () => {
    if (verificationSuccess) return;
    setIsDragging(false);
    setVerificationProgress(0);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail address is required';
    }

    if (!verificationSuccess) {
      newErrors.verification = 'Please slide to verify';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;
    if (!validateForm()) return;

    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/shyanyeews@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        Country: formData.country,
        Message: formData.message,
        _subject: `[KHAYA RESIDENCES] New Enquiry from ${formData.name}`,
        _honey: formData.honeypot
      })
    })
    .then(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        country: 'Malaysia',
        message: '',
        honeypot: '',
      });
      setVerificationSuccess(false);
      setVerificationProgress(0);
      onSuccess();
    })
    .catch(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    });
  };

  return (
    <div className="bg-brand-white p-6 sm:p-10 border border-stone-300/60 shadow-xs">
      
      <div className="mb-8">
        <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-medium block">
          Registration of Interest
        </span>
        <h3 className="font-serif text-3xl text-brand-charcoal mt-1 font-light">
          Register Your Interest
        </h3>
        <p className="text-xs sm:text-sm text-slate-800 mt-2 font-sans font-light leading-relaxed">
          Fill out the form below to receive full project pricing, floor plans, and showroom preview arrangements.
        </p>
      </div>

      <form 
        onSubmit={handleSubmit} 
        onMouseMove={handleDrag} 
        onMouseUp={stopDrag} 
        onTouchMove={handleDrag} 
        onTouchEnd={stopDrag}
        className="space-y-6"
        noValidate
      >
        <input 
          type="text" 
          name="honeypot" 
          value={formData.honeypot} 
          onChange={handleInputChange} 
          className="hidden" 
          tabIndex={-1} 
          autoComplete="off" 
        />

        {/* Name input */}
        <div className="relative">
          <label htmlFor="name" className="text-xs tracking-[0.24em] font-medium text-slate-800 uppercase block mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Jean Smith"
            className="w-full bg-transparent border-b border-stone-300/80 py-2.5 text-sm text-stone-900 font-medium transition-colors focus:border-brand-charcoal focus:outline-none"
          />
          {errors.name && (
            <span className="text-[10px] text-red-500 font-normal mt-1 block">
              {errors.name}
            </span>
          )}
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="text-xs tracking-[0.24em] font-medium text-slate-800 uppercase block mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+60 12-345 6789"
              className="w-full bg-transparent border-b border-stone-300/80 py-2.5 text-sm text-stone-900 font-medium transition-colors focus:border-brand-charcoal focus:outline-none"
            />
            {errors.phone && (
              <span className="text-[10px] text-red-500 font-normal mt-1 block">
                {errors.phone}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-xs tracking-[0.24em] font-medium text-slate-800 uppercase block mb-1">
              E-mail Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="yours@example.com"
              className="w-full bg-transparent border-b border-stone-300/80 py-2.5 text-sm text-stone-900 font-medium transition-colors focus:border-brand-charcoal focus:outline-none"
            />
            {errors.email && (
              <span className="text-[10px] text-red-500 font-normal mt-1 block">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="text-xs tracking-[0.24em] font-medium text-slate-800 uppercase block mb-1">
            Country / Region
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full bg-transparent border-b border-stone-300/80 py-2.5 text-sm text-stone-900 font-medium transition-colors focus:border-brand-charcoal focus:outline-none appearance-none cursor-pointer"
          >
            <option value="Malaysia">Malaysia (+60)</option>
            <option value="Singapore">Singapore (+65)</option>
            <option value="China">China (+86)</option>
            <option value="Hong Kong">Hong Kong (+852)</option>
            <option value="Indonesia">Indonesia (+62)</option>
            <option value="United Kingdom">United Kingdom (+44)</option>
            <option value="United States">United States (+1)</option>
            <option value="Australia">Australia (+61)</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="text-xs tracking-[0.24em] font-medium text-slate-800 uppercase block mb-1">
            Inquiry Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Specify your interest (e.g. Layout preference, investment query, or showroom appointment)..."
            className="w-full bg-transparent border-b border-stone-300/80 py-2 text-sm text-stone-900 font-medium transition-colors focus:border-brand-charcoal focus:outline-none resize-none"
          />
        </div>

        {/* Slide Verify */}
        <div className="pt-2">
          <label className="text-[10px] tracking-[0.24em] font-medium text-slate-700 uppercase block mb-2 flex items-center justify-between">
            <span>Human Verification</span>
            {verificationSuccess ? (
              <span className="text-emerald-700 font-medium">VERIFIED</span>
            ) : (
              <span className="text-brand-gold font-medium">SLIDE TO AUTHORIZE</span>
            )}
          </label>
          
          <div 
            ref={sliderRef}
            className={`relative h-11 w-full flex items-center justify-center overflow-hidden border transition-all ${
              verificationSuccess 
                ? 'bg-emerald-50 border-emerald-300' 
                : 'bg-[#F8F5F0] border-stone-300/80'
            }`}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            <div 
              className="absolute left-0 top-0 bottom-0 bg-brand-gold/30 transition-all pointer-events-none"
              style={{ width: `${verificationProgress}%` }}
            />

            {!verificationSuccess && (
              <div 
                className="absolute left-1 top-1 bottom-1 aspect-square bg-brand-charcoal text-brand-white flex items-center justify-center cursor-ew-resize shadow-xs transition-colors z-10 text-xs"
                style={{ left: `calc(${verificationProgress}% - ${verificationProgress * 0.44}px)` }}
              >
                ➔
              </div>
            )}

            <span className="text-[10px] font-sans tracking-wider uppercase text-slate-700 select-none">
              {verificationSuccess ? 'Verification Passed' : 'Slide right to verify'}
            </span>
          </div>
          {errors.verification && (
            <span className="text-[10px] text-red-500 font-normal mt-1 block">
              {errors.verification}
            </span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-solid w-full bg-brand-charcoal text-brand-white border border-brand-charcoal py-4 text-xs tracking-[0.28em] uppercase transition-all duration-300 hover:bg-transparent hover:text-brand-charcoal cursor-pointer"
        >
          {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REGISTRATION'}
        </button>

      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] bg-brand-charcoal/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-md w-full bg-brand-white border border-stone-300 p-8 text-center shadow-2xl">
            <h3 className="font-serif text-3xl text-brand-charcoal font-light">
              Registration Received
            </h3>
            <p className="text-xs text-slate-700 mt-3 leading-relaxed font-sans font-light">
              Thank you for inquiring. An official project information pack has been logged for Shyan Yee (REN 46305) to review and contact you shortly.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-brand-charcoal hover:bg-brand-gold text-brand-white py-3 px-8 text-xs tracking-[0.24em] uppercase transition-colors w-full mt-6 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

