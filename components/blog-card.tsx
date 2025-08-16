"use client";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string | null;
  image: string;
  date: string;
}

export const BlogCard = ({ title, slug, image, date }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="">
      <Card className="px-5" >
        <CardBody className="flex flex-row gap-2 sm:gap-5">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-auto h-16 object-cover"
          />
          <div>
            <h1 className="sm:text-xl font-medium">{title}</h1>
            <p className="text-muted-foreground text-sm">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};
