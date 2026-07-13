export const site = {
  name: "云非的进化论",
  author: "云非",
  description: "持续学习，持续实践，持续复盘，持续进化。",
};

export const copy = {
  zh: {
    blog: "Blog",
    intro: "记录学习、实践与复盘，也记录一个普通人的持续进化。",
    readMore: "阅读全文",
    allPosts: "全部文章",
    latestPosts: "最新文章",
    viewAllPosts: "查看全部文章",
    noPosts: "文章正在准备中。",
    switchLanguage: "English",
    works: "作品",
    showcase: "展示",
    subscribe: "订阅",
    noWorks: "作品正在准备中。",
  },
  en: {
    blog: "Blog",
    intro: "Notes on learning, practice, reflection, and continuous evolution.",
    readMore: "Read article",
    allPosts: "All posts",
    latestPosts: "Latest posts",
    viewAllPosts: "View all posts",
    noPosts: "Articles are being prepared.",
    switchLanguage: "中文",
    works: "Works",
    showcase: "Showcase",
    subscribe: "Subscribe",
    noWorks: "Works are being prepared.",
  },
} as const;

export type Language = keyof typeof copy;
