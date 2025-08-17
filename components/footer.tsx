"use client";

import { Dock, DockIcon } from "./magicui/dock";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ThemeSwitch } from "./theme-switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const Footer = () => {
  return (
    <Dock className="fixed bottom-3 left-1/2 -translate-x-1/2 sm:px-5 rounded-full z-50" >
      {siteConfig.navItems.map((v) => (
        <DockIcon key={v.label}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={v.href}>
                <v.icon className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{v.label}</TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}
      <Separator orientation="vertical" />
      {siteConfig.social.map((v) => (
        <DockIcon key={v.label}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={v.href} target="_blank">
                <v.icon className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{v.label}</TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}
      <Separator orientation="vertical" />
      <ThemeSwitch />
    </Dock>
  );
};
