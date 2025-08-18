import { BlogCard } from "@/components/blog-card";
import SelectCategory from "@/components/select-category";
import { client } from "@/sanity/lib/client";
import {
  GET_ALL_CATEGORIES,
  POSTS_BY_ALL_CATEGORIES,
  POSTS_BY_ANY_CATEGORY,
  POSTS_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 3600;

type PageProps = {
  searchParams: Promise<{ c?: string | string[]; mode?: "all" | "any" }>;
};

function normalizeCats(c?: string | string[]) {
  if (!c) return [] as string[];
  const arr = Array.isArray(c) ? c : c.split(",");
  return arr
    .map((s) => decodeURIComponent(s).trim().toLowerCase())
    .filter(Boolean);
}

export default async function BlogPage({ searchParams }: PageProps) {
  const categories = await client.fetch(
    GET_ALL_CATEGORIES,
    {},
    {
      perspective: "published",
      next: { revalidate: 3600, tags: ["categories"] },
    }
  );
  const requestedSlugs = normalizeCats((await searchParams).c);
  const validSlugs = new Set(categories.map((c) => c.slug));
  const filteredSlugs = requestedSlugs.filter((s) => validSlugs.has(s));

  const mode = (await searchParams).mode === "any" ? "any" : "all";
  const query =
    filteredSlugs.length === 0
      ? POSTS_QUERY
      : mode === "any"
        ? POSTS_BY_ANY_CATEGORY
        : POSTS_BY_ALL_CATEGORIES;
  const groqParams = filteredSlugs.length
    ? { slugs: filteredSlugs }
    : undefined;
  const posts = await client.fetch(
    query,
    groqParams,
    { perspective: "published", next: { revalidate: 3600, tags: ["posts"] } }
  );

  console.log("Posts fetched:", posts);
  return (
    <div className="h-full w-full mx-auto">
      <SelectCategory initialTags={categories.map((v) => v.slug!)} />

      <div className="flex flex-col gap-3">
        {posts.map((v: any) => (
          <BlogCard
            key={v.slug}
            categories={v.categories || []}
            date={v.publishedAt || ""}
            image={v.mainImage?.url}
            slug={v.slug}
            title={v.title || "No title"}
          />
        ))}
      </div>
    </div>
  );
}
