"use client";

import { FormEvent, useState } from "react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  agreed: boolean;
  honeypot: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  agreed: false,
  honeypot: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Bot protection
    if (formData.honeypot) {
      console.warn("Bot submission blocked");
      return;
    }

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      setErrorMsg("Please fill all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData(initialState);
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="bg-base text-ink">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-violet">
            Get in touch
          </span>

          <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            LET&apos;S BUILD
            <br />
            SOMETHING{" "}
            <span className="bg-signal-gradient bg-clip-text text-transparent">
              GREAT.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate">
            Have a project in mind? Tell us what you&apos;re building and our
            team will get back to you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.7fr_0.8fr]">
          {/* FORM */}
          <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal-blue">
                Send us a message
              </span>

              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Talk to Our Team
              </h2>

              <p className="mt-3 text-slate">
                Fill in the form and a member of our team will be in touch
                within one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Honeypot - hidden from real users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ position: "absolute", left: "-9999px" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-7 sm:grid-cols-2">
                <Field
                  label="FULL NAME"
                  name="fullName"
                  placeholder="e.g. Jane Smith"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <Field
                  label="BUSINESS EMAIL"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Field
                  label="PHONE NUMBER"
                  name="phone"
                  placeholder="+1 555 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <Field
                  label="COMPANY NAME"
                  name="company"
                  placeholder="Acme Corporation"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="mb-3 block text-xs font-bold tracking-[0.08em]">
                  SUBJECT
                </label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-black/10 bg-[#f8f9fc] px-5 py-4 outline-none transition focus:border-signal-violet"
                >
                  <option value="">Select a topic</option>
                  <option>Product Engineering</option>
                  <option>Generative AI</option>
                  <option>Cloud Engineering</option>
                  <option>Data Analytics</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-xs font-bold tracking-[0.08em]">
                  MESSAGE <span className="text-red-500">*</span>
                </label>

                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project, challenge, or question..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-black/10 bg-[#f8f9fc] px-5 py-4 outline-none transition focus:border-signal-violet"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4"
                />

                <span>
                  By checking this box, you are agreeing to receive our
                  Newsletters & Updates.
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative overflow-hidden rounded-full bg-signal-gradient px-10 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:opacity-60"
              >
                <span className="relative z-10">
                  {status === "loading"
                    ? "Sending..."
                    : status === "success"
                    ? "Message Sent ✓"
                    : "Submit →"}
                </span>
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-green-600">
                  ✓ Thanks! We&apos;ll get back to you within one business day.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-red-500">{errorMsg}</p>
              )}
            </form>
          </div>

          {/* DIRECT CONTACT */}
          <aside className="h-fit rounded-[2rem] border border-black/10 bg-white p-7 sm:p-9">
            <h2 className="font-display text-2xl font-bold">
              Direct Contact
            </h2>

            <div className="my-6 h-px bg-black/10" />

            <ContactBox
              title="HR RELATED ENQUIRIES"
              email="techteam@starfii.com"
              phone="+91 9789927675"
            />

            <ContactBox
              title="SALES RELATED ENQUIRIES"
              email="sales@codeboardtech.com"
              phone="+91 9789927675"
            />

            <div className="mt-8 rounded-3xl bg-ink p-7 text-white">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal-blue">
                Response time
              </span>

              <h3 className="mt-3 font-display text-2xl font-bold">
                We usually reply within one business day.
              </h3>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-3 block text-xs font-bold tracking-[0.08em]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        required={required}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-black/10 bg-[#f8f9fc] px-5 py-4 outline-none transition focus:border-signal-violet"
      />
    </div>
  );
}

function ContactBox({
  title,
  email,
  phone,
}: {
  title: string;
  email: string;
  phone: string;
}) {
  return (
    <div className="mb-6 rounded-3xl border border-signal-blue/10 bg-[#f7f9fd] p-6">
      <p className="text-xs font-bold tracking-[0.1em] text-slate">{title}</p>

      <div className="mt-5 space-y-5">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            ✉
          </div>

          <div>
            <p className="text-xs font-semibold text-slate">EMAIL</p>
            <a
              href={`mailto:${email}`}
              className="mt-1 block font-semibold text-blue-600 hover:underline"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            ☎
          </div>

          <div>
            <p className="text-xs font-semibold text-slate">PHONE</p>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="mt-1 block font-semibold"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}