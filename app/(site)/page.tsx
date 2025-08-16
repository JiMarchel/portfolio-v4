import About from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Tools } from "@/components/tools";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-20 pb-20">
      <About />
      <Tools />
      <Projects />
      <Certifications />
      <Education />
      <section className="mt-5 w-full flex flex-col items-center justify-center py-3 gap-1">
        <div className="flex items-center gap-1">
          <span className="text-default-600">Made with ❤️ and ☕ in</span>
          <p className="text-danger-500 cursor-default">Indonesia🇮🇩.</p>
        </div>
        <p className="font-thin ">Last updated August 2025</p>
      </section>
    </div>
  );
}
