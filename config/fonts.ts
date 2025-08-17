import localFont from "next/font/local";
import { Source_Sans_3 as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: false,
});

export const funSized = localFont({
  src: "./FunSized.woff2",
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--font-fun-sized",
});
