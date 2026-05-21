"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export default function Contact() {
  const contactSection = useInView(0.2);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div ref={contactSection.ref} className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-700 ${contactSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block bg-[#B0FC51]/20 text-[#181818] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Get in <span className="text-[#B0FC51]">Touch</span>
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? We are here to help you every step of the way.
          </p>
        </div>

        <div className={`mt-16 max-w-xl mx-auto transition-all duration-700 delay-200 ${contactSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#B0FC51] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#B0FC51] transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#B0FC51] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#B0FC51] text-[#181818] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className={`mt-16 grid sm:grid-cols-3 gap-8 text-center transition-all duration-700 delay-400 ${contactSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { icon: "📍", label: "123 Travel Street, World" },
            { icon: "📧", label: "contact@volanow.com" },
            { icon: "📞", label: "+1 234 567 890" }
          ].map((item, index) => (
            <div key={index} className="text-white/60">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}