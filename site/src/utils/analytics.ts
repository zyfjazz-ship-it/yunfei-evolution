export interface ArticleViewCount {
  contentId: string;
  views: number | null;
  provider: "google-analytics" | "umami" | "custom" | "none";
}

export interface ViewCountProvider {
  getArticleViews(contentId: string): Promise<ArticleViewCount>;
}

export const disabledViewCount: ArticleViewCount = {
  contentId: "",
  views: null,
  provider: "none",
};

