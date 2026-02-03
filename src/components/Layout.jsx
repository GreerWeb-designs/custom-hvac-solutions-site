import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MobileCtaBar from "./MobileCtaBar";

const PHONE = "8644689193";
const DISPLAY_PHONE = "(864) 468-9193";
const CITY = "Inman, SC";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <Navbar phone={PHONE} displayPhone={DISPLAY_PHONE} />

      

      {/* Page content */}
      <main className="mx-auto max-w-6xl px-4">
        <Outlet context={{ PHONE, DISPLAY_PHONE, CITY }} />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
          <div className="font-extrabold text-slate-900">
            Custom HVAC Solutions
          </div>
          <div className="mt-2">
            Call{" "}
            <a
              href={`tel:${PHONE}`}
              className="font-semibold underline"
            >
              {DISPLAY_PHONE}
            </a>
          </div>
          <div className="mt-2">Serving {CITY} and surrounding areas</div>
          <div className="mt-2">
  © {new Date().getFullYear()} Custom HVAC Solutions. All rights reserved.
</div>

<div className="mt-2 text-xs text-slate-500">
  Site designed by{" "}
  <a
    href="https://greerwebdesigns.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-(--brand-ice) hover:underline"
  >
    Greer Web Designs
  </a>
</div>
        </div>
      </footer>

      {/* Spacer so mobile CTA doesn’t cover content */}
      <div className="h-24 md:hidden" />

      {/* Mobile sticky CTA */}
      <MobileCtaBar phone={PHONE} />
    </div>
  );
}
