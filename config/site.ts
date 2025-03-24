import { Folder, Clock, Smile } from "lucide-react";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { FaGolang, FaRust } from "react-icons/fa6";
export type SiteConfig = typeof siteConfig;


export const siteConfig = {
  name: "JiMarchel",
  description: "Mochammad Jimmy Marchel Personal Website Portofolio",
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
      icon: RiNextjsFill
    },
    {
      title: "Al-Quran",
      description: "A website for reading the Al-Quran and short surahs",
      github: "https://github.com/JiMarchel/alquran",
      live: "https://alquran-035.vercel.app/",
      icon: RiNextjsFill
    },
    {
      title: "MyKartunList",
      description: "MyAnimeList lite, Build this with NextJs and use NextUi for ui components. Data API from jikan.moe",
      github: "https://github.com/JiMarchel/MyKartunList",
      live: "https://mykartunlist.vercel.app",
      icon: RiNextjsFill
    },
    {
      title: "TMDB-Movie",
      description: "A movie collection website where you can view information about the movie. API from TMDb",
      github: "https://github.com/JiMarchel/tmdb-movie",
      live: "https://tmdb-mymy.vercel.app",
      icon: RiNextjsFill
    },
    {
      title: "Weather CLI",
      description: "Generate upcoming weather predictions on your cli.",
      github: "https://github.com/JiMarchel/weather",
      live: null,
      icon: FaGolang
    },
    {
      title: "Mac Changer",
      description: "Generate random mac address for you.",
      github: "https://github.com/JiMarchel/mac-changer",
      live: null,
      icon: FaRust
    },
    {
      title: "HooBank UI",
      description: "Slicing design with Reactjs and Tailwind from following JSMastery course.",
      github: "https://github.com/JiMarchel/HooBank",
      live: "https://keen-arithmetic-8a9459.netlify.app/",
      icon: RiReactjsLine
    },
    {
      title: "Taskify",
      description: "Taskify, the Trello clone i made from following @CodeWIthAntonio Course. learn so much from this course.",
      github: "https://github.com/JiMarchel/Taskify",
      live: null,
      icon: RiNextjsFill
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
      title: "SQL Database",
      image: "/sql.png"
    },
    {
      title: "Linux",
      image: "linux.png"
    }
  ],
  cert: [
    {
      companyName: "Bisa AI Academy",
      description: "The independent study program that I joined at Bisa AI Academy, I took the cyber security position.",
      image: "/cert/bisa_ai.png",
      pdf: "/cert/bisa_ai.pdf",
    }
  ],
  listening: [
    {
      title: "Aespa",
      image: "/listening/aespa.jpg",
      link: "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE?si=tKYzok1YQl65jjvrfNZvdQ"
    },
    {
      title: "Malaka Project",
      image: "/listening/malaka.jpg",
      link: "https://open.spotify.com/show/1ZbLoxAjgM9Sn43oPKvhw3?si=869ad8f2fdac4ffe"
    },
    {
      title: "DVRST",
      image: "/listening/dvrst.jpg",
      link: "https://open.spotify.com/artist/0XFgyr4jwM0MGeZZW0VzA5?si=bpj679QnRRWRFncN05FRyg"
    },
  ],
  links: {
    github: "https://github.com/jimarchel",
    facebook: "https://www.facebook.com/jimarchel",
    instagram: "https://www.instagram.com/jimarchel",
    linkedin: "https://www.linkedin.com/in/jimarchel",
    email: "jmarchel100@gmail.com",
  },
};
