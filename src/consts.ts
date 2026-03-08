import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Hamid Yosefsei",
  DESCRIPTION: "Software Engineer. Building SEID Studio & HyOS Infrastructure.",
  AUTHOR: "Hamid Yosefsei",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Technical writing on software engineering, systems, and product development.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Flagship products and open-source projects — powered by HyOS infrastructure.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "hi@seid.dev",
    HREF: "mailto:hi@seid.dev",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Hamido212",
    HREF: "https://github.com/Hamido212",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "hamid-yosefzai",
    HREF: "https://www.linkedin.com/in/hamid-yosefzai/",
  },
]

