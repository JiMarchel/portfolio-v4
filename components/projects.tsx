"use client";

import { siteConfig } from "@/config/site";
import {
  Button,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { GithubIcon } from "./icons";
import { Globe } from "lucide-react";

export const Projects = () => {
  return (
    <div className="space-y-5 ">
      <div>
        <h1 className="font-medium text-xl sm:text-2xl">
          🐱‍💻Some of my work
        </h1>
        <p className="text-muted-foreground">All my good and ugly#ss work.</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {siteConfig.listProjects.map((v, i) => (
          <Popover key={i} placement="bottom">
            <PopoverTrigger>
              <Button
                variant="flat"
                startContent={
                  <span className="border-r pr-1 border-slate-600 sm:pr-3">
                    <v.icon />
                  </span>
                }
                className="sm:p-7 sm:font-semibold sm:text-xl "
              >
                {" "}
                <span className="w-full border-b hover:border-none">
                  {v.title}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 max-w-sm">
                <p className="text-small sm:text-lg font-bold">{v.title}</p>
                <p className="text-tiny sm:text-medium">{v.description}</p>
                <div className="space-x-2 mt-1">
                  {v.github !== null ? (
                    <Button
                      size="sm"
                      as={Link}
                      href={v.github}
                      color="secondary"
                      variant="flat"
                      startContent={<GithubIcon size={16} />}
                      target="_blank"
                    >
                      Github
                    </Button>
                  ) : null}
                  {v.live !== null ? (
                    <Button
                      size="sm"
                      as={Link}
                      href={v.live}
                      color="secondary"
                      variant="flat"
                      startContent={<Globe size={16} />}
                      target="_blank"
                    >
                      Live website
                    </Button>
                  ) : null}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};
