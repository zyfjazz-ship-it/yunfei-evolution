export const sections = [
  {
    id: "blog",
    title: { zh: "Blog", en: "Blog" },
    description: {
      zh: "发布所有图文内容，记录学习、实践和复盘。",
      en: "All articles about learning, practice, and reflection.",
    },
    href: "/blog/",
    active: true,
  },
  {
    id: "courses",
    title: { zh: "公开课", en: "Open Courses" },
    description: {
      zh: "历史、经济与 For Kids 三个独立板块，整理已经完成的课程与持续学习路径。",
      en: "Three independent learning tracks across history, economics, and For Kids.",
    },
    href: "/courses/",
    active: true,
  },
  {
    id: "works",
    title: { zh: "作品", en: "Works" },
    description: {
      zh: "用于展示书籍、技术项目、视频与其他创造成果。",
      en: "Books, technology projects, videos, and other creative work.",
    },
    href: "/works/",
    active: true,
  },
  {
    id: "showcase",
    title: { zh: "展示", en: "Showcase" },
    description: {
      zh: "个人经历、创作历程、项目时间线与成长记录。",
      en: "Experience, creative journey, project timeline, and growth notes.",
    },
    href: "/showcase/",
    active: true,
  },
  {
    id: "subscribe",
    title: { zh: "Subscribe", en: "Subscribe" },
    description: {
      zh: "预留邮件订阅入口，及时收到网站的内容更新。",
      en: "A newsletter entry point for future website updates.",
    },
    href: "/subscribe/",
    active: true,
  },
] as const;
