import { Article, SortingMethods } from "../types";

export const sortArticles = (
  method: SortingMethods,
  articles: Article[]
): Article[] => {
  switch (method) {
    case "default":
      return articles;
    case "most-recent":
      return [...articles].sort((a, b) => {
        const da = new Date(a.published_at);
        const db = new Date(b.published_at);
        return db.valueOf() - da.valueOf();
      });
    case "most-upvotes":
      return [...articles].sort((a, b) => b.upvotes - a.upvotes);

    default:
      return articles;
  }
};
