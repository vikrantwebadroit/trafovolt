import { HTMLAttributes } from 'react';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'full' | 'icon';
  theme?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ theme = 'light', className = '', ...props }: LogoProps) {
  const isDarkTheme = theme === 'dark';

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 ${
        isDarkTheme
          ? 'bg-white p-2 shadow-lg border border-white/10 hover:shadow-xl'
          : 'bg-white p-1.5 shadow-sm hover:shadow-md border border-slate-100'
      } ${className}`}
      {...props}
    >
      <img
        src="https://nggpowertech.com/trafovolt/trafovoltlogo.jpeg"
        alt="Trafovolt Research and Development Centre"
        className="h-full w-auto object-contain max-h-full rounded-lg"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // If HTTPS has SSL validation issues on the remote server, gracefully fallback to HTTP.
          const target = e.target as HTMLImageElement;
          if (target.src.startsWith('https://')) {
            target.src = 'http://nggpowertech.com/trafovolt/trafovoltlogo.jpeg';
          }
        }}
      />
    </div>
  );
}
