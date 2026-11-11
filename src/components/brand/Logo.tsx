import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  variant?: 'light' | 'dark';
};

export default function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="AUREVANT home">
      <Image
        src="/images/Aurevant%20Virtual%20Assistant%20Services%20Logo.png"
        alt="AUREVANT Virtual Assistant Services"
        width={2048}
        height={682}
        priority
        sizes="(max-width: 640px) 42vw, (max-width: 1024px) 190px, 230px"
        className="h-10 w-auto max-w-[48vw] object-contain object-left sm:h-11 lg:h-12"
      />
    </Link>
  );
}
