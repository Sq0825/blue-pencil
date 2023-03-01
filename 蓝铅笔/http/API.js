const baseurl = "https://m.lanqb.com";
module.exports = {
    // 获取轮播图图片
    rotation: baseurl + '/api/home/banner',
    // 获取大触直播数据
    livebroadcast: baseurl + '/api/daniu',
    // 获取热门教程数据
    hotCourse: baseurl+'/api/home/series',
    // 获取问答专区数据
    queans: baseurl + '/api/home/heat/qa-list',
    // 获取素材下载数据
    material: baseurl + '/api/news',
    // 获取筛选数据
    course: baseurl + '/api/course-group-list',
    // 搜索结果列表
    resList: baseurl + "/api/course/video",
}