"use client"
import { lilitaOne } from '@/config/fonts'
import { Button, ButtonGroup, Image, Link, Popover, PopoverContent, PopoverTrigger, Tooltip } from '@heroui/react'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { GithubIcon } from './icons'
import { siteConfig } from '@/config/site'

const About = () => {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2'>
          <h1 className='font-bold text-2xl sm:text-4xl '>Haiii again, I&apos;m
            <Tooltip content={
              <Image alt='M Jimmy Marchel' src='/me.webp' isBlurred className='col-span-1 m-2 max-h-96' />} placement='bottom'>
              <span className={`${lilitaOne.className} border-b-2 border-purple-800 hidden sm:inline-block ml-3 cursor-default`}>Jimmy.</span>
            </Tooltip>
          </h1>
          <Popover >
            <PopoverTrigger>
              <span className={`${lilitaOne.className} font-bold text-2xl sm:text-4xl  border-b-2 border-purple-800 sm:hidden cursor-default w-fit`}>Jimmy.</span>
            </PopoverTrigger>
            <PopoverContent>
              <Image alt='M Jimmy Marchel' src='/me.webp' isBlurred className='col-span-1 m-2 max-h-96' />
            </PopoverContent>
          </Popover>
        </div>
        <p className='font-medium text-lg sm:text-xl '>I am Mochammad Jimmy Marchel, a 6th-semester Informatics Engineering student at Muhammadiyah University of Sidoarjo, with 3 years of hands-on experience in self-taught web development. My journey has centered on honing full-stack development skills while actively exploring cutting-edge technologies and frameworks. Driven by a growth mindset, I thrive on learning new thing. </p>
        <div>
          <p className='font-bold text-lg sm:text-xl '>Get in touch</p>
          <ButtonGroup>
            <Tooltip content="Instagram" color="danger">
              <Button color='danger' variant='faded' isIconOnly as={Link} target='_blank' href={siteConfig.links.instagram}><Instagram /></Button>
            </Tooltip>
            <Tooltip content="Facebook" color='primary' placement='bottom'>
              <Button color='primary' variant='faded' isIconOnly as={Link} target='_blank' href={siteConfig.links.facebook} ><Facebook /></Button>
            </Tooltip>
            <Tooltip content="Github">
              <Button variant='faded' isIconOnly as={Link} target='_blank' href={siteConfig.links.github}><GithubIcon /></Button>
            </Tooltip>
            <Tooltip content="LinkedIn" color='primary' placement='bottom'>
              <Button color='primary' variant='faded' isIconOnly as={Link} target='_blank' href={siteConfig.links.linkedin}><Linkedin /></Button>
            </Tooltip>
            <Tooltip content="Gmail" color='danger'>
              <Button color='danger' variant='faded' isIconOnly as={Link} target='_blank' href={`mailto:${siteConfig.links.email}`} ><Mail /></Button>
            </Tooltip>
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default About
