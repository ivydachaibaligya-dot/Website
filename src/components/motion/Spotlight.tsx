'use client';

import type { PointerEvent, ReactNode } from 'react';

/** Tracks the pointer over `.service-card` children to position their hover glow. */
export default function Spotlight({ children, className }: { children: ReactNode; className?: string }) {
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = (event.target as HTMLElement).closest<HTMLElement>('.service-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <div className={className} onPointerMove={onPointerMove}>
      {children}
    </div>
  );
}
