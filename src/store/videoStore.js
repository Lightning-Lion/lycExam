import { defineStore } from "pinia";

export const useVideoStore = defineStore('videos',{
    state:() => ({
        favoriteVideos:[],
        allVideos:[
            {
                id: 0,
                title: "【你觉得自己这辈子都学不会编程？超超超基础Python课程，3小时快速入门 【自学Python教程合集】【3小时快速入门Python】】 ",
                link: "https://www.bilibili.com/video/BV1944y1x7SW/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video1.jpg"
            },
            {
                id: 1,
                title: "【黑马程序员匠心之作|C++教程从0到1入门编程,学习编程不再难】 ",
                link: "https://www.bilibili.com/video/BV1et411b73Z/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video2.png"
            },
            {
                id: 2,
                title: " 【黑马程序员前端JavaScript入门到精通全套视频教程，javascript核心进阶ES6语法、API、js高级等基础知识和实战教程】 ",
                link: "https://www.bilibili.com/video/BV1Y84y1L7Nn/?share_source=copy_web",
                imageName: "video3.png"
            },
            {
                id: 3,
                title: "【黑马程序员匠心之作|C++教程从0到1入门编程,学习编程不再难】 ",
                link: "https://www.bilibili.com/video/BV1et411b73Z/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video4.png"
            },
            {
                id: 4,
                title: "【黑马程序员 MySQL数据库入门到精通，从mysql安装到mysql高级、mysql优化全囊括】   ",
                link: "https://www.bilibili.com/video/BV1Kr4y1i7ru/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video5.png"
            },
            {
                id: 5,
                title: " 【黑马程序员JavaWeb基础教程，Java web从入门到企业实战完整版】 ",
                link: "https://www.bilibili.com/video/BV1Qf4y1T7Hx/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video6.png"
            },
            {
                id: 6,
                title: " 【前端Web开发HTML5+CSS3+移动web视频教程，前端web入门首选黑马程序员】 ",
                link: "https://www.bilibili.com/video/BV1kM4y127Li/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video7.jpg"
            },
            {
                id: 7,
                title: "  【黑马程序员MySQL知识精讲+mysql实战案例_零基础mysql数据库入门到高级全套教程】",
                link: "https://www.bilibili.com/video/BV1iF411z7Pu/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video8.jpg"
            },
            {
                id: 8,
                title: " 【linux入门到精通，零基础入门linux系统运维】 ",
                link: "https://www.bilibili.com/video/BV1nW411L7xm/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video9.jpg"
            },
            {
                id: 9,
                title: " 【黑马程序员前端AJAX入门到实战全套教程，包含学前端框架必会的（ajax+node.js+webpack+git），一套全覆盖】 ",
                link: "https://www.bilibili.com/video/BV1MN411y7pw/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video10.jpg"
            },
            {
                id: 10,
                title: " 【（强烈建议观看收藏）JSP从入门到精通-Javaweb课堂从入门到实战视频教程-轻松搞定jsp】 ",
                link: "https://www.bilibili.com/video/BV1W64y1C7N8/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video11.jpg"
            },
            {
                id: 11,
                title: " 【PLC编程入门精通】 ",
                link: "https://www.bilibili.com/video/BV1B14y1F7w4/?share_source=copy_web&vd_source=7f90edc932faed9c937ae862eeb66fb9",
                imageName: "video12.jpg"
            }
        ]
    }),
    actions:{

    }
})