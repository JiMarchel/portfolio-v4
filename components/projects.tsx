"use client"
import { funSized } from "@/config/fonts"
import { Button, Link, Popover, PopoverContent, PopoverTrigger, Tooltip } from "@heroui/react"
import Image from "next/image"
import { VideoContent } from "./video-content"
import { siteConfig } from "@/config/site"
import { GithubIcon } from "./icons"
import { Download, Globe } from "lucide-react"

function Projects() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 text-3xl sm:text-6xl font-bold mb-10 sm:mb-20">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="motion-translate-x-loop-0 motion-rotate-loop-12 motion-duration-1500">👋</span>
          <h1>Haii, i&apos;m</h1>
          <h1 className={`${funSized.className} motion-scale-in-[0.5] motion-rotate-in-[-2deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur bg-purple-800 py-2 px-3 rounded-md`}>Jimmy</h1>
        </div>

        <div className="text-xl sm:text-2xl">
          <p className="inline-block">
            I&apos;m a software developer based in {" "}
            <span className="inline-flex align-middle mx-1">
              <Tooltip content={<VideoContent video="/indonesia.mp4" />} placement="bottom">
                <Image
                  src="/indo.png"
                  alt="indo"
                  width={50}
                  height={50}
                  className="h-4 sm:h-6"
                />
              </Tooltip>
            </span>
            Indonesia.
          </p>
        </div>
      </div>

      <div className="space-y-5 ">
        <h1 className="font-bold text-3xl sm:text-5xl ">🐱‍💻Some of my work</h1>
        <div className="flex gap-2 flex-wrap">
          {siteConfig.listProjects.map((v, i) => (
            <Popover key={i} placement="bottom">
              <PopoverTrigger>
                <Button variant="flat" startContent={<span className="border-r pr-1 border-slate-600 sm:pr-3"><v.icon /></span>} className="sm:p-7 sm:font-semibold sm:text-xl "> <span className="w-full border-b hover:border-none">{v.title}</span></Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2 max-w-sm">
                  <p className="text-small sm:text-lg font-bold">{v.title}</p>
                  <p className="text-tiny sm:text-medium">{v.description}</p>
                  <div className="space-x-2 mt-1">
                    {v.github !== null ? (
                      <Button size="sm" as={Link} href={v.github} color="secondary" variant="flat" startContent={<GithubIcon size={16} />} target="_blank">Github</Button>
                    ) : null}
                    {v.live !== null ? (
                      <Button size="sm" as={Link} href={v.live} color="secondary" variant="flat" startContent={<Globe size={16} />} target="_blank">Live website</Button>
                    ) : null}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
