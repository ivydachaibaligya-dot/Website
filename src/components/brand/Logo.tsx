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
        sizes="(max-width: 640px) 48vw, (max-width: 1024px) 210px, 250px"
        className="h-11 w-auto max-w-[52vw] object-contain object-left sm:h-12 sm:max-w-[250px] lg:h-14 lg:max-w-[270px]"
      />
    </Link>
  );
}
