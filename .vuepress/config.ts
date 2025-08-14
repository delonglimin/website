import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { seoPlugin } from '@vuepress/plugin-seo'
export default defineUserConfig({
  lang: 'zh-CN',
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     lang: 'zh-CN',
  //   },
  //   '/en/': {
  //     lang: 'en-US',
  //   },
  // },
  title: "聊软",
  description: "聊软信息科技，专注聊城本地的高端软件服务提供商。提供软件开发、APP 定制、网站建设、小程序开发、数字大屏可视化、软件外包服务，涵盖 OA 办公系统、ERP 系统、电商平台搭建、微信公众号开发、人工智能应用（数据标注 / 地图标注）等。助力企业数字化转型，提供从系统集成、信息建设到服务运维的全流程解决方案",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],
  bundler: webpackBundler(),
  theme: recoTheme({

    friendshipLinks: [
    {
      title: "码力全开",
      link: "https://www.maliquankai.com/",
      logo: "/logo.png",
    }],
    logo: "/logo.png",
    author: "许得龙",
    authorAvatar: "/head.png",
    colorMode: 'dark', // dark, light, 默认 auto
    colorModeSwitch: true, // 是否展示颜色模式开关，默认 true
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    docsDir: "./",
    editLink: false,
    // series 为原 sidebar
    // series: {
    //   "/docs/theme-reco/": [
    //     {
    //       text: "module one",
    //       children: ["home", "theme"],
    //     },
    //     {
    //       text: "module two",
    //       children: ["api", "plugin"],
    //     },
    //   ],
    // },
    navbar: [
      { text: "首页", link: "/" },
      { text: "企业数字化", link: "/docs/service/enterprisedigital.html" },
      { text: "新媒体营销", link: "/docs/service/xinmeiti.html" },
      {
        text: "服务",
        children: [
          { text: "软件业务", link: "/docs/service/software.html" },
          { text: "网站业务", link: "/docs/service/website.html" },
          { text: "信息咨询", link: "/docs/service/information.html" },
          { text: "人工智能", link: "/docs/service/other.html" },
        ],
      },
      {
        text: "产品",
        children: [
          { text: "商城系统", link: "/docs/product/shop.html" },
          { text: "数字大屏", link: "/docs/product/bigscreen.html" },
          { text: "物业系统", link: "/docs/product/wuye.html" },
          { text: "疗养中心", link: "/docs/product/liaoyang.html" },
          { text: "影视系统", link: "/docs/product/yingshi.html" },
          { text: "生产管理MES", link: "/docs/product/mes.html" },
          { text: "数字孪生", link: "/docs/product/luansheng.html" },
        ],
      },
      { text: "资讯", link: "/categories/xinwen/1.html" },
      { text: '案例', link: '/docs/others/examples.html', icon: 'IconFire' },
      { text: '留言板', link: '/docs/others/message-board.html', icon: 'IconChat' },
      {
        text: "关于",
        children: [
          { text: "关于聊软", link: "/docs/others/aboutcompany.html" },
          { text: "关于我", link: "/docs/others/aboutme.html" },
          { text: "关于你", link: "/series/aboutyou/dif.html" },
        ],
      },
    ],
    autoSetSeries: true,
    commentConfig: {
      type: 'valine',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        appId: 'pi7btdKAt76lDTqqaLVms2yg-gzGzoHsz',
        appKey: 'AiA4zb3rwYFV84137yHVwPjY',
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        hideComments: true // 隐藏评论
      },
    },
    // algolia: {
    //   appId: 'WQOJVVEXIY',
    //   apiKey: 'c0ea83e6919d693517c3bb63aa369927',
    //   indexName: 'xudelongtop_pages',
    //   // placeholder:'搜索',
    //   // contextualSearch: true,
    //   // searchParameters:{
    //   //   facetFilters: ['language:zh-CN'],
    //   //   attributesToRetrieve: ['*'],
    //   //   attributesToSnippet: ['*'],
    //   //   facets: ["*"],
    //   // }
    // },
  }),
  debug: true,
  plugins: [
    photoSwipePlugin({
      selector: '.page-container  img', // 选择器，默认是 .theme-reco-content img
    }),
    baiduAnalyticsPlugin({
      id:"c53af42ac47f387100e65acedcaefed0"
    }),
    sitemapPlugin({
      hostname: 'https://www.xudelong.top',
      extraUrls: [
       '/citys/jinan.html',
       '/citys/qingdao.html',
       '/citys/zibo.html',
       '/citys/zaozhuang.html',
       '/citys/dongying.html',
       '/citys/yantai.html',
       '/citys/weifang.html',
       '/citys/jining.html',
       '/citys/taian.html',
       '/citys/weihai.html',
       '/citys/rizhao.html',
       '/citys/linyi.html',
       '/citys/dezhou.html',
       '/citys/liaocheng.html',
       '/citys/binzhou.html',
       '/citys/heze.html',
      ]
    }),
    seoPlugin({
      hostname: 'https://www.xudelong.top',
    }),
  ],
});
