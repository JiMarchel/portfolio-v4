"use client"
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathName = usePathname()
  console.log(pathName);

  return (
    <HeroUINavbar maxWidth="md" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">M Jimmy Marchel</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify="end"
      >
        <NavbarItem className="flex gap-2">
          <ul className="flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href} isActive={pathName === item.href ? true : false}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: pathName === item.href ? "secondary" : "foreground" }),
                    `${pathName === item.href ? "border-b-2 border-secondary-200" : ""}`,
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>

          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

    </HeroUINavbar>
  );
};
