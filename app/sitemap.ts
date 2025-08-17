import { getBaseUrl, getPostSlugs } from "@/lib/get-data";
import { MetadataRoute } from "next";

const baseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = getBaseUrl();
  const slugs = await getPostSlugs();
  const now = new Date();
  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "monthly",
    },
    ...(slugs.map(({ slug }) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    })) as MetadataRoute.Sitemap),
  ];
}
