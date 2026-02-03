import Seo from "../components/Seo";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const { PHONE, DISPLAY_PHONE, CITY } = useOutletContext();
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // honeypot (bots fill it, humans don't)
    if (payload.company_website) {
      setStatus({ state: "success", msg: "Thanks — we received your message." });
      e.currentTarget.reset();
      return;
    }
    delete payload.company_website;

    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
      if (!endpoint) throw new Error("Missing VITE_CONTACT_ENDPOINT");

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          source: "customhvacsolutions.com",
          city: CITY,
          ts: Date.now(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok !== true) throw new Error(data?.error || "Request failed");

      setStatus({ state: "success", msg: "Thanks — we received your message and will reach out shortly." });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ state: "error", msg: "Something went wrong. Please call us and we’ll help right away." });
    }
  }

  return (
    <>
      <Seo
        title={`Contact | Custom HVAC Solutions (${CITY})`}
        description={`Contact Custom HVAC Solutions in ${CITY} for HVAC service. Call or request an estimate.`}
      />

      <section className="py-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--brand-dark)]">Contact</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Tell us what’s going on and we’ll get back to you as soon as possible.
          For urgent issues, calling is the fastest option.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          {/* Info card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-extrabold text-[var(--brand-dark)]">Reach Us</h2>

            <div className="mt-5 space-y-4 text-slate-700">
              <div>
                <div className="text-sm text-slate-600">Phone</div>
                <a
                  href={`tel:${PHONE}`}
                  className="text-lg font-extrabold text-[var(--brand-blue)] hover:underline"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>

              <div>
                <div className="text-sm text-slate-600">Location</div>
                <div className="font-semibold text-[var(--brand-dark)]">{CITY}</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-extrabold text-[var(--brand-dark)]">Fastest Response</div>
                <div className="mt-1 text-sm text-slate-600">
                  Call us and we’ll help you choose the right next step.
                </div>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-3 inline-flex w-full justify-center rounded-2xl bg-[var(--brand-blue)] px-4 py-3 text-sm font-extrabold text-white hover:opacity-90"
                >
                  Tap to Call
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-extrabold text-[var(--brand-dark)]">Request Service / Estimate</h2>

            {/* honeypot */}
            <input className="hidden" name="company_website" autoComplete="off" tabIndex="-1" />

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="City / Zip" name="location" required />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-slate-700">Service Needed</label>
              <select
                name="service"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
                defaultValue=""
                required
              >
                <option value="" disabled>Select one…</option>
                <option>AC Installation</option>
                <option>Heat Installation</option>
                <option>AC & Heat Repair</option>
                <option>Water Heater Install</option>
                <option>Duct Cleaning</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-slate-700">Message</label>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
                placeholder="Describe the issue (no cool air, no heat, noise, uneven rooms, etc.)"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="mt-5 w-full rounded-2xl bg-[var(--brand-blue)] px-5 py-4 text-base font-extrabold text-white hover:opacity-90 disabled:opacity-60"
            >
              {status.state === "loading" ? "Sending…" : "Send Request"}
            </button>

            {status.msg ? (
              <div
                className={`mt-4 rounded-2xl px-4 py-3 text-sm border ${
                  status.state === "success"
                    ? "bg-green-50 text-green-800 border-green-200"
                    : "bg-red-50 text-red-800 border-red-200"
                }`}
              >
                {status.msg}
              </div>
            ) : null}

            <p className="mt-4 text-xs text-slate-500">
              By submitting, you agree to be contacted about your request.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
      />
    </div>
  );
}
