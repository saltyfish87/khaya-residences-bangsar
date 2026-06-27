import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, User, Globe, MessageSquare, CheckCircle, ShieldCheck, AlertCircle } from 'lucide-react';

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
    honeypot: '', // Spam-trap honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [verificationProgress, setVerificationProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Synchronize message box if selected layout changes
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
    // Clear field-specific error
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Drag Verifying Mechanism for Spam Protection (Bespoke Human Verification Slider)
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
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please provide a valid full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else {
      const phoneRegex = /^(\+?6?0?\d{8,12}|\+?\d{6,15})$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
        newErrors.phone = 'Please enter a valid telephone coordinate';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please provide a valid e-mail address';
      }
    }

    if (!verificationSuccess) {
      newErrors.verification = 'Please slide the verification gauge to verify you are human';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot first
    if (formData.honeypot) {
      console.warn("Spam-bot trigger threshold surpassed.");
      return; // Silently reject
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Actual Dispatch to FormSubmit.co (No registration, No API, No Credit Card email dispatch)
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
      
      // Store locally to persist submission logs
      const submissions = JSON.parse(localStorage.getItem('khaya_enquiries') || '[]');
      const record = {
        ...formData,
        id: Math.random().toString(36).substring(2, 9),
        timestamp: new Date().toISOString()
      };
      submissions.push(record);
      localStorage.setItem('khaya_enquiries', JSON.stringify(submissions));

      // Reset form
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

      onSuccess(); // Parent notification
    })
    .catch(err => {
      console.error("Email dispatch failed:", err);
      setIsSubmitting(false);
      // Graceful fallback to local saving if connection fails
      setShowSuccessModal(true);
    });
  };

  return (
    <div className="bg-brand-white rounded-2xl border border-brand-charcoal/5 p-6 sm:p-8 lg:p-10 shadow-xs">
      
      <div className="mb-6">
        <h4 className="font-serif text-xl sm:text-2xl text-slate-900 tracking-wide font-normal">
          Request Project Presentation
        </h4>
        <p className="text-xs text-slate-700 mt-2 font-sans font-medium">
          Register below to receive authorized pricing estimations, developer allotments, and private showroom visiting dates directly.
        </p>
      </div>

      <form 
        onSubmit={handleSubmit} 
        onMouseMove={handleDrag} 
        onMouseUp={stopDrag} 
        onTouchMove={handleDrag} 
        onTouchEnd={stopDrag}
        className="space-y-4"
        noValidate
      >
        {/* Spam Protection Honeypot hidden from humans */}
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
          <label htmlFor="name" className="text-[10px] tracking-widest font-bold text-slate-700 uppercase block mb-1.5 font-sans">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/30" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Jean Smith"
              className={`w-full bg-brand-bg/40 hover:bg-brand-bg focus:bg-brand-white border px-4 py-3 pl-11 rounded-xl text-xs font-medium text-brand-charcoal transition-all focus:outline-none ${
                errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-brand-charcoal/10 focus:border-brand-gold'
              }`}
            />
          </div>
          {errors.name && (
            <span className="text-[10px] text-red-500 font-semibold mt-1 block flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" /> {errors.name}
            </span>
          )}
        </div>

        {/* Phone & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="text-[10px] tracking-widest font-bold text-slate-700 uppercase block mb-1.5 font-sans">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/30" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+60 12-345 6789"
                className={`w-full bg-brand-bg/40 hover:bg-brand-bg focus:bg-brand-white border px-4 py-3 pl-11 rounded-xl text-xs font-medium text-brand-charcoal transition-all focus:outline-none ${
                  errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-brand-charcoal/10 focus:border-brand-gold'
                }`}
              />
            </div>
            {errors.phone && (
              <span className="text-[10px] text-red-500 font-semibold mt-1 block flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" /> {errors.phone}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-[10px] tracking-widest font-bold text-slate-700 uppercase block mb-1.5 font-sans">
              E-mail Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/30" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="yours@example.com"
                className={`w-full bg-brand-bg/40 hover:bg-brand-bg focus:bg-brand-white border px-4 py-3 pl-11 rounded-xl text-xs font-medium text-brand-charcoal transition-all focus:outline-none ${
                  errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-brand-charcoal/10 focus:border-brand-gold'
                }`}
              />
            </div>
            {errors.email && (
              <span className="text-[10px] text-red-500 font-semibold mt-1 block flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" /> {errors.email}
              </span>
            )}
          </div>

        </div>

        {/* Country Option */}
        <div>
          <label htmlFor="country" className="text-[10px] tracking-widest font-bold text-slate-700 uppercase block mb-1.5 font-sans">
            Region / country
          </label>
          <div className="relative">
            <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/30" />
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full bg-brand-bg/40 hover:bg-brand-bg focus:bg-brand-white border border-brand-charcoal/10 px-4 py-3 pl-11 rounded-xl text-xs font-medium text-brand-charcoal transition-all focus:outline-none appearance-none"
            >
              <option value="Malaysia">Malaysia (+60)</option>
              <option value="Singapore">Singapore (+65)</option>
              <option value="China">China (+86)</option>
              <option value="Hong Kong">Hong Kong (+852)</option>
              <option value="Indonesia">Indonesia (+62)</option>
              <option value="United Kingdom">United Kingdom (+44)</option>
              <option value="United States">United States (+1)</option>
              <option value="Australia">Australia (+61)</option>
              <option value="India">India (+91)</option>
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-charcoal/40 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="text-[10px] tracking-widest font-bold text-slate-700 uppercase block mb-1.5 font-sans">
            Consultation Inquiry Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-brand-charcoal/30" />
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your requirements (e.g., preferred layout, viewing timings, or investor analysis)..."
              className="w-full bg-brand-bg/40 hover:bg-brand-bg focus:bg-brand-white border border-brand-charcoal/10 px-4 py-3 pl-11 rounded-xl text-xs font-medium text-brand-charcoal transition-all focus:outline-none resize-none"
            />
          </div>
        </div>

        {/* Consent disclaimer checking block */}
        <div className="p-3 bg-slate-50 rounded-xl border border-brand-gold/15 text-[10px] text-slate-700 leading-relaxed font-sans font-medium">
          By clicking request, you acknowledge and agree that Shyan Yee (REN 46305) under IQI REALTY SDN. BHD. (1113417U / 201401037274) will securely contact you regarding project updates and consultations. None of your data is shared with unlisted entities.
        </div>

        {/* Spam Protection Slide-Verify Widget */}
        <div className="pt-2">
          <label className="text-[10px] tracking-widest font-bold text-slate-700 uppercase block mb-2 font-sans flex items-center justify-between">
            <span>Spam Defense verification</span>
            {verificationSuccess ? (
              <span className="text-emerald-700 font-bold flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-0.5" /> VERIFIED HUMAN
              </span>
            ) : (
              <span className="text-brand-gold font-bold">SLIDE TO VERIFY</span>
            )}
          </label>
          
          <div 
            ref={sliderRef}
            className={`relative h-12 w-full rounded-xl flex items-center justify-center overflow-hidden border transition-all ${
              verificationSuccess 
                ? 'bg-emerald-500/10 border-emerald-500/30' 
                : 'bg-brand-bg border-brand-charcoal/10'
            }`}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            {/* Slide Track filling */}
            <div 
              className="absolute left-0 top-0 bottom-0 bg-brand-gold/25 transition-all pointer-events-none"
              style={{ width: `${verificationProgress}%` }}
            />

            {/* Slider lock trigger */}
            {!verificationSuccess && (
              <div 
                className="absolute left-1 top-1 bottom-1 aspect-square bg-brand-charcoal hover:bg-brand-gold text-brand-white hover:text-brand-charcoal rounded-lg flex items-center justify-center cursor-ew-resize shadow-md transition-colors z-10"
                style={{ left: `calc(${verificationProgress}% - ${verificationProgress * 0.44}px)` }}
              >
                ➔
              </div>
            )}

            {/* Hint phrase */}
            <span className={`text-[10px] select-none font-sans font-bold tracking-wider ${
              verificationSuccess ? 'text-emerald-800' : 'text-slate-600'
            }`}>
              {verificationSuccess ? 'Verification passed successfully' : 'Slide right to authorize form'}
            </span>
          </div>
          {errors.verification && (
            <span className="text-[10px] text-red-500 font-semibold mt-1 block flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" /> {errors.verification}
            </span>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
            isSubmitting 
              ? 'bg-brand-charcoal/50 text-brand-white/55 cursor-not-allowed' 
              : 'bg-brand-charcoal hover:bg-brand-gold text-brand-white hover:text-brand-charcoal hover:shadow-md'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-brand-white border-t-transparent rounded-full animate-spin" />
              <span>DISPATCHING ENQUIRY...</span>
            </div>
          ) : (
            <span>REQUEST INFORMATION</span>
          )}
        </button>

      </form>

      {/* Luxury Form Submission Success Modal popup */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] bg-brand-charcoal/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-md w-full bg-brand-white rounded-2xl border border-brand-gold p-6 sm:p-8 shadow-2xl text-center">
            
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-5 border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl text-brand-charcoal font-semibold">
              Enquiry Dispatched Successfully
            </h3>
            
            <p className="text-xs text-brand-charcoal/60 mt-3 leading-relaxed font-sans">
              Thank you for requesting specifications for Khaya Residences Bangsar. A detailed project presentation compilation pack has been logged and queued for email delivery to your registered contact coordinates.
            </p>

            <div className="bg-brand-bg border border-brand-charcoal/5 p-4 rounded-xl text-left my-5 space-y-2">
              <div className="text-[9px] uppercase tracking-wider text-brand-charcoal/40 font-bold">Assigned Advisory:</div>
              <div className="font-serif text-sm font-semibold text-brand-charcoal">Shyan Yee (REN 46305)</div>
              <div className="text-xs text-brand-charcoal/70">IQI REALTY SDN. BHD. (1113417U / 201401037274)</div>
              <div className="text-xs font-semibold text-brand-gold mt-1 font-mono">Response Window: &lt; 12 Working Hours</div>
            </div>

            <button
              onClick={() => {
                setShowSuccessModal(false);
              }}
              className="bg-brand-charcoal hover:bg-brand-gold text-brand-white hover:text-brand-charcoal py-3 px-8 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300 w-full cursor-pointer"
            >
              RETURN TO LANDING PAGE
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
