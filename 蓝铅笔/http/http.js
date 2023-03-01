module.exports = function(url,data,config) {
    return new Promise((resolve,reject)=>{
      wx.showLoading({
        title: '正在加载中……',
      })
      wx.request({
        url,
        data: {
          ...data,
          cookie: wx.getStorageSync('cookie')
        },
        header: {
          cookie: wx.getStorageSync('cookie')
        },
        ...config,
        success: res=>{
          resolve(res)
        },
        fail: err=> {
          reject(err)
        },
        complete: res=>{
          wx.hideLoading();
          if (res.statusCode.toString().startsWith("2")) {
            wx.showToast({
              title: '请求成功',
            })
          } else {
            wx.showToast({
              title: '请求失败',
              icon: "error"
            })
          }
        }
      })
    })
  }