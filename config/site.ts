import { HomeIcon, MailIcon, PencilIcon } from "lucide-react";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { FaGolang, FaRust, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { GithubIcon } from "@/components/icons";
import ts from "@/public/typescript.png";
import node from "@/public/nodejs.png";
import js from "@/public/javascript.png";
import next from "@/public/nextjs.png";
import bun from "@/public/bun.png";
import html from "@/public/html.png";
import tailwind from "@/public/tailwind.png";
import postgres from "@/public/postgres.png";
import reactjs from "@/public/reactjs.png";
import linux from "@/public/linux.webp";
import neovim from "@/public/neovim.png";
import git from "@/public/git.png";
import docker from "@/public/docker.png";
import rust from "@/public/rust.webp";
import tryhackme from "@/public/tryhackme.png";
import umsida from "@/public/umsida.png";
import antrek from "@/public/antrek.png";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "JiMarchel",
  description: "Mochammad Jimmy Marchel Personal Website Portofolio",
  navItems: [
    { label: "Home", icon: HomeIcon, href: "/" },
    { label: "Blog", icon: PencilIcon, href: "/blog" },
  ],
  listProjects: [
    {
      title: "BMI Calculator",
      description:
        "A bmi calculator that I made to calculate the ideal weight of people in Sumbersuko village",
      github: "https://github.com/JiMarchel/kkn-bmi",
      // live: "https://bmi-sumbersuko.vercel.app/",
      live: null,
      icon: RiNextjsFill,
    },
    {
      title: "Al-Quran",
      description: "A website for reading the Al-Quran and short surahs",
      github: "https://github.com/JiMarchel/alquran",
      // live: "https://alquran-035.vercel.app/",
      live: null,
      icon: RiNextjsFill,
    },
    {
      title: "MyKartunList",
      description:
        "MyAnimeList lite, Build this with NextJs and use NextUi for ui components. Data API from jikan.moe",
      github: "https://github.com/JiMarchel/MyKartunList",
      // live: "https://mykartunlist.vercel.app",
      live: null,
      icon: RiNextjsFill,
    },
    {
      title: "TMDB-Movie",
      description:
        "A movie collection website where you can view information about the movie. API from TMDb",
      github: "https://github.com/JiMarchel/tmdb-movie",
      // live: "https://tmdb-mymy.vercel.app",
      live: null,
      icon: RiNextjsFill,
    },
    {
      title: "Weather CLI",
      description: "Generate upcoming weather predictions on your cli.",
      github: "https://github.com/JiMarchel/weather",
      live: null,
      icon: FaGolang,
    },
    {
      title: "Mac Changer",
      description: "Generate random mac address for you.",
      github: "https://github.com/JiMarchel/mac-changer",
      live: null,
      icon: FaRust,
    },
    {
      title: "HooBank UI",
      description:
        "Slicing design with Reactjs and Tailwind from following JSMastery course.",
      github: "https://github.com/JiMarchel/HooBank",
      // live: "https://keen-arithmetic-8a9459.netlify.app/",
      live: null,
      icon: RiReactjsLine,
    },
    {
      title: "Taskify",
      description:
        "Taskify, the Trello clone i made from following @CodeWIthAntonio Course. learn so much from this course.",
      github: "https://github.com/JiMarchel/Taskify",
      live: null,
      icon: RiNextjsFill,
    },
  ],
  skills: [
    { title: "Typescript", image: ts },
    { title: "NodeJS", image: node },
    { title: "Javascript", image: js },
    { title: "NextJS", image: next },
    { title: "Bun", image: bun },
    { title: "HTML", image: html },
    { title: "TailwindCSS", image: tailwind },
  ],
  toolsAndSkills: [
    { title: "Postgresql", image: postgres },
    { title: "ReactJS", image: reactjs },
    { title: "Linux", image: linux },
    { title: "Neovim", image: neovim },
    { title: "Git", image: git },
    { title: "Docker", image: docker },
    { title: "Rust", image: rust },
  ],
  cert: [
    {
      title: "TryHackMe",
      image: tryhackme,
      date: "Issued on 8, 1, 2025",
      description: "Web Application Pentesting",
      href: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-EQ4PIQ13CK.pdf",
    },
    {
      title: "TryHackMe",
      image: tryhackme,
      date: "Issued on 8, 1, 2025",
      description: "Jr Penetration Tester",
      href: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CCUDYMUSC9.pdf",
    },
    {
      title: "TryHackMe",
      image: tryhackme,
      date: "Issued on 7, 22, 2025",
      description: "Web Fundamentals",
      href: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-VJQER3CH1V.pdf",
    },
    {
      title: "TryHackMe",
      image: tryhackme,
      date: "Issued on 7, 18, 2025",
      description: "Cyber Security 101",
      href: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-TK78DDJRVC.pdf",
    },
    {
      title: "TryHackMe",
      image: tryhackme,
      date: "Issued on 7, 13, 2025",
      description: "Pre Security",
      href: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-RCBIELIGAX.pdf",
    },
  ],
  social: [
    { label: "Github", icon: GithubIcon, href: "https://github.com/jimarchel" },
    {
      label: "Linkedin",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/jimarchel",
    },
    { label: "Mail", icon: MailIcon, href: "mailto:dev@jimarchel.my.id" },
    {
      label: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/jimarchel",
    },
  ],
  education: [
    {
      title: "Muhammadiyah University of Sidoarjo",
      image: umsida,
      date: "2021 - 2025",
      description: "Informatics Engineering",
      href: "https://umsida.ac.id/",
    },
     {
      title: "Antartika 2 Vocational School, Sidoarjo",
      image: antrek,
      date: "2019 - 2021",
      description: "Computer and Network Engineering",
      href: "https://smkantartika2-sda.sch.id/",
    },
  ]
};
