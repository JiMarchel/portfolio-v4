import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]
| order(publishedAt desc)[0...12]{
  _id,
  title,
  "slug": slug.current,
  "excerpt": coalesce(excerpt, pt::text(body)[0...180]),
  mainImage{
    ...,
    "url": asset->url,
    "dims": asset->metadata.dimensions
  },
  publishedAt
}`);

export const POST_QUERY = defineQuery(`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  body,                             
  mainImage{
    ...,
    "url": asset->url,
    "dims": asset->metadata.dimensions
  },
  publishedAt,
  myCodeField,
}
`);
