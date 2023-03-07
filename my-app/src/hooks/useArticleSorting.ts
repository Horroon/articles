import { useMemo, useState } from "react";
import { Article, SortingMethods } from "../types";
import { sortArticles } from "../utils/utils";

export const useArticleSorting = ({ articles }: { articles: Article[] }) => {
  const [sortingMethod, setSortingMethod] = useState<SortingMethods>("default");

  const sortedArticles = useMemo(
    () => sortArticles(sortingMethod, articles),
    [sortingMethod, articles]
  );

  return { articles: sortedArticles, setSortingMethod, sortingMethod };
};
