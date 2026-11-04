type Item = { src: string; alt: string; className?: string };

export default function Marquee({
  items,
  duration = 30,
  reverse = false,
  className = "",
}: {
  items: Item[];
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  const track = (hidden: boolean) => (
    <div
      className="marquee-track flex shrink-0 items-center gap-8 pr-16"
      aria-hidden={hidden || undefined}
      style={{
        animationDuration: `${duration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {items.map((it, i) => (
        <img
          key={i}
          src={it.src}
          alt={hidden ? "" : it.alt}
          className={`block w-auto shrink-0 ${it.className ?? "h-30"}`}
          draggable={false}
        />
      ))}
    </div>
  );

  return (
    <div className={`marquee flex w-full overflow-hidden ${className}`}>
      {track(false)}
      {track(true)}
    </div>
  );
}
