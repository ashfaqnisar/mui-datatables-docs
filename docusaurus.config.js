// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
const math = require('remark-math');

const repoLink = "https://github.com/ashfaqnisar/mui-datatables-docs/tree/main"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MUI Datatables',
  tagline: 'Datatables for Material UI',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ashfaqnisar', // Usually your GitHub org/user name.
  projectName: 'mui-datatables-repo', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: repoLink,
          showLastUpdateTime: true,
          remarkPlugins: [math, [npm2yarn, {sync: true}]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: repoLink,
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'MUI Datatables',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/gregnb/mui-datatables',
            label: 'Repo',
            position: 'left',
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
                label: 'Introduction',
                to: '/docs/intro',
              }, {
                label: 'Installation',
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
                label: 'changelog',
                to: '/changelog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gregnb/mui-datatables',
              },
            ],
          },
        ],
        copyright: `Made with love by Ashfaqnisar`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
