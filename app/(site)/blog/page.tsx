import { BlogCard } from "@/components/blog-card";
import { CategoryParams } from "@/components/category-params";
import SelectCategory from "@/components/select-category";
import { Badge } from "@/components/ui/badge";
import { sanityFetch } from "@/sanity/lib/live";
import {
  GET_ALL_CATEGORIES,
  POSTS_BY_ALL_CATEGORIES,
  POSTS_BY_ANY_CATEGORY,
  POSTS_QUERY,
} from "@/sanity/lib/queries";

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
  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES,
  });
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

  const { data: posts } = await sanityFetch({
    query,
    params: filteredSlugs.length ? { slugs: filteredSlugs } : undefined,
  });

  return (
    <div className="h-full w-full mx-auto">
      {/* <CategoryParams />

      <div className="flex flex-wrap gap-1 mb-4">
        {categories.map((v) => (
          <Badge key={v._id} title={v.slug!}>
            {v.title}
          </Badge>
        ))}
      </div> */}
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
