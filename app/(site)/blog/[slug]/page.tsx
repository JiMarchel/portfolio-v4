import { notFound } from "next/navigation";
import Image from "next/image";
import { POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import RichText from "@/components/rich-text";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const revalidate = 300; 

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current}`,
    {},
    {
      next: { revalidate: 3600, tags: ["post-slugs"] },
      perspective: "published",
    }
  );
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch(
    POST_QUERY,
    { slug: (await params).slug },
    { perspective: "published", next: { revalidate } }
  );
  if (!post) return notFound();

  return (
    <article className="h-full mx-auto pb-28">
      <Link className="flex items-center gap-2 mb-4" href="/blog">
        <ChevronLeft className="size-4" /> Back to blog
      </Link>
      {post.mainImage?.url && (
        <Image
          src={post.mainImage.url}
          alt={post.title ? post.title : "Cover"}
          width={1200}
          height={630}
          className="rounded-2xl w-auto h-auto mb-4 object-cover mx-auto"
        />
      )}
      <div className="mb-10">
        <h1 className="text-xl sm:text-4xl font-bold ">{post.title}</h1>
        <p className="text-muted-foreground">
          {new Date(
            post.publishedAt ? post.publishedAt : ""
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <RichText value={post.body} />
    </article>
  );
}
