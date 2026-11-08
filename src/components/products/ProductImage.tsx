import type { ReactNode } from "react";
import type { CategorySlug, ProductImageKind } from "@/data/catalog";

type Palette = { from: string; to: string; accent: string; deep: string };

const palettes: Record<CategorySlug, Palette> = {
  electronics: { from: "#e9f7f0", to: "#c9ecdc", accent: "#0f766e", deep: "#134e4a" },
  vehicles: { from: "#eef6ea", to: "#d3e9c9", accent: "#15803d", deep: "#14532d" },
  property: { from: "#eaf5f1", to: "#cfe9e0", accent: "#0f766e", deep: "#115e59" },
  fashion: { from: "#fbf2ec", to: "#f0dccd", accent: "#b45309", deep: "#7c2d12" },
  "home-garden": { from: "#f4f2e8", to: "#e4dfc9", accent: "#4d7c0f", deep: "#365314" },
  services: { from: "#edf3f4", to: "#d5e4e6", accent: "#0e7490", deep: "#164e63" },
  agriculture: { from: "#f0f7e6", to: "#dcecc1", accent: "#4d7c0f", deep: "#3f6212" },
  jobs: { from: "#f1f3f8", to: "#dde1ec", accent: "#334155", deep: "#1e293b" },
};

function renderScene(
  kind: ProductImageKind,
  color: string,
  deep: string
): ReactNode {
  switch (kind) {
    case "phone":
      return (
        <g>
          <rect x="252" y="78" width="152" height="300" rx="28" fill={color} />
          <rect x="264" y="92" width="128" height="272" rx="20" fill="#ffffff" opacity="0.95" />
          <rect x="304" y="102" width="44" height="8" rx="4" fill={color} opacity="0.35" />
          <rect x="280" y="136" width="92" height="58" rx="12" fill={color} opacity="0.16" />
          <circle cx="296" cy="216" r="10" fill={color} opacity="0.35" />
          <circle cx="328" cy="216" r="10" fill={color} opacity="0.25" />
          <circle cx="360" cy="216" r="10" fill={color} opacity="0.18" />
          <rect x="280" y="250" width="92" height="10" rx="5" fill={color} opacity="0.2" />
          <rect x="280" y="270" width="64" height="10" rx="5" fill={color} opacity="0.14" />
          <circle cx="328" cy="336" r="12" fill="none" stroke={color} strokeWidth="3" opacity="0.5" />
        </g>
      );
    case "laptop":
      return (
        <g>
          <rect x="170" y="132" width="300" height="196" rx="16" fill={color} />
          <rect x="186" y="148" width="268" height="164" rx="8" fill="#f8fafc" />
          <rect x="204" y="166" width="120" height="10" rx="5" fill={color} opacity="0.3" />
          <rect x="204" y="188" width="232" height="8" rx="4" fill={color} opacity="0.16" />
          <rect x="204" y="206" width="200" height="8" rx="4" fill={color} opacity="0.12" />
          <rect x="204" y="224" width="216" height="8" rx="4" fill={color} opacity="0.12" />
          <path d="M120 328h400l18 28H102z" fill="#cbd5e1" />
          <rect x="282" y="336" width="76" height="8" rx="4" fill="#94a3b8" />
        </g>
      );
    case "car":
      return (
        <g>
          <path
            d="M132 318c0-10 8-18 18-18h24l34-52c8-12 22-20 38-20h120c16 0 30 8 38 20l34 52h28c10 0 18 8 18 18v14c0 6-5 10-10 10H142c-5 0-10-4-10-10z"
            fill={color}
          />
          <path d="M232 250c6-9 16-14 27-14h96c11 0 21 5 27 14l26 44H206z" fill="#f8fafc" opacity="0.9" />
          <rect x="292" y="236" width="6" height="48" fill={color} opacity="0.4" />
          <circle cx="212" cy="352" r="30" fill="#1f2937" />
          <circle cx="212" cy="352" r="13" fill="#e5e7eb" />
          <circle cx="452" cy="352" r="30" fill="#1f2937" />
          <circle cx="452" cy="352" r="13" fill="#e5e7eb" />
          <rect x="152" y="292" width="30" height="10" rx="5" fill="#fde68a" />
          <rect x="486" y="292" width="22" height="10" rx="5" fill="#fca5a5" />
        </g>
      );
    case "motorbike":
      return (
        <g>
          <circle cx="212" cy="330" r="46" fill="#1f2937" />
          <circle cx="212" cy="330" r="18" fill="#e5e7eb" />
          <circle cx="444" cy="330" r="46" fill="#1f2937" />
          <circle cx="444" cy="330" r="18" fill="#e5e7eb" />
          <path d="M212 330l52-70h58l40 70" stroke={color} strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M264 260h108l18-34" stroke={color} strokeWidth="12" fill="none" strokeLinecap="round" />
          <rect x="286" y="232" width="76" height="18" rx="9" fill="#f8fafc" />
          <circle cx="352" cy="208" r="16" fill="#fde68a" />
          <path d="M362 330h56" stroke={color} strokeWidth="12" strokeLinecap="round" />
        </g>
      );
    case "house":
      return (
        <g>
          <rect x="190" y="216" width="260" height="160" rx="6" fill="#f8fafc" />
          <path d="M168 222 320 110l152 112z" fill={color} />
          <rect x="372" y="150" width="26" height="54" fill={color} opacity="0.7" />
          <rect x="252" y="292" width="56" height="84" rx="4" fill={color} />
          <rect x="336" y="248" width="52" height="44" rx="4" fill={color} opacity="0.25" />
          <rect x="216" y="260" width="24" height="24" rx="3" fill={color} opacity="0.2" />
          <rect x="216" y="300" width="24" height="24" rx="3" fill={color} opacity="0.2" />
          <path d="M150 376h340" stroke={color} strokeWidth="8" strokeLinecap="round" opacity="0.4" />
        </g>
      );
    case "land":
      return (
        <g>
          <path d="M150 330l170-60 170 60-170 60z" fill={color} opacity="0.22" />
          <path d="M150 330v34l170 60 170-60v-34" fill="none" stroke={color} strokeWidth="6" opacity="0.6" />
          <path d="M320 390V250" stroke={color} strokeWidth="5" opacity="0.45" />
          <circle cx="320" cy="236" r="24" fill="#fde68a" />
          <path d="M320 236l36-36" stroke="#fde68a" strokeWidth="8" strokeLinecap="round" />
          <rect x="432" y="318" width="64" height="44" rx="5" fill="#f8fafc" />
          <path d="M444 362v22M484 362v22" stroke={color} strokeWidth="6" strokeLinecap="round" />
          <path d="M446 334h36M446 346h24" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.4" />
        </g>
      );
    case "dress":
      return (
        <g>
          <path d="M320 132v24" stroke={color} strokeWidth="8" strokeLinecap="round" />
          <circle cx="320" cy="118" r="10" fill="none" stroke={color} strokeWidth="6" />
          <path d="M260 160l60-16 60 16-20 46h-80z" fill={color} />
          <path d="M280 206h80l52 150c-28 14-56 20-92 20s-64-6-92-20z" fill={color} opacity="0.85" />
          <path d="M300 210c8 30 34 46 20 66" stroke="#ffffff" strokeWidth="4" opacity="0.45" fill="none" />
          <path d="M340 210c-8 30-34 46-20 66" stroke="#ffffff" strokeWidth="4" opacity="0.3" fill="none" />
        </g>
      );
    case "sneakers":
      return (
        <g>
          <path
            d="M170 300c0-20 16-34 36-30l60 12 10-22c4-10 16-16 26-12l32 12c10 4 16 14 26 18l70 24c22 8 36 28 36 52v12H190c-11 0-20-9-20-20z"
            fill={color}
          />
          <path d="M200 328h420" stroke="#ffffff" strokeWidth="8" opacity="0.55" />
          <path d="M296 268l16-32M320 274l16-32M344 280l16-30" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
          <rect x="170" y="356" width="440" height="16" rx="8" fill="#e5e7eb" />
          <rect x="170" y="356" width="440" height="6" rx="3" fill="#cbd5e1" />
        </g>
      );
    case "fridge":
      return (
        <g>
          <rect x="244" y="110" width="156" height="290" rx="14" fill="#f8fafc" stroke={color} strokeWidth="6" />
          <path d="M244 220h156" stroke={color} strokeWidth="6" />
          <rect x="262" y="134" width="8" height="60" rx="4" fill={color} opacity="0.55" />
          <rect x="262" y="244" width="8" height="80" rx="4" fill={color} opacity="0.55" />
          <rect x="330" y="160" width="36" height="24" rx="4" fill={color} opacity="0.15" />
          <rect x="330" y="270" width="36" height="24" rx="4" fill={color} opacity="0.15" />
          <path d="M228 400h188" stroke={color} strokeWidth="10" strokeLinecap="round" opacity="0.35" />
        </g>
      );
    case "sofa":
      return (
        <g>
          <rect x="180" y="230" width="280" height="96" rx="22" fill={color} opacity="0.85" />
          <rect x="156" y="262" width="40" height="110" rx="18" fill={color} />
          <rect x="444" y="262" width="40" height="110" rx="18" fill={color} />
          <rect x="200" y="276" width="108" height="54" rx="12" fill="#f8fafc" opacity="0.9" />
          <rect x="332" y="276" width="108" height="54" rx="12" fill="#f8fafc" opacity="0.9" />
          <rect x="196" y="342" width="248" height="34" rx="10" fill={color} />
          <path d="M212 376v20M428 376v20" stroke={color} strokeWidth="10" strokeLinecap="round" />
        </g>
      );
    case "solar":
      return (
        <g>
          <circle cx="480" cy="142" r="34" fill="#fde68a" />
          <path
            d="M480 92v-14M480 206v14M530 142h14M416 142h-14M516 106l10-10M444 178l-10 10M516 178l10 10M444 106l-10-10"
            stroke="#fde68a"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path d="M186 330l60-128h218l-40 128z" fill={color} />
          <path d="M246 202l-40 128M320 202l-30 128M394 202l-20 128" stroke="#ffffff" strokeWidth="4" opacity="0.5" />
          <path d="M190 260h232M204 310h216" stroke="#ffffff" strokeWidth="4" opacity="0.5" />
          <path d="M392 330v46M320 376h120" stroke={color} strokeWidth="10" strokeLinecap="round" />
        </g>
      );
    case "generator":
      return (
        <g>
          <rect x="180" y="236" width="280" height="130" rx="16" fill={color} />
          <rect x="180" y="236" width="280" height="26" rx="13" fill="#ffffff" opacity="0.22" />
          <circle cx="424" cy="300" r="34" fill="#f8fafc" opacity="0.9" />
          <circle cx="424" cy="300" r="20" fill={color} opacity="0.5" />
          <path d="M256 236v-34h28v34" stroke={color} strokeWidth="10" fill="none" />
          <rect x="214" y="286" width="90" height="52" rx="8" fill="#ffffff" opacity="0.2" />
          <circle cx="212" cy="374" r="18" fill="#1f2937" />
          <circle cx="430" cy="374" r="18" fill="#1f2937" />
        </g>
      );
    case "sewing":
      return (
        <g>
          <rect x="170" y="330" width="300" height="26" rx="8" fill={color} />
          <path d="M214 330v-96c0-16 12-28 28-28h40" stroke={color} strokeWidth="20" fill="none" />
          <path d="M282 206h64v20" stroke={color} strokeWidth="20" fill="none" />
          <path d="M336 226v54" stroke={color} strokeWidth="6" />
          <circle cx="250" cy="300" r="26" fill="none" stroke={color} strokeWidth="8" />
          <path d="M250 274v52M224 300h52" stroke={color} strokeWidth="4" opacity="0.45" />
          <rect x="370" y="286" width="70" height="44" rx="6" fill={color} opacity="0.25" />
          <path d="M180 356h280" stroke="#ffffff" strokeWidth="6" opacity="0.5" />
        </g>
      );
    case "sack":
      return (
        <g>
          <path
            d="M250 214c-24 18-38 46-38 82v70c0 14 12 24 26 24h164c14 0 26-10 26-24v-70c0-36-14-64-38-82z"
            fill={color}
          />
          <path
            d="M250 214c18 10 40 16 70 16s52-6 70-16l-14-26c-16 10-36 14-56 14s-40-4-56-14z"
            fill={color}
            opacity="0.75"
          />
          <rect x="286" y="296" width="68" height="52" rx="6" fill="#f8fafc" opacity="0.9" />
          <path d="M300 312h40M300 326h28" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.45" />
          <path d="M320 214v14" stroke="#ffffff" strokeWidth="6" opacity="0.5" />
        </g>
      );
    case "cocoa":
      return (
        <g>
          <path
            d="M250 214c-24 18-38 46-38 82v70c0 14 12 24 26 24h164c14 0 26-10 26-24v-70c0-36-14-64-38-82z"
            fill={color}
          />
          <path
            d="M250 214c18 10 40 16 70 16s52-6 70-16l-14-26c-16 10-36 14-56 14s-40-4-56-14z"
            fill={color}
            opacity="0.75"
          />
          <rect x="286" y="296" width="68" height="52" rx="6" fill="#f8fafc" opacity="0.9" />
          <path d="M300 312h40M300 326h28" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.45" />
          <circle cx="248" cy="392" r="7" fill={deep} />
          <circle cx="270" cy="398" r="6" fill={deep} opacity="0.8" />
          <circle cx="394" cy="392" r="6" fill={deep} opacity="0.7" />
        </g>
      );
    case "desk":
      return (
        <g>
          <rect x="196" y="150" width="248" height="160" rx="12" fill={color} />
          <rect x="210" y="164" width="220" height="132" rx="6" fill="#f8fafc" />
          <rect x="228" y="184" width="120" height="10" rx="5" fill={color} opacity="0.3" />
          <rect x="228" y="206" width="180" height="8" rx="4" fill={color} opacity="0.15" />
          <rect x="228" y="224" width="150" height="8" rx="4" fill={color} opacity="0.15" />
          <rect x="160" y="310" width="320" height="16" rx="8" fill={color} opacity="0.6" />
          <rect x="188" y="326" width="14" height="60" fill={color} opacity="0.5" />
          <rect x="438" y="326" width="14" height="60" fill={color} opacity="0.5" />
          <rect x="270" y="282" width="100" height="28" rx="6" fill="#e5e7eb" />
        </g>
      );
    case "briefcase":
      return (
        <g>
          <path d="M278 220v-24c0-12 10-22 22-22h20c12 0 22 10 22 22v24" fill="none" stroke={color} strokeWidth="12" />
          <rect x="200" y="220" width="240" height="150" rx="16" fill={color} />
          <rect x="200" y="272" width="240" height="10" fill="#ffffff" opacity="0.22" />
          <rect x="304" y="262" width="32" height="30" rx="6" fill="#f8fafc" opacity="0.9" />
          <circle cx="320" cy="277" r="5" fill={color} />
        </g>
      );
  }
}

type ProductImageProps = {
  kind: ProductImageKind;
  category: CategorySlug;
  label: string;
  seed: string;
  accent?: string;
  className?: string;
};

export default function ProductImage({
  kind,
  category,
  label,
  seed,
  accent,
  className,
}: ProductImageProps) {
  const palette = palettes[category];
  const color = accent ?? palette.accent;
  const gradientId = `product-bg-${seed}`;

  return (
    <svg
      viewBox="0 0 640 480"
      role="img"
      aria-label={`${label} — sample listing illustration`}
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={palette.from} />
          <stop offset="1" stopColor={palette.to} />
        </linearGradient>
      </defs>
      <rect width="640" height="480" fill={`url(#${gradientId})`} />
      <circle cx="556" cy="86" r="120" fill="#ffffff" opacity="0.3" />
      <circle cx="76" cy="410" r="96" fill="#ffffff" opacity="0.2" />
      <ellipse cx="320" cy="408" rx="196" ry="24" fill={palette.deep} opacity="0.1" />
      {renderScene(kind, color, palette.deep)}
    </svg>
  );
}
