// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.min.js');
Page({
  data: {
    weatherData: ''
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'CGTXytKWYfgL55ID0ZSlce67F4gWsXi9'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + '天气：' + weatherData.weatherDesc + '\n' +'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  },
  //转发
  onShareAppMessage: function (res) {
    if (res.from === 'menu'){

    }
    return {
      title:'',
      path:'',
      success: function (res) {
        //转发成功
        console.log('转发成功')
      },
      fail: function (res) {
        //转发失败
      }
    }
  },
  //关闭下拉刷新
  onPullDownRefresh:function (res) {
    wx.stopPullDownRefresh()
  }
})