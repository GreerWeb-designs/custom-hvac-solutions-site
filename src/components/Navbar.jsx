import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const cx = (...c) => c.filter(Boolean).join(" ");

export default function Navbar({ phone, displayPhone }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  const linkClass = ({ isActive }) =>
    cx(
      "block rounded-xl px-4 py-3 text-base font-semibold transition",
      isActive
        ? "bg-slate-100 text-[var(--brand-dark)]"
        : "text-slate-700 hover:bg-slate-100"
    );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 supports-backdrop-filter:bg-white/80 supports-backdrop-filter:backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/images/logo.png"
            alt="Custom HVAC Solutions logo"
            className="h-28 w-28 rounded-xl object-contain"
          />
          <div className="hidden sm:block min-w-0">
            <div className="font-extrabold tracking-tight text-(--brand-dark) truncate">
              Custom HVAC Solutions
            </div>
            <div className="text-xs text-slate-600 truncate">
              Heating • Air • Maintenance
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        {/* Desktop CTA */}
        <a
          href={`tel:${phone}`}
          className="hidden md:inline-flex items-center rounded-xl bg-(--brand-blue) px-4 py-2 text-sm font-extrabold text-white hover:opacity-90"
        >
          Call {displayPhone}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-(--brand-dark)"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />
          <div className="absolute top-0 left-0 right-0 bg-white border-b border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <div className="font-extrabold text-(--brand-dark)">Menu</div>
              <button
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-2">
              <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
              <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>

              <a
                href={`tel:${phone}`}
                className="mt-2 block text-center rounded-xl bg-(--brand-blue) px-4 py-3 text-base font-extrabold text-white"
                onClick={() => setOpen(false)}
              >
                Call {displayPhone}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Subtle brand accent line */}
      <div className="h-0.5 bg-linear-to-r from-(--brand-red) via-transparent to-(--brand-blue)" />
    </header>
  );
}
