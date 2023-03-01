// index.js
// 获取应用实例
const app = getApp()
const API = require("../../http/API")
const http = require("../../http/http")

Page({
  data: {
    // 轮播图图片列表
    rotationList:[],
    // 子菜单列表
    submenus:[],
    // 大触直播列表
    livebroadcastList:[],
    // 热门教程列表
    hotCourseList:[],
    // 问答专区列表
    queanList:[],
    // 素材下载列表
    materialList:[]
  },

  onLoad() {
},
onShow(){
    // 轮播图请求
    http(API.rotation,{type:"m",local_code:"10"}).then(res=>{
        this.setData({
            rotationList:res.data.data
        })
        // console.log(res.data);
    })
    // livebroadcast 大触直播数据
    http(API.livebroadcast,{link:"paging",live:"3",is_live:'1',limit:'3',page:"1"}).then(res=>{
        this.setData({
            livebroadcastList:res.data
        })
        // console.log(res);
    })
    // hotCourse 热门教程数据
    http(API.hotCourse,{}).then(res=>{
        this.setData({
            hotCourseList:res.data
        })
        // console.log(res.data);
    })
    // queans 问答专区数据
    http(API.queans,{}).then(res=>{
        this.setData({
            queanList:res.data
        })
        // console.log(res.data);
    })
    // material 素材下载数据
    http(API.material,{}).then(res=>{
        this.setData({
            materialList:res.data.data
        })
        console.log(res.data.data);
    })


    // 调用菜单数据
    this.getSubments()
  },
    // submenu菜单数据
    getSubments() {
        var arr = [
          {
            title: "免费教程",
            pirUrl: 'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h9-b_1806.png',
            page:''
          },
          {
            title: "专业课程",
            pirUrl: 'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h12-g_1806.png',
            page:''
          },
          {
            title: "大触直播",
            pirUrl: 'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h2-p_2212.png',
            page:''
          },
          {
            title: "教程兑换",
            pirUrl: 'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h10-o_1806.png',
            page:''
          },
          {
            title: "学员成长",
            pirUrl: 'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h9-b_1806.png',
            page:''
          },
          {
            title: "每日一画",
            pirUrl: 'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h11-c_1811.png',
            page:''
          },
          {
            title: "素材下载",
            pirUrl: 'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h14-r_2212.png',
            page:''
          },
          {
            title: "社区问答",
            pirUrl: 'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h5-p_2211.png',
            page:''
          },
        ]
        this.setData({submenus:arr})
    }
})
