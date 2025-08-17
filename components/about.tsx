import { funSized } from "@/config/fonts";

export function About() {
  return (
    <div className="flex flex-col gap-3 text-3xl sm:text-6xl font-bold">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="motion-translate-x-loop-0 motion-rotate-loop-12 motion-duration-1500">
          👋
        </span>
        <h1>Haii, i&apos;m</h1>
        <h1
          className={`${funSized.className} motion-scale-in-[0.5] motion-rotate-in-[-2deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur bg-purple-800 py-2 px-3 rounded-md`}
        >
          Jimmy
        </h1>
      </div>
      <div className="text-xl sm:text-2xl space-y-1">
        <p className="font-medium">About Me</p>
        <p className="font-normal text-[1.1rem] text-muted-foreground">
          Hi there, I am Moch Jimmy Marchel. I enjoy writing Typescript and Rust
          🦀. I am interested in Programming Languages, CyberSecurity and I love
          to play CTF.
        </p>
      </div>
    </div>
  );
}

