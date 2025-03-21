"use client"
import { funSized, grapeNuts, lilitaOne } from "@/config/fonts"
import { Button, Link, Tooltip } from "@heroui/react"
import Image from "next/image"
import { VideoContent } from "./video-content"
import { siteConfig } from "@/config/site"
import { useState } from "react"
import { GithubIcon } from "./icons"
import { Globe } from "lucide-react"

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(siteConfig.listProjects.length / itemsPerPage);

  const currentItems = siteConfig.listProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)


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
        <h1 className="font-bold text-3xl sm:text-5xl ">🤘Projects</h1>
        <div className="space-y-3">
          {currentItems.map((v, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between my-2 gap-1">
                <h1 className={`${lilitaOne.className} text-2xl sm:text-3xl  motion-preset-blur-right   border-b-2 w-fit`}>{v.title}</h1>
                <div className="space-x-2">
                  {v.github !== null ? (
                    <Tooltip content="Source code of the project">

                      <Button size="sm" as={Link} href={v.github} color="secondary" variant="flat" startContent={<GithubIcon size={16} />} target="_blank">Github</Button>
                    </Tooltip>
                  ) : null}
                  {v.live !== null ? (
                    <Tooltip content="View the web directly">

                      <Button size="sm" as={Link} href={v.live} color="secondary" variant="flat" startContent={<Globe size={16} />} target="_blank">Live website</Button>
                    </Tooltip>
                  ) : null}

                </div>
              </div>
              <p className="font-medium text-xl motion-preset-fade ">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex  justify-between">
        <Button
          color="secondary"
          size="sm"
          variant="flat"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className={`${grapeNuts.className} mx-2`}>{currentPage} of {totalPages}</span> {/* Tambahkan penanda halaman */}
        <Button
          color="secondary"
          size="sm"
          variant="flat"
          onPress={() => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Projects
