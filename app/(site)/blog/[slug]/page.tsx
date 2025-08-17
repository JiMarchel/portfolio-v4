import { notFound } from "next/navigation";
import Image from "next/image";
import RichText from "@/components/rich-text";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { getPost, getPostSlugs } from "@/lib/get-data";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const p = await getPost((await params).slug);
  if (!p) return { title: "Not found" };

  return {
    title: p.title ?? "Post",
    description: p.excerpt ?? p.title ?? undefined,
    openGraph: p.mainImage?.url
      ? {
          type: "article",
          images: [
            {
              url: p.mainImage.url,
              width: 1200,
              height: 630,
              // kirim alt hanya kalau ada string
              ...(p.title ? { alt: p.title } : {}),
            },
          ],
        }
      : undefined,
  };
}

export default async function Page({ params }: PageProps) {
  const post = await getPost((await params).slug);
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
