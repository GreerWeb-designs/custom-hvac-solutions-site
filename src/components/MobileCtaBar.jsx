export default function MobileCtaBar({ phone }) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex gap-3">
        <a
          href={`tel:${phone}`}
          className="flex-1 text-center rounded-2xl bg-slate-900 py-3 text-base font-extrabold text-white active:scale-[0.99]"
        >
          Call
        </a>
        <a
          href="/contact"
          className="flex-1 text-center rounded-2xl bg-slate-100 py-3 text-base font-extrabold text-slate-900 active:scale-[0.99]"
        >
          Estimate
        </a>
      </div>
    </div>
  );
}
