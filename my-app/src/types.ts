export interface Article {
  id: number;
  title: string;
  upvotes: number;
  published_at: string;
  featured_image: string;

  [key: string]: any;
}

export type SortingMethods = "default" | "most-upvotes" | "most-recent";
