import { siteConfig } from "@/config/site";
import { CardInfo } from "./card-info";

export const Certifications = () => {
  return (
    <div className="space-y-5">
      <h1 className="font-medium text-xl sm:text-2xl ">📜📜Certifications</h1>
      <div>
        {siteConfig.cert.map((v, i) => (
          <CardInfo
            key={i}
            image={v.image}
            title={v.title}
            href={v.href}
            date={v.date}
            description={v.description}
          />
        ))}
      </div>
    </div>
  );
};
