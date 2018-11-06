export default {
    singular: true,  // 约定存放页面代码的文件为page单数，，如果指定则为pages
    plugins: [
        ['umi-plugin-react', {
            // 针对插件的一些定制
            antd: true,
            dva:true,
        }]
    ],
    routes: [
        {
            path: '/',
            component: '../layout',
            routes: [
                {
                    path: '/',
                    component: 'HelloWorld'  //是相对于 page 目录的相对路径
                },
                {
                    path: 'helloworld',
                    component: 'HelloWorld'  //是相对于 page 目录的相对路径
                },
                {
                    path: '/dashboard',
                    routes: [
                        { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                        { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                        { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                    ]
                },
                {
                    path:'puzzlecards',
                    component:'./puzzlecards'
                }
            ]
        }

    ]

};