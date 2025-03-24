"use client"
import { siteConfig } from '@/config/site'
import { Card, CardBody, CardFooter, Image } from '@heroui/react'
import React from 'react'

export const Now = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='space-y-3'>
        <h1 className='font-bold text-3xl sm:text-5xl '>Now</h1>
        <div className='font-medium text-medium sm:text-xl'>
          <p>I&apos;m currently dedicating my time to improving my software engineering capabilities.</p>
          <p>Now i&apos;m interested in learning and exploring Rust.</p>
          <p>Will probably study blockchain and cryptocurrencies later, or maybe cybersecurity?</p>
        </div>
      </div>

      <div className='space-y-3'>
        <h1 className='font-bold text-2xl sm:text-4xl'>New at</h1>
        <div className='gap-2 sm:gap-4 grid grid-cols-2 sm:grid-cols-3'>
          {siteConfig.newAt.map((v, i) => (
            <Card key={i} isPressable shadow='sm' className='hover:rotate-3 motion-preset-slide-left ' >
              <CardBody className='w-full'>
                <Image alt={v.title} src={v.image} width="100%" className='w-full object-cover h-[85px] sm:h-[130px] ' />
              </CardBody>
              <CardFooter><b>{v.title}</b></CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className='space-y-3'>
        <h1 className='font-bold text-2xl sm:text-4xl'>Master at</h1>
        <div className='gap-2 sm:gap-4 grid grid-cols-2 sm:grid-cols-3'>
          {siteConfig.masterAt.map((v, i) => (
            <Card key={i} isPressable shadow='sm' className='hover:rotate-3 motion-preset-slide-right '>
              <CardBody className='w-full'>
                <Image alt={v.title} src={v.image} width="100%" className='w-full object-center h-[85px] sm:h-[130px]' />
              </CardBody>
              <CardFooter><b >{v.title}</b></CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}

