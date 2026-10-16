/** Roof-pitch mark with a chimney, plus the expanded wordmark. Inherits text color. */
export function Logo() {
  return (
    <span className="inline-flex items-center gap-3">
      <svg aria-hidden="true" viewBox="0 0 30 20" className="h-[1.15rem] w-auto" fill="none" stroke="currentColor">
        <path d="M1.5 18.5 15 2.5l13.5 16" strokeWidth="2.4" strokeLinejoin="miter" />
        <path d="M21 9.6V4h3v9.2" strokeWidth="2" />
      </svg>
      <span className="font-wide text-[0.9rem] font-bold tracking-[0.04em] uppercase">R&amp;R Rebuilders</span>
    </span>
  );
}
