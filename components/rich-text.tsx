'use client'

import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { Highlight, themes } from 'prism-react-renderer'
import Image from 'next/image'
import Link from 'next/link'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlFor } from '@/sanity/lib/image'

const LANG_MAP: Record<string, string> = {
  sh: 'bash',
  shell: 'bash',
  terminal: 'bash',
  plaintext: 'text',
  text: 'text',
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const { width, height } = getImageDimensions(value)
      const src = urlFor(value).width(1200).fit('max').auto('format').url()
      return (
        <figure className="my-6">
          <Image
            src={src}
            alt={value.alt || ''}
            width={Math.min(1200, Math.round(width))}
            height={Math.round(height * Math.min(1200 / width, 1))}
            className="rounded-2xl"
            loading='eager'
          />
          {value.alt && (
            <figcaption className="text-sm text-zinc-500 mt-2">{value.alt}</figcaption>
          )}
        </figure>
      )
    },

    // 🔥 Code block dengan highlight + header
    code: ({ value }) => {
      const code: string = value?.code || ''
      const filename: string | undefined = value?.filename
      const rawLang: string = (value?.language || 'text').toLowerCase()
      const language = (LANG_MAP[rawLang] || rawLang) as any

      return (
        <div className="my-6 overflow-hidden rounded-xl border border-zinc-800">
          {(filename || rawLang) && (
            <div className="flex items-center justify-between px-4 py-2 text-xs border-b border-zinc-800 bg-zinc-950/70">
              <span className="font-mono text-zinc-300">{filename || ''}</span>
              <span className="font-mono text-zinc-500 uppercase">
                {rawLang}
              </span>
            </div>
          )}

          <Highlight theme={themes.vsDark} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={`${className} m-0 p-4 overflow-auto`} style={style}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i })
                  return (
                    <div key={i} className={`${lineProps.className}`} style={lineProps.style}>
                      {line.map((token, a) => {
                        const tokenProps = getTokenProps({ token, a })
                        return <span key={a} {...tokenProps} />
                      })}
                    </div>
                  )
                })}
              </pre>
            )}
          </Highlight>
        </div>
      )
    },
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#'
      const isExternal = /^https?:\/\//.test(href)
      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
            {children}
          </a>
        )
      }
      return <Link href={href} className="underline">{children}</Link>
    },
    code: ({ children }) => (
      <code className="px-1 py-0.5 rounded bg-zinc-900 text-zinc-100">{children}</code>
    ),
  },

  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="leading-7 my-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic text-zinc-600 my-4">{children}</blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
  },
}

export default function RichText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
