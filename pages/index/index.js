//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    menus:[
      {
        type:'text',
        name:'fluorescence',
        column:1
      },
      {
        type:'text',
        name:'carousel',
        column:1,
        frontTitle:'滚动字幕'
      },
      {
        type:'time',
        component:'timeTick',
        column:2
      },
      {
        type:'colorFlash',
        name:'timeTick',
        column:2,
        frontTitle:'气氛灯'
      }
    ]
  },
  onLoad: function () {
  },
  toView(e){
    let type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '../animationPage/index?type='+type
    })
  }
})
