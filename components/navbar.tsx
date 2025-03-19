"use client"

import { Button, Link, Tooltip, useDisclosure } from "@heroui/react"
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { usePathname } from "next/navigation";
import { barriecito } from "@/config/fonts";
import { LayoutDashboard } from "lucide-react";

export const Navbar = () => {
  const pathName = usePathname()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <HeroUINavbar maxWidth="md" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <h1 className={`font-bold text-2xl ${barriecito.className}`}>M Jimmy Marchel</h1>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify="end"
      >
        <NavbarItem className="flex gap-2">
          <ul className="hidden sm:flex gap-1 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href} isActive={pathName === item.href ? true : false}>
                <Button as={Link} href={item.href} variant={pathName === item.href ? "solid" : "light"} startContent={<item.icon size={16} />}>
                  {item.label}
                </Button>
              </NavbarItem>
            ))}
          </ul>

          <div className="sm:hidden">
            <Tooltip content="Navigation Menu" placement="bottom">
              <Button isIconOnly variant="light" onPress={onOpen} radius="full"><LayoutDashboard /></Button>
            </Tooltip>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom">
              <DrawerContent>
                {(onClose) => (
                  <>
                    <DrawerHeader className={`flex flex-col gap-1`}>
                      <h1 className={`${barriecito.className}`}>M Jimmy Marchel </h1>
                      <span className="text-sm">Software Developer</span>
                    </DrawerHeader>
                    <DrawerBody>
                      <ul className="gap-1 justify-start w-full">
                        {siteConfig.navItems.map((item) => (
                          <NavbarItem key={item.href} isActive={pathName === item.href ? true : false}>
                            <Button as={Link} href={item.href} variant={pathName === item.href ? "solid" : "light"} startContent={<item.icon size={16} />} className="w-full justify-start mx-0">
                              {item.label}
                            </Button>
                          </NavbarItem>
                        ))}
                      </ul>
                    </DrawerBody>
                    <DrawerFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                    </DrawerFooter>
                  </>
                )}
              </DrawerContent>
            </Drawer>
          </div>

          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

    </HeroUINavbar >
  );
};
