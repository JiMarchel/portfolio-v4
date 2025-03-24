"use client"

import { Tooltip } from "@heroui/react"
import { VideoContent } from "./video-content"

export const Footer = () => {
  return (
    <footer className="mt-5 w-full flex flex-col items-center justify-center py-3 gap-1">
      <div className="flex items-center gap-1">
        <span className="text-default-600">Made with ❤️ and ☕ in</span>
        <Tooltip content={<VideoContent video="/indonesia.mp4" />} placement="top">
          <p className="text-danger-500 cursor-default">Indonesia🇮🇩.</p>
        </Tooltip>
      </div>
      <p className='font-thin '>Last updated March 2025</p>
    </footer>
  )
}
