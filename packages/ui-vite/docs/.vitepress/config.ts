import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  '/components/': [
    {
      text: '快速开始',
      collapsible: false,
      items: [
        { text: '安装步骤', collapsible: false, link: '/components/index' },
      ]
    },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
      ]
    },
    {
      text: '导航', items: [
      ]
    },
    {
      text: '反馈', items: [
      ]
    },
    {
      text: '数据录入', items: [
      ]
    },
    {
      text: '数据展示', items: [
      ]
    },
    {
      text: '布局', items: [
      ]
    },
  ]
}

const config = {
  title: "🔨  Maas-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    sidebar,
    demoblock: {
      '/': {
        'hide-text': 'Hide',
        'show-text': 'Expand',
        'copy-button-text': 'Copy',
        'copy-success-text': 'Copy success'
      },
      '/zh': {
        'hide-text': '隐藏代码',
        'show-text': '显示代码',
        'copy-button-text': '复制代码片段',
        'copy-success-text': '复制成功'
      }
    },
  },

  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin)
    }
  }
}
export default defineConfig(config as any)



