import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  primaryHue: 195, // Sky Blue
  useNextSeoProps() {
    return {
      titleTemplate: `%s | SJ II The Coder`
    }
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  search: {
    component: null,
  },
  toc: {
    component: null,
  },
  logo: <span>SJ The Coder</span>,
  project: {
    link: 'https://github.com/sj2245',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/sj2245/sjthecoder',
  footer: {
    // text: 'SJ The Coder',
    component: null,
  },
}

export default config;