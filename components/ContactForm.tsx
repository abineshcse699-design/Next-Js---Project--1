// "use client";

// import { FormEvent } from "react";

// export default function ContactForm() {
//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_30px_100px_-50px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12"
//     >
//       <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal-violet">
//         Send us a message
//       </span>

//       <h2 className="mt-4 font-display text-4xl font-bold text-ink">
//         Talk to our team
//       </h2>

//       <p className="mt-4 max-w-xl text-base leading-7 text-slate">
//         Tell us about your project and a member of our team will get back to
//         you within one business day.
//       </p>

//       <div className="mt-10 grid gap-6 sm:grid-cols-2">

//         <Field
//           label="Full Name"
//           placeholder="e.g. Jane Smith"
//         />

//         <Field
//           label="Business Email"
//           placeholder="jane@company.com"
//           type="email"
//         />

//         <Field
//           label="Phone Number"
//           placeholder="+1 555 000 0000"
//         />

//         <Field
//           label="Company Name"
//           placeholder="Acme Corporation"
//         />

//       </div>

//       <div className="mt-6">
//         <label className="text-sm font-semibold uppercase tracking-wide text-ink">
//           Subject
//         </label>

//         <select className="mt-3 w-full rounded-xl border border-black/10 bg-[#f8f9fc] px-5 py-4 text-sm outline-none transition focus:border-signal-violet">
//           <option>Select a topic</option>
//           <option>Product Engineering</option>
//           <option>AI / ML</option>
//           <option>Cloud Engineering</option>
//           <option>Data Engineering</option>
//           <option>UI/UX</option>
//           <option>Consulting</option>
//         </select>
//       </div>

//       <div className="mt-6">
//         <label className="text-sm font-semibold uppercase tracking-wide text-ink">
//           Message
//         </label>

//         <textarea
//           rows={6}
//           placeholder="Tell us about your project, challenge, or question..."
//           className="mt-3 w-full resize-none rounded-xl border border-black/10 bg-[#f8f9fc] px-5 py-4 text-sm outline-none transition focus:border-signal-violet"
//         />
//       </div>

//       <label className="mt-6 flex items-start gap-3 text-sm text-slate">
//         <input
//           type="checkbox"
//           className="mt-1 accent-signal-violet"
//         />

//         <span>
//           I agree to receive newsletters and updates from STARFII.
//         </span>
//       </label>

//       <button
//         type="submit"
//         className="mt-8 rounded-full bg-signal-gradient px-8 py-3.5 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(108,76,241,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-10px_rgba(108,76,241,0.65)]"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// }

// function Field({
//   label,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   placeholder: string;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="text-sm font-semibold uppercase tracking-wide text-ink">
//         {label}
//       </label>

//       <input
//         type={type}
//         placeholder={placeholder}
//         className="mt-3 w-full rounded-xl border border-black/10 bg-[#f8f9fc] px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-signal-violet focus:bg-white"
//       />
//     </div>
//   );
// }


"use client";

import { FormEvent, useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  agreed: boolean;
  honeypot: string; // bot trap - hidden field
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  agreed?: string;
}

const initialState: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  agreed: false,
  honeypot: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function validate(data: FormData): FormErrors {
    const newErrors: FormErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    } else if (data.fullName.trim().length < 2) {
      newErrors.fullName = "Name is too short";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[+]?[\d\s()-]{7,15}$/;
    if (!data.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!phoneRegex.test(data.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!data.subject || data.subject === "Select a topic") {
      newErrors.subject = "Please select a topic";
    }

    if (!data.message.trim()) {
      newErrors.message = "Please tell us about your project";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Please add a bit more detail (min 10 characters)";
    }

    if (!data.agreed) {
      newErrors.agreed = "Please agree to continue";
    }

    return newErrors;
  }

  function handleChange(
    field: keyof FormData,
    value: string | boolean
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // clear error for this field as user types
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Bot check - if honeypot is filled, silently reject
    if (formData.honeypot) {
      console.warn("Bot submission blocked");
      return;
    }

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

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
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_30px_100px_-50px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal-violet">
        Send us a message
      </span>

      <h2 className="mt-4 font-display text-4xl font-bold text-ink">
        Talk to our team
      </h2>

      <p className="mt-4 max-w-xl text-base leading-7 text-slate">
        Tell us about your project and a member of our team will get back to
        you within one business day.
      </p>

      {/* Honeypot field - hidden from real users, bots fill it */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => handleChange("honeypot", e.target.value)}
        style={{ position: "absolute", left: "-9999px" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field
          label="Full Name"
          placeholder="e.g. Jane Smith"
          value={formData.fullName}
          onChange={(v) => handleChange("fullName", v)}
          error={errors.fullName}
        />

        <Field
          label="Business Email"
          placeholder="jane@company.com"
          type="email"
          value={formData.email}
          onChange={(v) => handleChange("email", v)}
          error={errors.email}
        />

        <Field
          label="Phone Number"
          placeholder="+1 555 000 0000"
          value={formData.phone}
          onChange={(v) => handleChange("phone", v)}
          error={errors.phone}
        />

        <Field
          label="Company Name"
          placeholder="Acme Corporation"
          value={formData.company}
          onChange={(v) => handleChange("company", v)}
        />
      </div>

      <div className="mt-6">
        <label className="text-sm font-semibold uppercase tracking-wide text-ink">
          Subject
        </label>

        <select
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className="mt-3 w-full rounded-xl border border-black/10 bg-[#f8f9fc] px-5 py-4 text-sm outline-none transition focus:border-signal-violet"
        >
          <option>Select a topic</option>
          <option>Product Engineering</option>
          <option>AI / ML</option>
          <option>Cloud Engineering</option>
          <option>Data Engineering</option>
          <option>UI/UX</option>
          <option>Consulting</option>
        </select>
        {errors.subject && (
          <p className="mt-2 text-xs text-red-500">{errors.subject}</p>
        )}
      </div>

      <div className="mt-6">
        <label className="text-sm font-semibold uppercase tracking-wide text-ink">
          Message
        </label>

        <textarea
          rows={6}
          placeholder="Tell us about your project, challenge, or question..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="mt-3 w-full resize-none rounded-xl border border-black/10 bg-[#f8f9fc] px-5 py-4 text-sm outline-none transition focus:border-signal-violet"
        />
        {errors.message && (
          <p className="mt-2 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-slate">
        <input
          type="checkbox"
          checked={formData.agreed}
          onChange={(e) => handleChange("agreed", e.target.checked)}
          className="mt-1 accent-signal-violet"
        />
        <span>I agree to receive newsletters and updates from STARFII.</span>
      </label>
      {errors.agreed && (
        <p className="mt-2 text-xs text-red-500">{errors.agreed}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 rounded-full bg-signal-gradient px-8 py-3.5 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(108,76,241,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-10px_rgba(108,76,241,0.65)] disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm font-medium text-green-600">
          ✓ Thanks! We&apos;ll get back to you within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-500">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold uppercase tracking-wide text-ink">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-3 w-full rounded-xl border px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:bg-white ${
          error
            ? "border-red-400 bg-red-50"
            : "border-black/10 bg-[#f8f9fc] focus:border-signal-violet"
        }`}
      />
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}