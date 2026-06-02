// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Glossary',
  favicon: 'img/Trisul Logo BG Removed.png',

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
        title: 'Trisul Learn',

        logo: {
          alt: 'Trisul Logo',
          src: 'img/Trisul Logo BG Removed.png',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Glossary',
          },
          {
            to: '/docs/glossary/a',
            label: 'A',
            position: 'left',
          },
          {
            to: '/docs/glossary/b',
            label: 'B',
            position: 'left',
          },
          {
            to: '/docs/glossary/c',
            label: 'C',
            position: 'left',
          },
          {
            to: '/docs/glossary/d',
            label: 'D',
            position: 'left',
          },
          {
            to: '/docs/glossary/e',
            label: 'E',
            position: 'left',
          },
          {
            to: '/docs/glossary/f',
            label: 'F',
            position: 'left',
          },
          {
            to: '/docs/glossary/g',
            label: 'G',
            position: 'left',
          },
          {
            to: '/docs/glossary/h',
            label: 'H',
            position: 'left',
          },
          {
            to: '/docs/glossary/i',
            label: 'I',
            position: 'left',
          },
          {
            to: '/docs/glossary/j',
            label: 'J',
            position: 'left',
          },
          {
            to: '/docs/glossary/k',
            label: 'K',
            position: 'left',
          },
          {
            to: '/docs/glossary/l',
            label: 'L',
            position: 'left',
          },
          {
            to: '/docs/glossary/m',
            label: 'M',
            position: 'left',
          },
          {
            to: '/docs/glossary/n',
            label: 'N',
            position: 'left',
          },
          {
            to: '/docs/glossary/o',
            label: 'O',
            position: 'left',
          },
          {
            to: '/docs/glossary/p',
            label: 'P',
            position: 'left',
          },
          {
            to: '/docs/glossary/q',
            label: 'Q',
            position: 'left',
          },
          {
            to: '/docs/glossary/r',
            label: 'R',
            position: 'left',
          },
          {
            to: '/docs/glossary/s',
            label: 'S',
            position: 'left',
          },
          {
            to: '/docs/glossary/t',
            label: 'T',
            position: 'left',
          },
          {
            to: '/docs/glossary/u',
            label: 'U',
            position: 'left',
          },
          {
            to: '/docs/glossary/v',
            label: 'V',
            position: 'left',
          },
          {
            to: '/docs/glossary/w',
            label: 'W',
            position: 'left',
          },
          {
            to: '/docs/glossary/x',
            label: 'X',
            position: 'left',
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