import { siteConfig } from "@/config/site";
import { GithubIcon } from "./icons";
import { Globe } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { ShinyButton } from "./magicui/shiny-button";
import { Separator } from "./ui/separator";

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
          <Popover key={i}>
            <PopoverTrigger asChild>
              <ShinyButton className="sm:px-4 sm:py-3">
                <span>
                  <v.icon />
                </span>
                {v.title}
              </ShinyButton>
            </PopoverTrigger>
            <PopoverContent>
              <div className=" max-w-sm">
                <h1 className="text-small sm:text-lg font-bold">{v.title}</h1>
                <p className="text-sm sm:text-medium text-muted-foreground">
                  {v.description}
                </p>
                <Separator className="my-2" />
                <div className="space-x-2 mt-1">
                  {v.github !== null ? (
                    <Link
                      href={v.github}
                      target="_blank"
                      className="text-sm flex items-center hover:underline"
                    >
                      <GithubIcon className="mr-1 size-5" />
                      Github
                    </Link>
                  ) : null}
                  {v.live !== null ? (
                    <Link
                      href={v.live}
                      target="_blank"
                      className="text-sm flex items-center hover:underline"
                    >
                      <Globe className="mr-1 size-5" />
                      Live website
                    </Link>
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
