import { BlogCard } from "@/components/blog-card";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function BlogPage() {
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
  });
  return (
    <div className="h-full w-fit mx-auto">
      {data.map((v) => (
        <BlogCard
          key={v.slug}
          title={v.title || "No title"}
          slug={v.slug}
          date={v.publishedAt || ""}
          image={v.mainImage?.url!}
        />
      ))}
    </div>
  );
}
