const app = getApp()
const http = require("../../http/http");
const API = require("../../http/API");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowPop: false,
    // nav列表
    navList: [],
    // nav索引
    navIndex: 0,
    // 筛选列表
    course: [],
    // 当前筛选的索引
    filterIndex: 0,
    // 是否显示更多筛选
    isShowMore: false,
    // 搜索结果列表
    results: null,
    // 页码
    page: 1,
    limit: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onShow() {
    var arr = [
      {value:"最新"},{value:"入门"},{value:"进阶"},{value:"免费"},{value:"图文"},{value:"兑换"},{value:"专题"},
    ]
    this.setData({navList:arr})
    // https://m.lanqb.com/api/course/video?type=1&page=1&limit=10
    // 筛选标题数据
    http(API.course).then(res=>{
      this.setData({course:res.data.course_subjects})
    })
    // 获取搜索结果列表
    this.getResData({type:1});
  },
  // 获取搜索结果列表
  getResData(type) {
    http(API.resList,{
      ...type,
      page:this.data.page,
      limit:this.data.limit
    }).then(res=>{
      if (this.data.page > 1) {
        this.setData({results:this.data.results.concat(res.data.data)})
      } else {
        this.setData({results:res.data.data})
      }
      
    })
  },
  // 弹出层是否显示
  changePopShow(e) {
    this.setData({
      isShowPop:e.detail
    })
  },
  // 导航栏点击
  navClick(e) {
    this.setData({
      navIndex: e.currentTarget.dataset.index
    },()=>{
      if (this.data.navIndex == 0) this.getResData({type:'1'})
      if (this.data.navIndex == 1) this.getResData({level:'1'})
      if (this.data.navIndex == 2) this.getResData({level:'2,3,4,5'})
      if (this.data.navIndex == 3) this.getResData({is_free:'Y'})
    })
    
  },
  // 点击筛选标题
  filterClick(e) {
    this.setData({filterIndex:e.currentTarget.dataset.index})
    if (!e.currentTarget.id) {
      this.getResData({type:1});
    }
    if (this.data.navIndex == 0 && e.currentTarget.id) this.getResData({type:'1',course_subjects_ids:e.currentTarget.id})
    if (this.data.navIndex == 1) this.getResData({level:'1',course_subjects_ids:e.currentTarget.id})
    if (this.data.navIndex == 2) this.getResData({level:'2,3,4,5',course_subjects_ids:e.currentTarget.id})
    if (this.data.navIndex == 3) this.getResData({is_free:'Y',course_subjects_ids:e.currentTarget.id})
  },
  // 是否显示更多筛选
  moreClick() {
    this.setData({isShowMore:!this.data.isShowMore})
  },
  // 滑到底部触发
  onReachBottom() {
    this.setData({
      page: this.data.page + 1,
      limit: this.data.page * this.data.limit
    })
    this.getResData();
  }
})