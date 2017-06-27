//index.js
//获取应用实例
var app = getApp()
Page({
  
  data:{
    latitude: 23.099994,
    longitude: 113.324520,
    userInfo: {},
    source:'github.com/cristo123'
  },

onLoad: function() {
wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude
        var longitude = res.longitude
        this.setData({
         latitude,
         longitude
       })
      }
    })
  }
  })




// Page({
//   data: {
//     userInfo: {},
//     source:'github.com/cristo123'
//   },
//   onLoad:function() {
//     // 在小程序中  获取用户身份
//     app.getUserInfo((data) => {
//           this.setData({
//             userInfo:data
//           })
//     })
//   },
//   onReady:function() {
//    wx.setNavigationBarTitle({
//      title:'我的'
//    })
//   }
  
// })