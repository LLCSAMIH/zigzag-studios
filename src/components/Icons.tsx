const defaultProps = {
  width: "1em",
  height: "1em",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

function Svg({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children: React.ReactNode }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...defaultProps} {...props}>
      {children}
    </svg>
  );
}

// — Service icons —

export function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </Svg>
  );
}

export function FloorPlanIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 12h8v9" />
      <path d="M11 3v9h10" />
    </Svg>
  );
}

export function Tour3DIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </Svg>
  );
}

export function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </Svg>
  );
}

export function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <rect x="2" y="4" width="15" height="16" rx="2" />
      <path d="M17 10l5-3v10l-5-3" />
    </Svg>
  );
}

export function TwilightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M17 18a5 5 0 0 0-10 0" />
      <line x1="12" y1="9" x2="12" y2="2" />
      <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
      <line x1="1" y1="18" x2="3" y2="18" />
      <line x1="21" y1="18" x2="23" y2="18" />
      <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
      <line x1="23" y1="22" x2="1" y2="22" />
    </Svg>
  );
}

export function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </Svg>
  );
}

export function DroneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <path d="M4 8a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3" />
      <path d="M14 8a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3" />
      <path d="M4 16a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3" />
      <path d="M14 16a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3" />
      <path d="M8 10l-4-2" />
      <path d="M16 10l4-2" />
      <path d="M8 14l-4 2" />
      <path d="M16 14l4 2" />
    </Svg>
  );
}

export function StagingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
    </Svg>
  );
}

// — UI icons —

export function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Svg>
  );
}

export function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </Svg>
  );
}

export function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg fill="currentColor" stroke="none" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </Svg>
  );
}

// Map service numbers to icon components
export const serviceIconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "01": CameraIcon,
  "02": FloorPlanIcon,
  "03": Tour3DIcon,
  "04": DownloadIcon,
  "05": VideoIcon,
  "06": TwilightIcon,
  "07": SunIcon,
  "08": DroneIcon,
  "09": StagingIcon,
};
