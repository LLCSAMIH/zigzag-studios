"use client";

import { useRef, useState } from "react";
import { useInView } from "@/lib/useInView";
import { services } from "@/data/services";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Inquiry: ${form.service || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:jean@zigzagstudio.com?subject=${subject}&body=${body}`;
  };

  const inputStyle: React.CSSProperties = {
    fontSize: "2rem",
    letterSpacing: "-0.05rem",
    padding: "1.6rem 0",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--gray250)",
    color: "var(--gray900)",
    outline: "none",
    width: "100%",
    fontFamily: "inherit",
    transition: "border-color 0.3s ease",
  };

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "8rem" }}>
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="font-sans"
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="font-sans"
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            className="font-sans"
            style={inputStyle}
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="font-sans"
            style={{
              ...inputStyle,
              appearance: "none",
              color: form.service ? "var(--gray900)" : "var(--gray300)",
            }}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services
              .filter((s) => s.number !== "00")
              .map((s) => (
                <option key={s.number} value={s.name} style={{ color: "#000" }}>
                  {s.name}
                </option>
              ))}
          </select>
          <textarea
            name="message"
            placeholder="Tell us about your project"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="font-sans"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />
          <button
            type="submit"
            className="font-sans text-gray100 flex items-center justify-center transition-opacity duration-300 hover:opacity-90 self-start"
            style={{
              fontSize: "1.8rem",
              letterSpacing: "-0.05rem",
              background: "var(--gray900)",
              borderRadius: "10rem",
              padding: "1.4rem 4rem",
              marginTop: "2rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>

        {/* Contact info */}
        <div className="flex flex-col justify-between">
          <div>
            <h3
              className="font-serif italic text-gray900"
              style={{
                fontSize: "2.8rem",
                letterSpacing: "-0.05rem",
                marginBottom: "3.2rem",
              }}
            >
              Let&apos;s create something amazing.
            </h3>

            <div
              className="flex flex-col gap-4"
              style={{ marginBottom: "4rem" }}
            >
              <a
                href="mailto:jean@zigzagstudio.com"
                className="font-sans text-gray900 transition-opacity duration-300 hover:opacity-70"
                style={{ fontSize: "2.2rem", letterSpacing: "-0.05rem" }}
              >
                jean@zigzagstudio.com
              </a>
              <a
                href="tel:+10000000000"
                className="font-sans text-gray900 transition-opacity duration-300 hover:opacity-70"
                style={{ fontSize: "2.2rem", letterSpacing: "-0.05rem" }}
              >
                (XXX) XXX-XXXX
              </a>
              <span
                className="font-sans"
                style={{
                  fontSize: "2rem",
                  color: "var(--gray300)",
                  letterSpacing: "-0.05rem",
                }}
              >
                New Jersey, United States
              </span>
            </div>

            <div className="flex gap-6">
              {["Instagram", "YouTube", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-sans transition-opacity duration-300 hover:opacity-100"
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--gray300)",
                    letterSpacing: "-0.05rem",
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div
            style={{
              marginTop: "4rem",
              height: "24rem",
              background: "var(--gray200)",
              borderRadius: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="font-sans"
              style={{
                fontSize: "1.6rem",
                color: "var(--gray300)",
                letterSpacing: "-0.05rem",
              }}
            >
              New Jersey, NJ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
