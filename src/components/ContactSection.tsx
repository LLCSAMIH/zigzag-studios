"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "@/lib/useInView";
import { pricingTiers } from "@/data/pricing";

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM",
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    address: "",
    date: "",
    time: "",
    message: "",
  });

  // Pre-select package from query param (e.g. /contact?package=Market+Leader)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get("package");
    if (pkg) setForm((f) => ({ ...f, package: pkg }));
  }, []);

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
      `Booking Request: ${form.package || "Package TBD"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPackage: ${form.package}\nPreferred Date: ${form.date}\nPreferred Time: ${form.time}\nProperty Address: ${form.address}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:sfeirjean1@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputStyle: React.CSSProperties = {
    fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
    letterSpacing: "-0.05rem",
    padding: "1.6rem 0",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    color: "#000",
    outline: "none",
    width: "100%",
    fontFamily: "inherit",
    transition: "border-color 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "1.2rem",
    letterSpacing: "0.08rem",
    textTransform: "uppercase" as const,
    color: "#555",
    marginBottom: "0.8rem",
  };

  const getCardStyle = (isSelected: boolean): React.CSSProperties => ({
    cursor: "pointer",
    borderRadius: "1.2rem",
    padding: "2.4rem 2rem",
    background: isSelected ? "#e2e5ea" : "#e8eaee",
    border: isSelected ? "2px solid var(--accent)" : "1px solid rgba(0,0,0,0.15)",
    transition: "background 0.25s ease, border-color 0.25s ease, transform 0.15s ease",
    transform: isSelected ? "scale(0.98)" : "scale(1)",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  });

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
      style={{ backgroundColor: "#F0F2F5" }}
    >
      <p
        className="font-sans"
        style={{
          fontSize: "1.4rem",
          letterSpacing: "0.12rem",
          textTransform: "uppercase",
          color: "#555",
          marginBottom: "6rem",
        }}
      >
        Start Your Project
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-[3fr_2fr]"
        style={{ gap: "clamp(4rem, 8vw, 8rem)" }}
      >
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="font-sans contact-input"
            style={inputStyle}
          />

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "0 4rem" }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
              className="font-sans contact-input"
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className="font-sans contact-input"
              style={inputStyle}
            />
          </div>

          {/* Package selection */}
          <div style={{ paddingTop: "2.4rem", paddingBottom: "1.2rem" }}>
            <span className="font-sans" style={labelStyle}>
              Select a Package
            </span>
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: "1.2rem", marginTop: "1.2rem" }}
            >
              {pricingTiers.map((tier) => (
                <label key={tier.name} style={{ cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="package"
                    value={tier.name}
                    checked={form.package === tier.name}
                    onChange={handleChange}
                    style={{
                      position: "absolute",
                      opacity: 0,
                      width: 0,
                      height: 0,
                    }}
                  />
                  <div style={getCardStyle(form.package === tier.name)}>
                    <span
                      className="font-sans"
                      style={{
                        fontSize: "1.2rem",
                        letterSpacing: "0.1rem",
                        textTransform: "uppercase",
                        color: "#555",
                      }}
                    >
                      {tier.number}
                    </span>
                    <span
                      className="font-sans text-black"
                      style={{
                        fontSize: "1.8rem",
                        letterSpacing: "-0.08rem",
                        lineHeight: 1.1,
                      }}
                    >
                      {tier.name}
                    </span>
                    <span
                      className="font-serif italic"
                      style={{
                        fontSize: "1.4rem",
                        color: "#555",
                        letterSpacing: "-0.03rem",
                      }}
                    >
                      {tier.tagline}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <input
            type="text"
            name="address"
            placeholder="Property address"
            value={form.address}
            onChange={handleChange}
            className="font-sans contact-input"
            style={inputStyle}
          />

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "0 4rem" }}
          >
            <div>
              <span className="font-sans" style={{ ...labelStyle, marginTop: "1.6rem" }}>
                Preferred Date
              </span>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="font-sans contact-input"
                style={{
                  ...inputStyle,
                  colorScheme: "light",
                }}
              />
            </div>
            <div>
              <span className="font-sans" style={{ ...labelStyle, marginTop: "1.6rem" }}>
                Preferred Time
              </span>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className="font-sans contact-input"
                style={{
                  ...inputStyle,
                  appearance: "none",
                  color: form.time ? "#000" : "#999",
                }}
              >
                <option value="" disabled>
                  Select a time
                </option>
                {timeSlots.map((t) => (
                  <option key={t} value={t} style={{ color: "#000" }}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Additional notes or special requests"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="font-sans contact-input"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button
            type="submit"
            className="font-sans text-white flex items-center justify-center transition-opacity duration-300 hover:opacity-90 self-start"
            style={{
              fontSize: "1.8rem",
              letterSpacing: "-0.05rem",
              background: "var(--accent)",
              borderRadius: "10rem",
              padding: "1.4rem 4rem",
              marginTop: "2rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Request a Booking
          </button>
        </form>

        {/* Contact info */}
        <div className="flex flex-col">
          <div>
            <h3
              className="font-serif italic text-black"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 2.8rem)",
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
                href="mailto:sfeirjean1@gmail.com"
                className="font-sans text-black transition-opacity duration-300 hover:opacity-70"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)", letterSpacing: "-0.05rem" }}
              >
                sfeirjean1@gmail.com
              </a>
              <a
                href="tel:+19085694458"
                className="font-sans text-black transition-opacity duration-300 hover:opacity-70"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)", letterSpacing: "-0.05rem" }}
              >
                (908) 569-4458
              </a>
              <span
                className="font-sans"
                style={{
                  fontSize: "2rem",
                  color: "#555",
                  letterSpacing: "-0.05rem",
                }}
              >
                Somerset · Hoboken · NYC · Brooklyn · Philadelphia · Bergen County &amp; Beyond
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
                    color: "#555",
                    letterSpacing: "-0.05rem",
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <p
            className="font-sans"
            style={{
              fontSize: "1.6rem",
              color: "#555",
              letterSpacing: "-0.03rem",
              marginTop: "auto",
              paddingTop: "4rem",
              borderTop: "1px solid rgba(0,0,0,0.15)",
            }}
          >
            We typically respond within 24 hours. For urgent inquiries, call or
            text directly.
          </p>
        </div>
      </div>
    </section>
  );
}
