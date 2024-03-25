// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gravesoft',
  tagline: 'People making open-source and free software.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gravesoft.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Gravesoft', // Usually your GitHub org/user name.
  projectName: 'Gravesoft-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
		  routeBasePath: '/', // Serve the docs at the site's root	
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gravesoft/gravesoft-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gravesoft/gravesoft-site/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/card.png',
      navbar: {
        title: 'Gravesoft',
        logo: {
          alt: 'Gravesoft',
          src: 'img/logo.svg',
        },
        items: [
          {
			to: '/category/our-software/',
            position: 'left',
            label: 'Our Software',
          },
          {
			to: '/category/download-windows--office/',
            position: 'left',
            label: 'Download Windows / Office',
          },
          {
			to: '/category/guides/',
            position: 'left',
            label: 'Guides',
          },
          {
			to: '/news',
            position: 'left',
            label: 'News',
          },
          {
			to: '/credits',
            position: 'left',
            label: 'Credits',
          },
          {
			to: '/troubleshoot',
            position: 'right',
            label: 'Troubleshoot',
          },
          /* {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://discord.gg/yJ8phEmbw9',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/gravesoft',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
/*       footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
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
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
      }, */
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;