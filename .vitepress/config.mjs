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
          { text: 'Mobile Application', link: '/mobile-app' },
          { text: 'Two Factor Auth', link: '/two-factor-auth' },
        ],
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Introduction', link: '/api/introduction' },
          { text: 'Authentication', link: '/api/authentication' },
          {
            text: 'Backup Tasks',
            collapsed: true,
            items: [
              { text: 'List Backup Tasks', link: '/api/backup-tasks#list-backup-tasks' },
              { text: 'Create Backup Task', link: '/api/backup-tasks#create-backup-task' },
              { text: 'Show Backup Task', link: '/api/backup-tasks#show-backup-task' },
              { text: 'Update Backup Task', link: '/api/backup-tasks#update-backup-task' },
              { text: 'Delete Backup Task', link: '/api/backup-tasks#delete-backup-task' },
              { text: 'Get Backup Task Status', link: '/api/backup-tasks#get-backup-task-status' },
              { text: 'Get Latest Backup Task Log', link: '/api/backup-tasks#get-latest-backup-task-log' },
              { text: 'Run Backup Task', link: '/api/backup-tasks#run-backup-task' },
            ]
          },
          {
            text: 'Backup Task Logs',
            collapsed: true,
            items: [
              { text: 'List Backup Task Logs', link: '/api/backup-task-logs#list-backup-task-logs' },
              { text: 'Show Backup Task Log', link: '/api/backup-task-logs#show-backup-task-log' },
              { text: 'Delete Backup Task Log', link: '/api/backup-task-logs#delete-backup-task-log' },
            ]
          },
          {
            text: 'Backup Destinations',
            collapsed: true,
            items: [
              { text: 'List Backup Destinations', link: '/api/backup-destinations#list-backup-destinations' },
              { text: 'Create Backup Destination', link: '/api/backup-destinations#create-backup-destination' },
              { text: 'Show Backup Destination', link: '/api/backup-destinations#show-backup-destination' },
              { text: 'Update Backup Destination', link: '/api/backup-destinations#update-backup-destination' },
              { text: 'Delete Backup Destination', link: '/api/backup-destinations#delete-backup-destination' },
            ]
          },
          {
            text: 'Remote Servers',
            collapsed: true,
            items: [
              { text: 'List Remote Servers', link: '/api/remote-servers#list-remote-servers' },
              { text: 'Create Remote Server', link: '/api/remote-servers#create-remote-server' },
              { text: 'Show Remote Server', link: '/api/remote-servers#show-remote-server' },
              { text: 'Update Remote Server', link: '/api/remote-servers#update-remote-server' },
              { text: 'Delete Remote Server', link: '/api/remote-servers#delete-remote-server' },
            ]
          },
          {
            text: 'Notification Streams',
            collapsed: true,
            items: [
              { text: 'List Notification Streams', link: '/api/notification-streams#list-notification-streams' },
              { text: 'Create Notification Stream', link: '/api/notification-streams#create-notification-stream' },
              { text: 'Show Notification Stream', link: '/api/notification-streams#show-notification-stream' },
              { text: 'Update Notification Stream', link: '/api/notification-streams#update-notification-stream' },
              { text: 'Delete Notification Stream', link: '/api/notification-streams#delete-notification-stream' },
            ]
          },
          {
            text: 'Tags',
            collapsed: true,
            items: [
              { text: 'List Tags', link: '/api/tags#list-tags' },
              { text: 'Create Tag', link: '/api/tags#create-tag' },
              { text: 'Show Tag', link: '/api/tags#show-tag' },
              { text: 'Update Tag', link: '/api/tags#update-tag' },
              { text: 'Delete Tag', link: '/api/tags#delete-tag' },
            ]
          },
          {
            text: 'User',
            collapsed: true,
            items: [
              { text: 'Get Current User', link: '/api/user#get-current-user' },
            ]
          }
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