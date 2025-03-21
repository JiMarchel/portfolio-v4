"use client"
import { lilitaOne } from '@/config/fonts'
import { Image, Popover, PopoverContent, PopoverTrigger, Tooltip } from '@heroui/react'
import React from 'react'

const About = () => {
  return (
    <div>
      <div className='flex items-center'>
        <h1 className='font-bold text-2xl sm:text-4xl '>Haiii again, I&apos;m
          <Tooltip content={
            <Image alt='M Jimmy Marchel' src='/me.webp' isBlurred className='col-span-1 m-2 max-h-96' />} placement='bottom'>
            <span className={`${lilitaOne.className} border-b-2 border-purple-800 hidden sm:inline-block ml-3 cursor-default`}>Jimmy</span>
          </Tooltip>
          .</h1>
        <Popover >
          <PopoverTrigger>
            <span className={`${lilitaOne.className} font-bold text-2xl sm:text-4xl  border-b-2 border-purple-800 ml-2 sm:hidden cursor-default`}>Jimmy.</span>
          </PopoverTrigger>
          <PopoverContent>
            <Image alt='M Jimmy Marchel' src='/me.webp' isBlurred className='col-span-1 m-2 max-h-96' />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default About
