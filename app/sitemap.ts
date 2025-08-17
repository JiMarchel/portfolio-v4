import { getPostSlugs } from "@/lib/get-data";
import { MetadataRoute } from "next";

const baseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getPostSlugs();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    ...(slugs.map(({ slug }) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    })) as MetadataRoute.Sitemap),
  ];
}
