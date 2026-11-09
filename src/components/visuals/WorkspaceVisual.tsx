/**
 * Animated workspace illustration: a laptop running a dashboard and design
 * canvas, with floating task and design cards. Decorative only.
 */
export default function WorkspaceVisual() {
  const bars = [55, 80, 45, 95, 70, 85, 60];

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[560px] select-none">
      {/* Rotating ring */}
      <div className="absolute -top-10 -right-6 w-40 h-40 rounded-full border border-dashed border-coral-pink/40 spin-slow" />
      <div className="absolute -bottom-6 -left-8 w-24 h-24 bg-soft-beige/70 float-rotate" />

      {/* Laptop */}
      <div className="relative float-y-slow">
        <div className="relative bg-charcoal rounded-t-xl p-2.5 sm:p-3 shadow-2xl">
          <div className="bg-warm-ivory rounded-md overflow-hidden aspect-[16/10] flex">
            {/* Sidebar */}
            <div className="w-[18%] bg-charcoal/95 p-2 sm:p-3 flex flex-col gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-coral-pink rounded-sm flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold">
                A
              </div>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`h-1.5 rounded-full ${i === 1 ? 'bg-coral-pink' : 'bg-warm-ivory/25'}`} />
              ))}
            </div>
            {/* Main */}
            <div className="flex-1 p-2.5 sm:p-4 flex flex-col gap-2 sm:gap-3 relative">
              <div className="flex items-center justify-between">
                <div className="h-2 w-1/3 bg-charcoal/80 rounded-full" />
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-coral-pink" />
                  <span className="w-2 h-2 rounded-full bg-soft-beige" />
                  <span className="w-2 h-2 rounded-full bg-charcoal/30" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {['Tasks', 'Leads', 'Posts'].map((label, i) => (
                  <div key={label} className="bg-white rounded-sm p-1.5 sm:p-2 border border-soft-beige/60">
                    <div className="text-[7px] sm:text-[9px] uppercase tracking-wider text-charcoal/50">{label}</div>
                    <div className={`mt-1 h-1.5 rounded-full ${i === 0 ? 'bg-coral-pink' : 'bg-charcoal/70'}`} style={{ width: `${60 + i * 12}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex-1 grid grid-cols-5 gap-2 min-h-0">
                {/* Chart */}
                <div className="col-span-3 bg-white rounded-sm border border-soft-beige/60 p-2 flex items-end gap-1 sm:gap-1.5">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className={`screen-bar flex-1 rounded-t-sm ${i % 3 === 1 ? 'bg-coral-pink' : 'bg-soft-beige'}`}
                      style={{ height: `${h}%`, ['--bar-delay' as string]: `${i * 220}ms` }}
                    />
                  ))}
                </div>
                {/* Design canvas */}
                <div className="col-span-2 bg-white rounded-sm border border-soft-beige/60 p-2 flex flex-col gap-1.5 relative overflow-hidden">
                  <div className="aspect-square w-full bg-coral-pink/15 rounded-sm flex items-center justify-center">
                    <div className="w-1/2 aspect-square rounded-full border-2 border-coral-pink" />
                  </div>
                  <div className="type-line h-1.5 bg-charcoal/70 rounded-full" style={{ ['--line-width' as string]: '85%' }} />
                  <div className="type-line h-1.5 bg-charcoal/30 rounded-full" style={{ ['--line-width' as string]: '60%', ['--line-delay' as string]: '400ms' }} />
                </div>
              </div>
              {/* Cursor */}
              <svg className="screen-cursor absolute top-[38%] left-[30%] w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2l16 9-7 2-3 7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative h-3 sm:h-4 bg-gradient-to-b from-charcoal/90 to-charcoal rounded-b-xl mx-[-4%]">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/5 h-1.5 bg-charcoal/60 rounded-b-md" />
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -left-4 sm:-left-10 top-[12%] float-y">
        <div className="bg-white shadow-xl px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-3 border border-soft-beige/50">
          <span className="ping-dot w-2.5 h-2.5 rounded-full bg-coral-pink" />
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-charcoal/50">Calendar</div>
            <div className="text-xs sm:text-sm font-semibold text-charcoal">Client call confirmed</div>
          </div>
        </div>
      </div>

      <div className="absolute -right-2 sm:-right-8 top-[46%] float-y-slow" style={{ animationDelay: '-3s' }}>
        <div className="bg-charcoal text-warm-ivory shadow-xl px-3 py-2.5 sm:px-4 sm:py-3 w-36 sm:w-44">
          <div className="text-[10px] sm:text-xs uppercase tracking-wider text-coral-pink mb-2">Brand palette</div>
          <div className="flex gap-1.5">
            <span className="flex-1 h-5 sm:h-6 bg-coral-pink" />
            <span className="flex-1 h-5 sm:h-6 bg-warm-ivory" />
            <span className="flex-1 h-5 sm:h-6 bg-soft-beige" />
            <span className="flex-1 h-5 sm:h-6 bg-white" />
          </div>
        </div>
      </div>

      <div className="absolute left-[8%] -bottom-10 sm:-bottom-12 float-y" style={{ animationDelay: '-1.5s' }}>
        <div className="bg-white shadow-xl px-3 py-2.5 sm:px-4 sm:py-3 border border-soft-beige/50 flex items-center gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-coral-pink/15 text-coral-pink flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-charcoal/50">Social</div>
            <div className="text-xs sm:text-sm font-semibold text-charcoal">
              Post scheduled<span className="caret-blink text-coral-pink">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
