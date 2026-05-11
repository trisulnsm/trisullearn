// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Trisul Learn",
  tagline: "Networking Terms Explained Clearly",

  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://yourdomain.com",
  baseUrl: "/",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        docsRouteBasePath: "/",
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      style: "primary",
      title: "Trisul Learn",
      logo: {
        alt: "Trisul Logo",
        src: "img/logo.png",
      },

      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          label: "Glossary",
          position: "left",
        },
        {
          to: "/flow-fundamentals",
          label: "Categories",
          position: "left",
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://www.trisul.org",
          label: "Website",
          position: "right",
        },
      ],
    },

    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} Trisul.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
