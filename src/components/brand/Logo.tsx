import Link from 'next/link';

type LogoProps = {
  variant?: 'light' | 'dark';
};

export default function Logo({ variant = 'dark' }: LogoProps) {
  const wordmarkColor = variant === 'dark' ? 'text-charcoal' : 'text-warm-ivory';
  const descriptorColor = variant === 'dark' ? 'text-charcoal/60' : 'text-warm-ivory/60';

  return (
    <Link href="/" className="flex items-center space-x-3" aria-label="AUREVANT home">
      <div className="w-10 h-10 bg-coral-pink rounded-sm flex items-center justify-center">
        <span className="text-white font-serif font-semibold text-xl">A</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-lg font-semibold tracking-[0.25em] ${wordmarkColor}`}>AUREVANT</span>
        <span className={`text-[10px] font-medium tracking-[0.2em] uppercase mt-1 ${descriptorColor}`}>
          Global Business Support
        </span>
      </div>
    </Link>
  );
}
