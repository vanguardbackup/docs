import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vanguard Documentation",
  description: "Documentation for the Vanguard Backup tool.",
  base: "/",
  outDir: 'dist', // Explicitly set the output directory
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Welcome', link: '/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Welcome', link: '/' },
          { text: 'Installation', link: '/installation' },
          { text: 'Version Management', link: '/version' }
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Backup Tasks', link: '/backup-tasks' },
          { text: 'Backup Destinations', link: '/backup-destinations' },
          { text: 'Remote Servers', link: '/remote-servers' },
          { text: 'Notification Streams', link: '/notification-streams' },
          { text: 'Tagging and Organization', link: '/tags' }
        ],
      },
      {
        text: 'Additional Features',
        items: [
          { text: 'Account Settings', link: '/account-options' },
          { text: 'Account Removal', link: '/account-removal' },
          { text: 'FAQ', link: '/frequently-asked-questions' },
        ],
      },
      {
        text: 'Development',
        items: [
          {
            text: 'Development Details', link: '/development',
          }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vanguardbackup/vanguard' }
    ]
  }
})