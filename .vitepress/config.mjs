import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Vanguard Documentation",
  description: "Documentation for Vanguard - the open-source backup solution for server and application backup, built by the community for the community.",
  base: "/",
  outDir: 'dist',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
    logoLink: '/',
    sitemap: {
      hostname: 'https://docs.vanguardbackup.com'
    },
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/vanguardbackup/docs/edit/main/:path'
    },
    nav: [
      { text: 'Home', link: '/' },
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
    ]
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