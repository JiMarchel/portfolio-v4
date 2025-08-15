"use client";

import { Tooltip } from "@heroui/react";
import { Dock, DockIcon } from "./magicui/dock";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ThemeSwitch } from "./theme-switch";

export const Footer = () => {
  return (
    <Dock className="fixed bottom-3 left-1/2 -translate-x-1/2 sm:px-5 rounded-full z-50">
      {siteConfig.navItems.map((v) => (
        <DockIcon key={v.label}>
          <Tooltip content={v.label}>
            <Link href={v.href}>
              <v.icon className="size-4" />
            </Link>
          </Tooltip>
        </DockIcon>
      ))}
      <Separator orientation="vertical" />
      {siteConfig.social.map((v) => (
        <DockIcon key={v.label}>
          <Tooltip content={v.label}>
            <Link href={v.href} target="_blank">
              <v.icon className="size-4" />
            </Link>
          </Tooltip>
        </DockIcon>
      ))}
      <Separator orientation="vertical" />
      <ThemeSwitch />
    </Dock>
  );
};
