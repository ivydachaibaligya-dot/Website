type Props = {
  variant?: 'light' | 'dark';
  grid?: boolean;
};

/** Decorative drifting brand-colour shapes. Purely visual, hidden from assistive tech. */
export default function AmbientBackground({ variant = 'light', grid = false }: Props) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {grid && <div className="ambient-grid" />}
      <div
        className="ambient-blob ambient-blob--rose"
        style={{ width: 420, height: 420, top: '-8%', right: '-6%', opacity: variant === 'dark' ? 0.5 : 1 }}
      />
      <div
        className="ambient-blob ambient-blob--beige"
        style={{ width: 360, height: 360, bottom: '-10%', left: '-8%', animationDelay: '-6s', opacity: variant === 'dark' ? 0.25 : 1 }}
      />
      <div
        className="ambient-blob ambient-blob--rose"
        style={{ width: 200, height: 200, top: '45%', left: '40%', animationDelay: '-12s', opacity: 0.5 }}
      />
    </div>
  );
}
