import { getPageUrl, pages } from "@/app/source";
import { createSearchAPI } from "next-docs-zeta/search/server";

export const { GET } = createSearchAPI("advanced", {
  indexes: pages.map((page) => ({
    id: page.file.id,
    title: page.matter.title,
    url: getPageUrl(page.slugs),
    structuredData: page.data.structuredData,
  })),
});
