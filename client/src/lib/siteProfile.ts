import { MEDIA } from "./siteAssets";

export const SITE_BRAND = {
  name: "LP Space",
  upperName: "LP SPACE",
  metaAuthor: "LP的个人空间",
  siteDescription:
    "一个可复用的赛博朋克个人站模板，用于展示项目、博客、留言与互动功能。",
} as const;

export const DEMO_PROFILE = {
  name: "LP",
  displayName: "落魄（LP）",
  title: "全栈开发者 | AI 应用实践者",
  avatar: MEDIA.placeholders.profileAvatar,
  email: "1469104767@qq.com",
  phone: "+86 185 8248 4767",
  location: "成都 · 中国",
} as const;

export const formatPageTitle = (title: string) =>
  `${title} - ${SITE_BRAND.name}`;
