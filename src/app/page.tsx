import FlexCarousel from "@/components/FlexCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col">
      <section className="flex flex-col items-center gap-5 px-6 text-center">
        <span className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Mangas · Jeux vidéo · Collectors
        </span>

        <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both font-komika text-5xl sm:text-7xl">
          Apex Anime
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Ta boutique de mangas et de jeux vidéo. Nouveautés, éditions
          collector, figurines et pépites rares : retrouve tout ce que tu aimes,
          livré directement chez toi.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/mangas"
            className="rounded-full bg-[#4CC9F0] px-6 py-3 text-sm font-medium text-white  dark:bg-white dark:text-black"
          >
            Voir les mangas
          </Link>
          <Link
            href="/jeux-video"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Voir les jeux vidéo
          </Link>
        </div>
      </section>

      <div className="animate-in fade-in duration-1000 delay-500 fill-mode-both relative h-[700px] w-full">
        <div className="h-full">
          <FlexCarousel />
        </div>
      </div>
    </div>
  );
}
