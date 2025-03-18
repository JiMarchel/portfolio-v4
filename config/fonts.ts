import { Fira_Code as FontMono, Source_Sans_3 as FontSans, Barriecito } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const barriecito = Barriecito({
  subsets: ["latin"],
  variable: "--barriecito",
  weight: "400"
})

