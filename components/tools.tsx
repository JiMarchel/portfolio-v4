import { siteConfig } from "@/config/site";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

export const Tools = () => {
  return (
    <div>
      <h1 className="font-medium text-xl sm:text-2xl">
        🛠️⚙️Tools and Technologies
      </h1>
      <p className="text-muted-foreground">*Still beginner at Rust.</p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {siteConfig.skills.map((v) => (
          <div key={v.title} className="flex items-center gap-2 ml-5 sm:ml-9">
            <Image
              src={v.image}
              alt={v.title}
              width={28}
              height={28}
              sizes="28px"
              loading="lazy"
              decoding="async"
              className="opacity-70"
            />
            <p className="text-xl">{v.title}</p>
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:20s]">
        {siteConfig.toolsAndSkills.map((v) => (
          <div key={v.title} className="flex items-center gap-2 ml-5 sm:ml-9">
            <Image
              src={v.image}
              alt={v.title}
              width={28}
              height={28}
              sizes="28px"
              loading="lazy"
              decoding="async"
              className="opacity-70"
            />
            <p className="text-xl">{v.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
