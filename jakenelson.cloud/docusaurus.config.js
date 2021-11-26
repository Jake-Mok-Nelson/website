// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jake Nelson',
  tagline: 'Automating in GCP',
  url: 'https://jakenelson.cloud',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Jake-Mok-Nelson',
  projectName: 'website',
  trailingSlash: true,
  

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Jake-Mok-Nelson/website/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Jake-Mok-Nelson/website/blog/',
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
      navbar: {
        title: 'Jake Nelson',
        // logo: {
        //   alt: 'Jake Nelson Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          { 
            to: '/blog', 
            label: 'Blog', 
            position: 'left', 
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Jake-Mok-Nelson',
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
                label: 'Patterns',
                to: '/docs/patterns/intro',
              },
              {
                label: 'Notes',
                to: '/docs/notes/intro',
              },
            ],
          },
          {
            title: 'Blogs',
              items: [
                { 
                  label: 'Blog', 
                  to: '/blog', 
                },
                {
                  label: 'Medium',
                  to: 'https://jake-mok-nelson.medium.com/',
                },
              ],
            },
          {
          title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                to: 'https://stackoverflow.com/users/2516260/jake-nelson?tab=profile',
              },
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/in/jake-mok-nelson/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'My Github',
                href: 'https://github.com/Jake-Mok-Nelson',
              },
              {
                label: 'This website (as code)',
                href: 'https://github.com/Jake-Mok-Nelson/website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jake Nelson; Built with Docusaurus.`,
      },
      prism: {
        defaultLanguage: 'yaml',
        // additionalLanguages: ['terraform'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
