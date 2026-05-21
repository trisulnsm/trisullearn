// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // ENABLE MERMAID
  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        blog: {
          showReadingTime: true,

          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'My Site',

        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Glossary',
          },

          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: 'Docs',

            items: [
              {
                label: 'Glossary Category',
                to: '/',
              },
            ],
          },

          {
            title: 'Community',

            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },

              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },

              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },

          {
            title: 'More',

            items: [
              {
                label: 'Blog',
                to: '/blog',
              },

              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;