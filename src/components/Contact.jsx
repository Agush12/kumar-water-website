import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  MapPin, Phone, Mail, Send, CheckCircle2,
  User, MessageSquare, Building2,
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: ['109/1, Sector 15B, Awas Vikas Colony,', 'Near Karkunj, Agra, Uttar Pradesh'],
    color: '#00C9A7',
    href: 'https://maps.google.com/?q=Awas+Vikas+Colony+Agra',
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    lines: ['+91 98370 32425', '+91 63973 35219'],
    color: '#3b82f6',
    href: 'tel:+919837032425',
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['kpwsagra@gmail.com'],
    color: '#8b5cf6',
    href: 'mailto:kpwsagra@gmail.com',
  },
];

const directors = [
  { name: 'Brijesh Sharma', role: 'Director', initials: 'BS' },
  { name: 'Ankur Sharma', role: 'Director', initials: 'AS' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-navy-gradient relative overflow-hidden">
      {/* BG decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <MessageSquare className="w-4 h-4" />
            Contact Us
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Let&apos;s Build Your{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Water Solution
            </span>
          </h2>
          <p className="text-white/50 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Get a free consultation and customized quote from our water treatment experts.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left — Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-teal-500/20 border-2 border-teal-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm max-w-xs">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <button
                    className="mt-6 px-5 py-2.5 bg-teal-500 text-white rounded-xl font-semibold text-sm hover:bg-teal-600 transition-colors"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all appearance-none"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-navy-900">Select service</option>
                        <option value="commercial-ro" className="bg-navy-900">Commercial RO Plant</option>
                        <option value="industrial-ro" className="bg-navy-900">Industrial RO Plant</option>
                        <option value="stp" className="bg-navy-900">STP / ETP System</option>
                        <option value="fountain" className="bg-navy-900">Hydraulic & Fountain</option>
                        <option value="amc" className="bg-navy-900">AMC / Service</option>
                        <option value="other" className="bg-navy-900">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Message / Requirements
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your requirements — capacity needed, location, timeline..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 hover:-translate-y-0.5 hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message &amp; Get Quote
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right — Contact Info */}
          <div
            className={`lg:col-span-2 flex flex-col gap-5 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Contact Cards */}
            {contactInfo.map(({ icon: Icon, title, lines, color, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-teal-500/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${color}20`, border: `1.5px solid ${color}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-1">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-white font-medium text-sm leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              </a>
            ))}

            {/* Directors */}
            <div className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-3">
                Our Directors
              </p>
              <div className="flex flex-col gap-3">
                {directors.map(({ name, role, initials }) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{name}</p>
                      <p className="text-white/50 text-xs">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                title="Kumar Pure Water Solution Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.5!2d78.0081!3d27.1767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEwJzM2LjEiTiA3OMKwMDAnMjkuMiJF!5e0!3m2!1sen!2sin!4v1000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919837032425?text=Hello%2C%20I%20need%20information%20about%20water%20treatment%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.003 2.003C6.479 2.003 2 6.482 2 12.005c0 1.779.462 3.448 1.27 4.9L2 22l5.232-1.243A9.952 9.952 0 0012.003 22C17.523 22 22 17.521 22 12.005c0-5.522-4.477-10.002-9.997-10.002zm0 18.18c-1.615 0-3.118-.435-4.41-1.19l-.316-.188-3.105.738.783-2.991-.206-.308A8.15 8.15 0 013.821 12c0-4.518 3.676-8.193 8.182-8.193 4.505 0 8.18 3.675 8.18 8.193 0 4.516-3.675 8.183-8.18 8.183z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
      </a>
    </section>
  );
}
