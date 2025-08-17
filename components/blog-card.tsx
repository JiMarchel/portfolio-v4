"use client";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface BlogCardProps {
  title: string;
  slug: string | null;
  image: string;
  date: string;
  categories: { title: string | null; slug: string | null }[];
}

export const BlogCard = ({
  title,
  slug,
  image,
  date,
  categories,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card>
        <CardContent className="flex flex-row gap-2 sm:gap-5">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-auto h-20 object-cover"
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
            <div className="space-x-1">
              {categories.map((c, i) => (
                <Badge variant="outline" key={i}>{c.title}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
