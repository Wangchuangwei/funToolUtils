import { defineConfig } from 'vitepress'

import getDosc from './script'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CFuncTools",
  description: "A VitePress Site",
  base: "/funToolUtils/",
  outDir: "../docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/index' },
      { text: 'API', 
        items: [
          {text: '1.x文档', link: '/etc/doc/index.md'}
        ]
      },

    ],
    sidebar: {
      "etc/doc": [
          {
              text: 'API',
              items: getDosc('./vitepress/etc/doc/*.md','/etc/doc/'),
          },
      ],
    },
 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wangchuangwei/funToolUtils' }
    ]
  }
})
