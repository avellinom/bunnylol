// @flow strict

export type CommandType = {|
  name: string,
  url: string,
  searchurl?: string,
  category: string,
|};

export type CommandNames =
  | "fb"
  | "m"
  | "mw"
  | "wa"
  | "waw"
  | "gm"
  | "yt"
  | "gh"
  | "r"
  | "l"
  | "ig"
  | "tw"
  | "n"
  | "pv"
  | "gd"
  | "wiki"
  | "g"
  | "kz"
  | "nhs"
  | "ol"
  | "db"
  | "al"
  | "bl"
  | "pw"
  | "DEFAULT";

export type CommandDataTableType = {|
  name: string,
  url: string,
  command: CommandNames,
|};

export type ColumnDataTableType = {|
  data: string,
  title: string,
|};

export const COMMANDS: { [CommandNames]: CommandType } = {
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
    category: "Search",
  },
  gm_personal: {
    name: "Gmail - Personal",
    url: "https://mail.google.com/mail/u/0/#inbox",
    category: "Mail",
  },
  gm: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/1/#inbox",
    category: "Mail",
  },
  gd_personal: {
    name: "Google Drive - Personal",
    url: "https://drive.google.com/drive/u/0/my-drive",
    category: "File Storage",
  },
  gd: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/u/1/my-drive",
    category: "File Storage",
  },
  schedule: {
    name: "Notion Schedule",
    url: "https://www.notion.so/484d0eea741c49e5a874f7ffb1dbaf87?v=2e068ad6eae54dd98e1b0b859d2e1159",
    category: "Productivity",
  },
  yt: {
    name: "YouTube",
    url: "https://youtube.com/",
    searchurl: "https://www.youtube.com/results?search_query=",
    category: "Search",
  },
  redd: {
    name: "Reddit",
    url: "https://reddit.com/",
    searchurl: "https://www.reddit.com/search?q=",
    category: "Social Media",
  },
  linked: {
    name: "Linkedin",
    url: "https://linkedin.com/",
    category: "Social Media",
  },
  ig: {
    name: "Instagram",
    url: "https://instagram.com/",
    searchurl: "https://instagram.com/",
    category: "Social Media",
  },
  nflix: {
    name: "Netflix",
    url: "https://netflix.com/",
    searchurl: "https://www.netflix.com/search?q=",
    category: "Streaming",
  },
  wiki: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org",
    searchurl: "https://en.wikipedia.org/wiki/",
    category: "Search",
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
    category: "Search",
  },
};
