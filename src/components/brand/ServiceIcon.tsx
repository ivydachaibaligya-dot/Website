import type { ServiceIcon as ServiceIconName } from '@/lib/services';

const paths: Record<ServiceIconName, React.ReactNode> = {
  assistant: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 13h5M8 16h8" />
      <circle cx="17" cy="14" r="0.5" fill="currentColor" />
    </>
  ),
  design: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10.5" cy="7" r="1" />
      <circle cx="15" cy="7.5" r="1" />
    </>
  ),
  web: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M9 9l-2 2 2 2M15 9l2 2-2 2" />
    </>
  ),
  social: (
    <>
      <path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.4-5.1A8.5 8.5 0 1 1 21 12Z" />
      <path d="M12 15.5s-3.5-2-3.5-4.4A1.9 1.9 0 0 1 12 9.9a1.9 1.9 0 0 1 3.5 1.2c0 2.4-3.5 4.4-3.5 4.4Z" />
    </>
  ),
  digital: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4a3 3 0 0 1 3 3V14M14 17.5h-4a3 3 0 0 1-3-3V10" />
    </>
  ),
};

export default function ServiceIcon({ name, className = 'w-6 h-6' }: { name: ServiceIconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
