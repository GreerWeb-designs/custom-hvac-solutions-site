import Seo from "../components/Seo";
import { Link, useOutletContext } from "react-router-dom";

export default function Home() {
  const { PHONE, DISPLAY_PHONE, CITY } = useOutletContext();

  return (
    <>
      <Seo
        title={`Custom HVAC Solutions | HVAC Service in ${CITY}`}
        description={`Heating & air repairs, replacements, and maintenance in ${CITY}. Fast service, clear communication, and quality work.`}
      />

      {/* FULL-BLEED HERO */}
<section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-h-[78vh] md:min-h-[90vh] flex items-center overflow-hidden">
  <img
    src="/images/HeroCustomHVAC.webp"
    alt="Custom HVAC Solutions HVAC service"
    className="absolute inset-0 h-full w-full object-cover"
    loading="eager"
  />

  {/* Brand-tinted overlay gradient (red -> dark -> blue) */}
  <div className="absolute inset-0 bg-linear-to-b from-[rgba(221,77,74,0.45)] via-[rgba(0,0,0,0.55)] to-[rgba(18,144,210,0.45)]" />

  <div className="relative z-10 w-full">
    <div className="mx-auto max-w-6xl px-4">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-(--brand-dark)">
          Serving {CITY} and surrounding areas
        </div>

        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Fast, Reliable Heating & Air — Done Right
        </h1>

        <p className="mt-5 text-lg md:text-xl text-slate-100">
          Honest diagnostics, quality repairs, and professional installations. We make it easy to get comfortable again.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex justify-center rounded-2xl bg-white px-6 py-4 text-base font-extrabold text-(--brand-dark) hover:bg-slate-100 active:scale-[0.99]"
          >
            Call {DISPLAY_PHONE}
          </a>

          <a
            href="/contact"
            className="inline-flex justify-center rounded-2xl bg-(--brand-blue) px-6 py-4 text-base font-extrabold text-white hover:opacity-90 active:scale-[0.99]"
          >
            Request a Free Estimate
          </a>
        </div>

       <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
  {[
    "Local & reliable",
    "Clear communication",
    "Quality workmanship",
    "Respect for your home",
  ].map((t) => (
    <div
      key={t}
      className="px-1 py-1 font-semibold text-white text-center"
    >
      {t}
    </div>
  ))}
</div>

      </div>
    </div>
  </div>
</section>


      {/* SERVICES */}
<section className="py-10">
  <div className="flex items-end justify-between gap-4">
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold">Featured Services</h2>
      <p className="mt-2 text-slate-600">
        Installations, repairs, and comfort improvements for homes across {CITY}.
      </p>
    </div>

    <Link
      to="/services"
      className="hidden sm:inline-flex text-sm font-extrabold underline decoration-(--brand-blue) decoration-2 underline-offset-4 text-(--brand-dark) hover:text-(--brand-blue)"
    >
      See all →
    </Link>
  </div>

  <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <ServiceImageCard
      title="AC Installation"
      desc="Efficient installs sized properly for your home."
      img="/images/acinstall.jpg"
      href="/contact"
    />
    <ServiceImageCard
      title="Heat Installation"
      desc="Reliable heating installs and replacements."
      img="/images/furnace.jpg"
      href="/contact"
    />
    <ServiceImageCard
      title="AC & Heat Repair"
      desc="Fast diagnosis and dependable repairs."
      img="/images/acrepair.jpg"
      href="/contact"
    />
    <ServiceImageCard
      title="Water Heater Install"
      desc="New installs and replacements done right."
      img="/images/waterheater.jpg"
      href="/contact"
    />
    <ServiceImageCard
      title="Duct Cleaning"
      desc="Cleaner ducts, better airflow, fresher home."
      img="/images/ductcleaning.jpg"
      href="/contact"
    />
    <ServiceImageCard
      title="More Services"
      desc="Tell us what you need — we’ll help."
      img="/images/more.jpg"
      href="/services"
    />
  </div>

  {/* Mobile "See all" button */}
  <div className="mt-6 sm:hidden">
    <Link
      to="/services"
      className="inline-flex w-full justify-center rounded-2xl bg-slate-100 px-5 py-4 text-base font-extrabold text-(--brand-dark) hover:bg-slate-200"
    >
      See all services →
    </Link>
  </div>
</section>


      {/* WHY US */}
      <section className="py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">Why Choose Custom HVAC Solutions</h2>
          <p className="mt-3 text-slate-600">
            We keep it simple: show up, communicate clearly, and do quality work.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-800">
            {[
              "On-time, professional service",
              "Clear options and pricing",
              "Clean work area and respectful crews",
              "Repair-first approach when possible",
              "Comfort-focused solutions (airflow & efficiency)",
              "Local service you can rely on",
            ].map((x) => (
              <div key={x} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold">
                {x}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-2xl bg-slate-900 px-5 py-4 text-base font-extrabold text-white hover:opacity-90"
            >
              Request a Free Estimate
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex justify-center rounded-2xl bg-slate-100 px-5 py-4 text-base font-extrabold text-slate-900 hover:bg-slate-200"
            >
              Call {DISPLAY_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREA + FINAL CTA */}
      <section className="py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">Serving {CITY} & the Upstate</h2>
          <p className="mt-3 text-slate-600">
            If you’re in or near {CITY}, there’s a good chance we can help. Not sure? Give us a call and we’ll confirm.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/services"
              className="inline-flex justify-center rounded-2xl bg-white border border-slate-200 px-5 py-4 text-base font-extrabold text-slate-900 hover:bg-slate-100"
            >
              View Service Areas
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-2xl bg-slate-900 px-5 py-4 text-base font-extrabold text-white hover:opacity-90"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceImageCard({ title, desc, img, href }) {
  return (
    <Link
      to={href}
      className="group rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition"
    >
      <div className="relative h-60">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        {/* subtle overlay so text always reads */}
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />

        {/* small brand accent */}
        <div className="absolute left-4 top-4 h-2 w-12 rounded-full bg-(--brand-blue)/90" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="font-extrabold text-slate-900">{title}</div>
          <span className="text-sm font-extrabold text-(--brand-blue) group-hover:translate-x-0.5 transition">
            →
          </span>
        </div>
        <div className="mt-2 text-sm text-slate-600">{desc}</div>
      </div>
    </Link>
  );
}

