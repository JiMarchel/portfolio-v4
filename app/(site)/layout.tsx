import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { ThemeProvider } from "@/components/theme-providers";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/witch-hat.png",
    apple: "/witch-hat.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "h-full bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider defaultTheme="dark" attribute="class">
          <main className="container h-full mx-auto max-w-2xl pt-12 sm:pt-24 px-6 flex-grow">
            {children}
            <SanityLive />
            {(await draftMode()).isEnabled && <VisualEditing />}
          </main>
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
