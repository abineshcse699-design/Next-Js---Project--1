const threads = [
  "M 10 120 C 140 80, 260 160, 340 130 S 470 90, 520 140",
  "M 0 220 C 120 250, 240 190, 330 220 S 460 260, 520 220",
  "M 10 320 C 150 300, 250 360, 340 320 S 470 280, 520 300",
  "M 20 420 C 140 460, 260 400, 340 420 S 460 460, 520 380",
  "M 0 60 C 130 40, 240 100, 330 90 S 470 60, 520 90",
];

const nodes = [
  { cx: 520, cy: 140, r: 5, delay: "0s" },
  { cx: 520, cy: 220, r: 4, delay: "0.4s" },
  { cx: 520, cy: 300, r: 6, delay: "0.9s" },
  { cx: 520, cy: 380, r: 4, delay: "1.3s" },
  { cx: 520, cy: 90, r: 4, delay: "1.7s" },
  { cx: 470, cy: 235, r: 3, delay: "0.6s" },
];

export default function SignalWeave() {
  return (
    <svg
      viewBox="0 0 560 500"
      fill="none"
      className="h-auto w-full max-w-[560px]"
      role="img"
      aria-label="Animated illustration of signal threads converging into a network of nodes"
    >
      <defs>
        <linearGradient id="threadGradient" x1="0" y1="0" x2="560" y2="0">
          <stop offset="0%" stopColor="#6C4CF1" stopOpacity="0" />
          <stop offset="45%" stopColor="#6C4CF1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3E8BFF" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3E8BFF" />
          <stop offset="100%" stopColor="#6C4CF1" />
        </radialGradient>
        <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {threads.map((d, i) => (
        <path
          key={d}
          d={d}
          stroke="url(#threadGradient)"
          strokeWidth={i === 2 ? 2 : 1.3}
          strokeLinecap="round"
          strokeDasharray="8 6"
          className="animate-flow"
          style={{ animationDelay: `${i * 0.5}s`, animationDuration: "8s" }}
        />
      ))}

      <g filter="url(#softGlow)">
        {nodes.map((n) => (
          <circle
            key={`${n.cx}-${n.cy}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="url(#nodeGlow)"
            className="animate-pulse-node origin-center"
            style={{ animationDelay: n.delay }}
          />
        ))}
      </g>

      <g stroke="#C9BFFF" strokeWidth="1" opacity="0.5">
        <line x1="520" y1="140" x2="470" y2="235" />
        <line x1="470" y1="235" x2="520" y2="300" />
        <line x1="520" y1="90" x2="520" y2="140" />
        <line x1="520" y1="300" x2="520" y2="380" />
      </g>
    </svg>
    
  );
}