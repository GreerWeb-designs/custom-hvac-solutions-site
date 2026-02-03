import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// TEMP placeholders (we’ll replace with real pages next)
function ServicesPlaceholder() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-extrabold tracking-tight">Services</h1>
      <p className="mt-3 text-slate-600">
        Placeholder page — next up we’ll build service blocks + service areas.
      </p>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <div className="font-extrabold">Planned sections</div>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li>• HVAC services list (AC, Heat, Install, Replace, Maintenance)</li>
          <li>• Service areas (Inman + surrounding cities)</li>
          <li>• CTA blocks + FAQ (optional)</li>
        </ul>
      </div>
    </div>
  );
}

function ContactPlaceholder() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
      <p className="mt-3 text-slate-600">
        Placeholder page — next up we’ll build a mobile-first contact form + click-to-call.
      </p>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <div className="font-extrabold">Planned sections</div>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li>• Phone + location card</li>
          <li>• Contact form</li>
          <li>• “Call now” CTA (sticky on mobile)</li>
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
