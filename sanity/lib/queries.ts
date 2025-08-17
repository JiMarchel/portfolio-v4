import { defineQuery } from "next-sanity";

export const GET_ALL_CATEGORIES = defineQuery(`
*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description,
}
`);
export const POSTS_BY_ALL_CATEGORIES = defineQuery(`
*[
  _type=="post" &&
  count(categories[@->slug.current in $slugs]) == count($slugs)
]
| order(publishedAt desc){
  _id, title, "slug": slug.current, publishedAt,
  "excerpt": select(
    defined(excerpt) && excerpt != "" => excerpt,
    defined(body) => pt::text(body)[0...180],
    ""
  ),
  mainImage{ "url": asset->url, "dims": asset->metadata.dimensions },
  categories[]->{ title, "slug": slug.current }
}
`);

export const POSTS_BY_ANY_CATEGORY = defineQuery(`
*[
  _type=="post" &&
  count(categories[@->slug.current in $slugs]) > 0
]
| order(publishedAt desc){
  _id, title, "slug": slug.current,
  mainImage{ "url": asset->url, "dims": asset->metadata.dimensions },
  publishedAt,
  "excerpt": select(defined(excerpt) && excerpt != "" => excerpt, defined(body) => pt::text(body)[0...180], ""),
  categories[]->{ title, "slug": slug.current }
}
`);

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]
| order(publishedAt desc)[0...12]{
  _id,
  title,
  "slug": slug.current,
  mainImage{
    ...,
    "url": asset->url,
    "dims": asset->metadata.dimensions
  },
  publishedAt,
  categories[]->{ title, "slug": slug.current }
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
  "excerpt": select(defined(excerpt) && excerpt != "" => excerpt, defined(body) => pt::text(body)[0...180], ""),
  publishedAt,
  categories[]->{ title, "slug": slug.current }
}
`);
