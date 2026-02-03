import Seo from "../components/Seo";
import { Link, useOutletContext } from "react-router-dom";

const SERVICES = [
  { title: "AC Installation", img: "/images/acinstall.jpg", desc: "Efficient installs sized correctly for your home." },
  { title: "Heat Installation", img: "/images/furnace.jpg", desc: "Reliable heating installs and replacements." },
  { title: "AC & Heat Repair", img: "/images/acrepair.jpg", desc: "Fast diagnosis and dependable repairs." },
  { title: "Water Heater Install", img: "/images/waterheater.jpg", desc: "New installs and replacements done right." },
  { title: "Duct Cleaning", img: "/images/ductcleaning.jpg", desc: "Cleaner ducts, better airflow, fresher home." },
  { title: "More Services", img: "/images/more.jpg", desc: "Tell us what you need — we’ll help." },
];

const SERVICE_AREAS = [
  "Inman",
  "Boiling Springs",
  "Spartanburg",
  "Landrum",
  "Campobello",
  "Lyman",
  "Duncan",
  "Greer",
  "Wellford",
  "Cowpens",
  "Greenville",
  "Taylors",
  "Easley",
  "Anderson",
  "Seneca",
];

export default function Services() {
  const { CITY } = useOutletContext();

  return (
    <>
      <Seo
        title={`Services | Custom HVAC Solutions (${CITY})`}
        description={`HVAC installations, repairs, water heaters, duct cleaning, and more in and around ${CITY}.`}
      />

      <section className="py-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--brand-dark)]">
              Services
            </h1>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Installations, repairs, and comfort improvements for homes across {CITY} and nearby areas.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex justify-center rounded-2xl bg-[var(--brand-blue)] px-5 py-4 text-base font-extrabold text-white hover:opacity-90"
          >
            Request a Free Estimate
          </Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              to={s.title === "More Services" ? "/services" : "/contact"}
              className="group rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition"
            >
              <div className="relative h-44">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute left-4 top-4 h-2 w-14 rounded-full bg-[var(--brand-blue)]/90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-xl font-extrabold">{s.title}</div>
                  <div className="text-white/90 text-sm">{s.desc}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-700">
                    Tap for estimate
                  </div>
                  <div className="text-sm font-extrabold text-[var(--brand-blue)] group-hover:translate-x-0.5 transition">
                    →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-extrabold text-[var(--brand-dark)]">Service Areas</h2>
          <p className="mt-2 text-slate-600">
            Based in {CITY}. We commonly serve:
          </p>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {SERVICE_AREAS.map((c) => (
              <div
                key={c}
                className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-[var(--brand-dark)]"
              >
                {c}
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Don’t see your town listed? Reach out — we may still be able to help.
          </p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto justify-center rounded-2xl bg-[var(--brand-blue)] px-5 py-4 text-base font-extrabold text-white hover:opacity-90"
            >
              Request Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
