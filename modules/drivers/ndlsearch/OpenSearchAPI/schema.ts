import { z } from "zod";

const openSearchDcIdentifierSchema = z.object({
  "#text": z.union([z.string(), z.number()]),
  "@_xsi:type": z.string(),
});

const openSearchRdfSeeAlsoSchema = z.object({
  "@_rdf:resource": z.string(),
});

const openSearchItemSchema = z.object({
  title: z.string(),
  link: z.string(),
  description: z.string(),
  author: z.string(),
  category: z.union([z.string(), z.array(z.string())]),
  "dc:title": z.string(),
  "dc:creator": z.union([z.string(), z.array(z.string())]).optional(),
  "dcndl:volume": z.number().optional(),
  "dc:publisher": z.union([z.string(), z.array(z.string())]).optional(),
  "dc:identifier": z
    .union([
      openSearchDcIdentifierSchema,
      z.array(openSearchDcIdentifierSchema),
    ])
    .optional(),
  "rdfs:seeAlso": z
    .union([openSearchRdfSeeAlsoSchema, z.array(openSearchRdfSeeAlsoSchema)])
    .optional(),
});

export const openSearchResponseSchema = z.object({
  rss: z.object({
    channel: z.object({
      title: z.string(),
      item: z.union([openSearchItemSchema, z.array(openSearchItemSchema)]),
      description: z.string(),
      language: z.string(),
      link: z.string(),
      "openSearch:totalResults": z.number(),
      "openSearch:startIndex": z.number(),
      "openSearch:itemsPerPage": z.number(),
    }),
  }),
});
