import { BiUpvote } from "react-icons/bi";
import { Article as _article } from "../types";

const Article = (props: _article) => {
  const { id, title, upvotes, published_at, featured_image } = props;
  return (
    <div className="article p-3 border mb-3 d-flex" key={id}>
      <img data-testid="image" src={featured_image} alt="" />
      <div className="title flex-grow-1 mx-2">{title}</div>
      <div className="upvotes-and-published-at text-right">
        <div className="upvotes">
          <BiUpvote />
          <span data-testid="upvoteicon">{upvotes}</span>
        </div>
        <div className="published_at text-muted">
          <small>{published_at}</small>
        </div>
      </div>
    </div>
  );
};

export default Article;
