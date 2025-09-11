import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Tools } from "@/components/tools";

export default function Home() {
  return (
    <main className="container h-full mx-auto max-w-2xl pt-12 sm:pt-24 px-6 flex-grow">
      <div className="space-y-10 sm:space-y-20 pb-20">
        <About />
        <Tools />
        <Projects />
        <Certifications />
        <Education />
        <footer className="mt-5 w-full flex flex-col items-center justify-center py-3 gap-1">
          <div className="flex items-center gap-1">
            <span className="text-default-600">Made with ❤️ and ☕ in</span>
            <p className="text-danger-500 cursor-default">Indonesia🇮🇩.</p>
          </div>
          <p className="font-thin ">Last updated August 2025</p>
        </footer>
      </div>
    </main>
  );
}
