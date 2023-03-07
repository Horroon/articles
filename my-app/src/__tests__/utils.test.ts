import DATA from "../MOCK_DATA.json";
import { Article } from "../types";
import { sortArticles } from "../utils/utils";

describe("testing sorting function", () => {
  it("sorts by most-upvotes correctly", () => {
    const articles: Article[] = [
      { ...DATA[0], id: 1, upvotes: 7 },
      { ...DATA[1], id: 2, upvotes: 8 },
      { ...DATA[2], id: 3, upvotes: 9 },
    ];
    const sortedArticles = sortArticles("most-upvotes", articles);
    expect(sortedArticles[0]).toHaveProperty("id", 3);
    expect(sortedArticles[1]).toMatchObject({ id: 2 });
    expect(sortedArticles[2]).toMatchObject({ id: 1 });
  });
  it("sorts by most-recent correctly", () => {
    const articles: Article[] = [
      { ...DATA[0], id: 1, published_at: "1/1/1970" },
      { ...DATA[1], id: 2, published_at: "1/2/1970" },
      { ...DATA[2], id: 3, published_at: "1/3/1970" },
    ];
    const sortedArticles = sortArticles("most-recent", articles);
    expect(sortedArticles[0]).toHaveProperty("id", 3);
    expect(sortedArticles[1]).toMatchObject({ id: 2 });
    expect(sortedArticles[2]).toMatchObject({ id: 1 });
  });
  it("it returns the original array for default sort", () => {
    const articles: Article[] = DATA;
    expect(sortArticles("default", articles)).toBe(articles);
  });
});
