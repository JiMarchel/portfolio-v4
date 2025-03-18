"use client"
import { funSized } from "@/config/fonts"
import Image from "next/image"

function Projects() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-10 text-3xl sm:text-6xl font-bold">
        <div className="flex flex-wrap gap-4">
          <span className="motion-translate-x-loop-0 motion-rotate-loop-12 motion-duration-1500">👋</span>
          <h1>Haiiii, i'm</h1>
          <h1 className={`${funSized.className}`}>Jimmy</h1>
        </div>

        <div className="text-xl sm:text-2xl">
          <p className="inline-block">
            I'm a software developer based in {" "}
            <span className="inline-flex align-middle mx-1">
              <Image
                src="/indo.png"
                alt="indo"
                width={50}
                height={50}
                className="h-4 sm:h-6"
              />
            </span>
            Indonesia.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
