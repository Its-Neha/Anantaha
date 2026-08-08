/**
 * Delicate gold line-art marks, each resting inside a very faint
 * circular ring — never flat filled vector icons.
 */

type IconName = "strategy" | "product" | "cloud" | "security";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 0.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Strategy() {
  return (
    <>
      <circle cx="35" cy="37" r="13" {...stroke} />
      <circle cx="24.5" cy="25.5" r="6.5" {...stroke} />
      <circle cx="44.5" cy="27" r="4.6" {...stroke} />
      <circle cx="22.5" cy="47.5" r="7" {...stroke} />
      <circle cx="36" cy="49" r="5.4" {...stroke} />
      <path d="M26 28.5 44 45.5M44 28.5 26 45.5" {...stroke} strokeWidth={0.7} />
      <path d="M45 46.5 49.5 51" {...stroke} strokeWidth={0.7} />
      <circle cx="53" cy="54" r="3.4" {...stroke} />
      <circle cx="27.5" cy="19.5" r="1.5" fill="currentColor" />
      <circle cx="44" cy="21.5" r="1.2" fill="currentColor" />
    </>
  );
}

function Product() {
  return (
    <>
      <ellipse
        cx="36"
        cy="37"
        rx="15"
        ry="13.5"
        transform="rotate(-14 36 37)"
        {...stroke}
      />
      <ellipse
        cx="36"
        cy="36"
        rx="13.5"
        ry="12"
        transform="rotate(22 36 36)"
        {...stroke}
      />
      <circle cx="35.5" cy="36.5" r="9.4" {...stroke} />
      <path
        d="M45 24.5c5 4 6.5 10.5 4.5 16"
        {...stroke}
        strokeWidth={0.7}
        strokeDasharray="1 2.4"
      />
      <path
        d="M24 49.5c-4.6-4-6-10-4.5-15.5"
        {...stroke}
        strokeWidth={0.7}
        strokeDasharray="1 2.4"
      />
      <circle cx="46" cy="24" r="1.5" fill="currentColor" />
      <circle cx="23.5" cy="50.5" r="1.5" fill="currentColor" />
      <circle cx="20" cy="33" r="1.1" fill="currentColor" />
    </>
  );
}

function Cloud() {
  /* Four stacked data plates, the topmost drawn strongest. */
  const plate = (y: number, opacity: number) => (
    <path
      key={y}
      d={`M36 ${y - 7.5} 55 ${y} 36 ${y + 7.5} 17 ${y}Z`}
      {...stroke}
      opacity={opacity}
    />
  );
  return <>{[24, 32, 40, 48].map((y, i) => plate(y, 1 - i * 0.16))}</>;
}

function Security() {
  return (
    <>
      <path
        d="M36 19.5 52 25.5v13.2c0 9.6-7.6 15.1-16 18.3-8.4-3.2-16-8.7-16-18.3V25.5Z"
        {...stroke}
      />
      <path d="M36 21.5v34" {...stroke} strokeWidth={0.6} opacity={0.7} />
    </>
  );
}

const marks: Record<IconName, () => React.ReactElement> = {
  strategy: Strategy,
  product: Product,
  cloud: Cloud,
  security: Security,
};

export function CapabilityIcon({ name }: { name: IconName }) {
  const Mark = marks[name];
  return (
    <svg
      viewBox="0 0 72 72"
      className="h-28 w-28 text-gold"
      aria-hidden="true"
    >
      {/* faint containing ring */}
      <circle
        cx="36"
        cy="36"
        r="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.16"
      />
      <Mark />
    </svg>
  );
}
