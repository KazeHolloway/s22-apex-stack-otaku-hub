import Aurora from "@/components/Aurora";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-komika z-5">Apex Anime</h1>
        <div className="absolute w-full h-[600px]">
          <Aurora
            colorStops={["#ffffff", "#9aa0ad", "#ffffff"]}
            amplitude={1}
            blend={0.5}
            height={0.45}
            speed={1}
            glow={0.6}
            brightness={0.8}
            lightMode
          />
        </div>
      </main>
    </div>
  );
}
