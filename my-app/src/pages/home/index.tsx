import DUMMY_DATA from "../../MOCK_DATA.json";
import Article from "../../components/Article";
import { useArticleSorting } from "../../hooks/useArticleSorting";

export function Home() {
  const { setSortingMethod, sortingMethod, articles } = useArticleSorting({
    articles: DUMMY_DATA,
  });

  return (
    <div className="container my-3">
      <div className="display-3 mb-3">Articles</div>
      <div className="row my-3 ">
        <div className="articles col-8">
          <div className="btn-group my-3">
            <button
              className={
                "btn btn-sm" +
                (sortingMethod === "default"
                  ? " btn-primary"
                  : " btn-secondary")
              }
              onClick={(e) => setSortingMethod("default")}
            >
              Sort by default
            </button>
            <button
              className={
                "btn btn-sm" +
                (sortingMethod === "most-upvotes"
                  ? " btn-primary"
                  : " btn-secondary")
              }
              onClick={(e) => setSortingMethod("most-upvotes")}
            >
              Sort by most upvotes
            </button>
            <button
              className={
                "btn btn-sm" +
                (sortingMethod === "most-recent"
                  ? " btn-primary"
                  : " btn-secondary")
              }
              onClick={(e) => setSortingMethod("most-recent")}
            >
              Sort by most recent
            </button>
          </div>
          {articles.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
