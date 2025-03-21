import { Folder, Clock, Smile } from "lucide-react";
export type SiteConfig = typeof siteConfig;


export const siteConfig = {
  name: "JiMarchel",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Projects",
      icon: Folder,
      href: "/",
    },
    {
      label: "Now",
      icon: Clock,
      href: "/now",
    },
    {
      label: "About",
      icon: Smile,
      href: "/about",
    },
  ],
  listProjects: [
    {
      title: "KKN-Bmi",
      description: "A bmi calculator that I made to calculate the ideal weight of people in Sumbersuko village",
      github: "https://github.com/JiMarchel/kkn-bmi",
      live: "https://bmi-sumbersuko.vercel.app/",
    },
    {
      title: "Al-Quran",
      description: "A website for reading the Al-Quran and short surahs",
      github: "https://github.com/JiMarchel/alquran",
      live: "https://alquran-035.vercel.app/",
    },
    {
      title: "MyKartunList",
      description: "MyAnimeList lite, Build this with NextJs and use NextUi for ui components. Data API from jikan.moe",
      github: "https://github.com/JiMarchel/MyKartunList",
      live: "https://mykartunlist.vercel.app",
    },
    {
      title: "TMDB-Movie",
      description: "A movie collection website where you can view information about the movie. API from TMDb",
      github: "https://github.com/JiMarchel/tmdb-movie",
      live: "https://tmdb-mymy.vercel.app",
    },

    {
      title: "HooBank UI",
      description: "Slicing design with Reactjs and Tailwind from following JSMastery course.",
      github: "https://github.com/JiMarchel/HooBank",
      live: "https://keen-arithmetic-8a9459.netlify.app/",
    },
    {
      title: "Taskify",
      description: "Taskify, the Trello clone i made from following @CodeWIthAntonio Course. learn so much from this course.",
      github: "https://github.com/JiMarchel/Taskify",
      live: null,
    },
  ],
  newAt: [
    {
      title: "Rust",
      image: "/rust.jpg"
    },
    {
      title: "Docker",
      image: "/docker.png"
    }
  ],
  masterAt: [
    {
      title: "Typescript",
      image: "/ts.png"
    },
    {
      title: "NodeJS",
      image: "/nodejs.jpg"
    },
    {
      title: "NextJS",
      image: "/nextjs.png"
    },
    {
      title: "Bun",
      image: "/bun.jpg"
    },
    {
      title: "Relational Database",
      image: "/database.jpg"
    },
    {
      title: "Linux",
      image: "linux.png"
    }
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
