// @flow strict

// We don't use these. They're from the fork.
export type CommandType = {|
  name: string,
  url: string,
  searchurl?: string,
  category: string,
|};

export type CommandNames = "DEFAULT";

export type CommandDataTableType = {|
  name: string,
  url: string,
  command: CommandNames,
|};

export type ColumnDataTableType = {|
  data: string,
  title: string,
|};

const personalCommands = {
  gd_personal: {
    name: "Google Drive - Personal",
    url: "https://drive.google.com/drive/u/0/my-drive",
    category: "Personal",
  },
  gm_personal: {
    name: "Gmail - Personal",
    url: "https://mail.google.com/mail/u/0/#inbox",
    category: "Personal",
  },
}

const miscCommands = {
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
    category: "Misc",
  },
  a: {
    name: "Archive",
    url: "https://archive.today/",
    searchurl: "https://archive.today/",
    category: "Misc",
  },
  gm: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/1/#inbox",
    category: "Misc",
  },
  gd: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/u/1/my-drive",
    category: "Misc",
  },
  gh: {
    name: "GitHub",
    url: "https://github.com/",
    category: "Misc",
  },
  task: {
    name: "Notion Schedule",
    url: "https://www.notion.so/484d0eea741c49e5a874f7ffb1dbaf87?v=2e068ad6eae54dd98e1b0b859d2e1159",
    category: "Misc",
  },
  yt: {
    name: "YouTube",
    url: "https://youtube.com/",
    searchurl: "https://www.youtube.com/results?search_query=",
    category: "Misc",
  },
  ig: {
    name: "Instagram",
    url: "https://instagram.com/",
    searchurl: "https://instagram.com/",
    category: "Misc",
  },
  nflix: {
    name: "Netflix",
    url: "https://netflix.com/",
    searchurl: "https://www.netflix.com/search?q=",
    category: "Misc",
  },
  w: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org",
    searchurl: "https://en.wikipedia.org/wiki/",
    category: "Misc",
  },
  lc: {
    name: "Leetcode",
    url: "https://leetcode.com/problemset/",
    category: "Misc",
  },
  leaf: {
    name: "Overleaf",
    url: "https://www.overleaf.com/project",
    category: "Misc",
  },
  dsc: {
    name: "Discord",
    url: "https://discord.com/channels/@me",
    category: "Misc",
  },
  mc: {
    name: "Meta Careers",
    url: "https://www.metacareers.com/profile/new_hire",
    category: "Misc",
  },
  sc: {
    name: "Student Center",
    url: "https://www.studentcenter.cornell.edu",
    category: "Misc",
  },
  trend: {
    name: "Trend",
    url: "https://www.notion.so/avellinom/Trends-173b6f910a2c80aa8babe1934b4e6046",
    category: "Misc",
  },
  code: {
    name: "VSCode",
    url: "vscode://",
    category: "Misc",
  },
  c: {
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    searchurl: "https://chatgpt.com/?q=",
    category: "Misc",
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
    category: "Misc",
  },
}


export const COMMANDS: { [CommandNames]: CommandType } = {
  ...personalCommands,
  ...miscCommands,
};
