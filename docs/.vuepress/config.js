module.exports = {
    title: "lz's Blog",
    description: "",
    dest: "public",
    head: [
        [ "link", { "rel" : "icon","href": "/img/logo.png"}],
        [ 'link', { "rel" : 'stylesheet', "href": '/css/main.css' }],
        [ 'link', { "rel" : 'stylesheet', "href": '/css/animation.css' }],
        [ "meta", { "name" : "viewport", "content": "width=device-width,initial-scale=1,user-scalable=no"}]
    ],
    theme: "reco",
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        postcss: [require('autoprefixer')],
        sass: { "indentedSyntax": true },
        scss: {
            includePaths: ["./public/css/variables.scss"]
        },
        type: "blog",
        logo: "/img/logo.png",
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Last Updated",
        author: "lz's Blog",
        authorAvatar: "/img/logo.png",
        startYear: "2020",
        blogConfig: {
            category: {
                location: 8,     // 在导航栏菜单中所占的位置，默认2
                text: '随笔' // 默认文案 “分类”
            },
            tag: {
                location: 9,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }
        }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['@vuepress/nprogress'],
        [
          'vuepress-plugin-zooming',
          {
            selector: '.my-wrapper .my-img',
            delay: 1000,
            options: {
              bgColor: 'black',
              zIndex: 10000,
            },
          },
        ],
        [
            'vuepress-plugin-clean-urls',
            {
              normalSuffix: '/',
              indexSuffix: '/',
              notFoundPath: '/404.html',
            },
        ],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ],
}