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
    noPosts: "文章正在准备中。",
    switchLanguage: "English",
  },
  en: {
    blog: "Blog",
    intro: "Notes on learning, practice, reflection, and continuous evolution.",
    readMore: "Read article",
    allPosts: "All posts",
    noPosts: "Articles are being prepared.",
    switchLanguage: "中文",
  },
} as const;

export type Language = keyof typeof copy;
