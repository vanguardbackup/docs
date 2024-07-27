import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Vanguard Documentation",
  description: "Documentation for Vanguard - the open-source backup solution for server and application backup, built by the community for the community.",
  lang: 'en-US',
  head: [
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
    ['link', { rel: 'mask-icon', href: '/mask-icon.svg', color: '#000000' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Vanguard Documentation' }],
    ['meta', { name: 'og:description', content: 'Documentation for Vanguard - the open-source backup solution for server and application backup.' }],
    ['meta', { name: 'og:image', content: 'https://docs.vanguardbackup.com/og-image.jpg' }],
    ['meta', { name: 'og:url', content: 'https://docs.vanguardbackup.com' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Vanguard Documentation' }],
    ['meta', { name: 'twitter:description', content: 'Documentation for Vanguard - the open-source backup solution for server and application backup.' }],
    ['meta', { name: 'twitter:image', content: 'https://docs.vanguardbackup.com/og-image.jpg' }],
    ['meta', { name: 'keywords', content: 'vanguard, backup, server backup, application backup, open-source' }],
    ['link', { rel: 'canonical', href: 'https://docs.vanguardbackup.com' }],
    [
      'script',
      { defer: true, src: 'https://cloud.umami.is/script.js', 'data-website-id': 'dddc4318-80d9-454a-b9dc-5930195672e4' }
    ]
  ],
  base: "/",
  outDir: 'dist',
  lastUpdated: false,
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
    logoLink: '/',
    sitemap: {
      hostname: 'https://docs.vanguardbackup.com/'
    },
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/vanguardbackup/docs/edit/main/:path'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Website', link: 'https://vanguardbackup.com' },
      { text: 'Project Repo', link: 'https://github.com/vanguardbackup/vanguard' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation Guide', link: '/installation' },
          { text: 'Version Management', link: '/version' },
          { text: 'CLI Commands', link: '/commands' },
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Backup Tasks', link: '/backup-tasks' },
          { text: 'Backup Destinations', link: '/backup-destinations' },
          { text: 'Remote Servers', link: '/remote-servers' },
          { text: 'Notification Streams', link: '/notification-streams' },
          { text: 'Organizing with Tags', link: '/tags' }
        ],
      },
      {
        text: 'User Features',
        items: [
          { text: 'Managing Your Account', link: '/your-profile' },
          { text: 'Removing Your Account', link: '/account-removal' },
        ],
      },
      {
        text: 'API Reference',
        items: [
          { text: 'API Overview', link: '/api' }
        ]
      },
      {
        text: 'For Developers',
        items: [
          { text: 'Developer Handbook', link: '/development-handbook' },
          { text: 'Updating Version Numbers', link: '/bumping-the-version' },
          { text: 'CI/CD Pipeline Overview', link: '/about-ci-cd' },
        ],
      },
      {
        text: 'Support',
        items: [
          { text: 'Frequently Asked Questions', link: '/frequently-asked-questions' },
        ],
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vanguardbackup/docs' }
    ],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue']
  }
})