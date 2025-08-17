"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={handleToggle}
          size="icon"
          variant="outline"
          className="border-none dark:bg-input/0 dark:hover:bg-input/0 cursor-pointer "
        >
          <MoonStarIcon className="hidden [html.dark_&]:block" />
          <SunIcon className="hidden [html.light_&]:block" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Theme Switcher</TooltipContent>
    </Tooltip>
  );
}
