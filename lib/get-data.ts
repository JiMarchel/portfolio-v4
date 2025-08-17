import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";

export const getPost = async (slug: string) => {
  return client.fetch(
    POST_QUERY,
    { slug },
    {
      perspective: "published",
      next: { revalidate: 3600, tags: [`post:${slug}`] },
    }
  );
};

export async function getPostSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "slug": slug.current
    }`,
    {},
    {
      perspective: "published",
      next: { revalidate: 3600, tags: ["post-slugs"] },
    }
  );
}

export function getBaseUrl() {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) return env.replace(/\/+$/, "");
  return "http://localhost:3000";
}
