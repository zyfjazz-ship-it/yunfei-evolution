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
    id: "section-2",
    title: { zh: "Section 2", en: "Section 2" },
    description: {
      zh: "为未来的新内容板块预留。",
      en: "Reserved for a future section.",
    },
    href: undefined,
    active: false,
  },
  {
    id: "section-3",
    title: { zh: "Section 3", en: "Section 3" },
    description: {
      zh: "为未来的新内容板块预留。",
      en: "Reserved for a future section.",
    },
    href: undefined,
    active: false,
  },
  {
    id: "subscribe",
    title: { zh: "Subscribe", en: "Subscribe" },
    description: {
      zh: "订阅功能将在后续版本开放。",
      en: "Subscriptions will be available in a future version.",
    },
    href: undefined,
    active: false,
  },
] as const;
