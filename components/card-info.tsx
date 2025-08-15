"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

interface CardInfoInterface {
  href: string;
  title: string;
  image: string;
  date: string;
  description: string;
}

export const CardInfo = ({
  image,
  title,
  href,
  date,
  description,
}: CardInfoInterface) => {
  return (
    <Link href={href} className="group" target="_blank">
      <div className="flex items-center gap-2">
        <Image src={image} alt={image} className="h-7 w-7 sm:h-9 sm:w-10" width={400} height={400}/>
        <div className="flex justify-between w-full">
          <div>
            <div className="flex items-center">
              <span className="block sm:hidden text-medium">
                {truncateText(title, 20)}
              </span>
              <span className="hidden sm:block text-medium">{title}</span>
              <ChevronRight
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1"
                size={20}
              />
            </div>
            <p className="text-muted-foreground">
              <span className="block sm:hidden">
                {truncateText(description, 20)}
              </span>
              <span className="hidden sm:block">{description}</span>
            </p>
          </div>
          <p className="text-muted-foreground text-sm sm:text-medium">{date}</p>
        </div>
      </div>
    </Link>
  );
};
