import localFont from "next/font/local"
import { Fira_Code as FontMono, Source_Sans_3 as FontSans, Barriecito, Press_Start_2P, Rubik_Burned, Grape_Nuts, Lilita_One, Rowdies } from "next/font/google";

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

export const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  variable: "--pressStart2P",
  weight: "400"
})

export const rubikBurned = Rubik_Burned({
  subsets: ["latin"],
  variable: "--rubikBurned",
  weight: "400"
})

export const grapeNuts = Grape_Nuts({
  subsets: ["latin"],
  variable: "--grape-nuts",
  weight: "400"
})

export const lilitaOne = Lilita_One({
  subsets: ["latin"],
  variable: "--lilita-one",
  weight: "400"
})

export const rowdies = Rowdies({
  subsets: ["latin"],
  variable: "--rowdies",
  weight: "400"
})


export const funSized = localFont({
  src: "./FunSized.ttf"
})
