type InfoPageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: {
    src: string;
    alt: string;
  };
};

export default function InfoPageHero({
  title,
  intro,
}: Partial<InfoPageHeroProps>) {
  return (
    <header className="relative overflow-hidden bg-[#dddee2] px-4 pt-32 pb-14 sm:px-6 lg:px-[0.46296vw] lg:pt-40 lg:pb-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h1 className="mt-5 text-[clamp(3.5rem,11vw,9rem)] leading-[0.82] font-bold uppercase">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
            {intro}
          </p>
        </div>
      </div>
    </header>
  );
}
