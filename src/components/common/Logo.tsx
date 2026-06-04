import { SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  type?: 'full' | 'icon';
  theme?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ type = 'full', theme = 'light', ...props }: LogoProps) {
  // Determine colors based on theme
  const textColor = theme === 'light' ? '#1A1A1A' : '#FAFAFA';
  const counterColor = theme === 'light' ? '#FAFAFA' : '#0f172a';

  return (
    <svg
      viewBox="0 0 1000 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      {...props}
    >
      <defs>
        {/* Sky blue to electric blue gradient as seen in the attached logo */}
        <linearGradient id="trdc-blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#30C3F2" />
          <stop offset="60%" stopColor="#25A5E3" />
          <stop offset="100%" stopColor="#1E73BE" />
        </linearGradient>
      </defs>

      {/* Stylized "TRDC" Logo Mark */}
      <g>
        {/* Letter T */}
        <path
          d="M 12 18 L 475 18 L 475 75 L 210 75 L 210 230 L 110 230 L 110 75 L 12 75 Z"
          fill="url(#trdc-blue-grad)"
        />
        {/* T bottom slant at the very left */}
        <path
          d="M 12 18 L 0 45 L 12 75 Z"
          fill="url(#trdc-blue-grad)"
        />

        {/* Letter R */}
        <path
          d="M 218 105 L 430 105 C 485 105 520 125 520 162 C 520 195 485 210 430 210 L 430 230 L 525 230 L 525 215 L 450 150 C 480 145 495 130 495 118 C 495 102 470 95 430 95 L 218 95 Z"
          fill="url(#trdc-blue-grad)"
        />
        {/* R lower leg and inner carve */}
        <path
          d="M 432 188 L 330 188 L 330 230 L 432 230 L 528 230 L 455 188 Z"
          fill="url(#trdc-blue-grad)"
        />

        {/* Letter D (Contains Transformer outline in the center) */}
        <path
          d="M 520 18 C 520 18 690 18 730 18 C 790 18 840 55 840 124 C 840 192 790 230 730 230 L 590 230 L 590 18 Z"
          fill="url(#trdc-blue-grad)"
        />
        {/* Inner Counter/Knockout of D */}
        <path
          d="M 645 58 L 730 58 C 765 58 790 78 790 124 C 790 170 765 190 730 190 L 645 190 Z"
          fill={counterColor} /* This creates the clear shape for transformer */
        />
        {/* If the parent container is dark, we make the counter match it or remain transparent. 
            To remain absolutely correct and transparent, let's draw the transformer directly on the cutout,
            referencing white or dark colors. Since the background of the image is light, having white cutout inside D is perfect. */}

        {/* Transformer Icon inside the D (matches the attached illustration) */}
        <g transform="translate(685, 82)">
          {/* Conservator tank (rotary dial) */}
          <circle cx="8" cy="12" r="5" stroke="#1E73BE" strokeWidth="2.5" fill="none" />
          <line x1="12" y1="15" x2="16" y2="18" stroke="#1E73BE" strokeWidth="2.5" />
          
          {/* Main transformer tank body */}
          <rect x="18" y="24" width="55" height="42" rx="4" fill="url(#trdc-blue-grad)" stroke="#1E73BE" strokeWidth="2" />
          
          {/* Core/cooling tubes (radiator fins) */}
          <line x1="28" y1="29" x2="28" y2="61" stroke="#FAFAFA" strokeWidth="3" strokeLinecap="round" />
          <line x1="36" y1="29" x2="36" y2="61" stroke="#FAFAFA" strokeWidth="3" strokeLinecap="round" />
          <line x1="44" y1="29" x2="44" y2="61" stroke="#FAFAFA" strokeWidth="3" strokeLinecap="round" />
          <line x1="52" y1="29" x2="52" y2="61" stroke="#FAFAFA" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="29" x2="60" y2="61" stroke="#FAFAFA" strokeWidth="3" strokeLinecap="round" />
          
          {/* Bushing connector bars (on top) */}
          <line x1="26" y1="24" x2="26" y2="10" stroke="#1E73BE" strokeWidth="2.5" />
          <line x1="45" y1="24" x2="45" y2="10" stroke="#1E73BE" strokeWidth="2.5" />
          <line x1="64" y1="24" x2="64" y2="10" stroke="#1E73BE" strokeWidth="2.5" />

          {/* Bushing insulators (3 rings per bushing) */}
          <g fill="#1E73BE">
            <rect x="22" y="11" width="8" height="3" rx="1" />
            <rect x="22" y="15" width="8" height="3" rx="1" />
            <rect x="22" y="19" width="8" height="3" rx="1" />

            <rect x="41" y="11" width="8" height="3" rx="1" />
            <rect x="41" y="15" width="8" height="3" rx="1" />
            <rect x="41" y="19" width="8" height="3" rx="1" />

            <rect x="60" y="11" width="8" height="3" rx="1" />
            <rect x="60" y="15" width="8" height="3" rx="1" />
            <rect x="60" y="19" width="8" height="3" rx="1" />
          </g>

          {/* Transformer feet */}
          <line x1="24" y1="66" x2="36" y2="66" stroke="#1E73BE" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="56" y1="66" x2="68" y2="66" stroke="#1E73BE" strokeWidth="4.5" strokeLinecap="round" />
        </g>

        {/* Letter C */}
        <path
          d="M 765 18 C 765 18 970 18 985 18 L 1000 45 L 985 75 C 980 75 865 75 865 75 C 865 75 865 170 865 170 C 865 170 980 170 985 170 L 1000 198 L 985 230 C 970 230 765 230 765 230 C 765 230 765 18 765 18 Z"
          fill="url(#trdc-blue-grad)"
        />
      </g>

      {/* Typography block below the TRDC logo mark */}
      {type === 'full' && (
        <g>
          {/* Line 1: TRAFOVOLT RESEARCH AND */}
          <text
            x="500"
            y="292"
            textAnchor="middle"
            fill={textColor}
            fontSize="45"
            fontWeight="900"
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="0.1em"
          >
            TRAFOVOLT RESEARCH AND
          </text>
          {/* Line 2: DEVELOPMENT CENTRE */}
          <text
            x="500"
            y="348"
            textAnchor="middle"
            fill={textColor}
            fontSize="45"
            fontWeight="900"
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="0.1em"
          >
            DEVELOPMENT CENTRE
          </text>
        </g>
      )}
    </svg>
  );
}
