// component/timeCount/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type:String,
      value:'text'
    },
    frontTitle:{
      type:String,
      value:'弹幕'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nowTime:['',''],
    show:false,
    bgColor:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getMoment(){
      var now = new Date();
      this.setData({
        nowTime:[now.getHours(),now.getMinutes()],
        show:!this.data.show
      })
    }
  },
  
  lifetimes:{
    ready(){
      if(this.data.type === 'time'){
          setInterval(() => {
            this.getMoment();
          }, 1000);
      }
    }
  }
})
