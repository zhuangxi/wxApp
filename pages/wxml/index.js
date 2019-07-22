// pages/wxml/index.js
var funcs = require('./func.js')

var sayHello = require('./common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: (new Date()).toString(),
    condition: true,
    persons: [{
        name: 'jack',
        sex: 'man'
      },
      {
        name: 'rose',
        sex: 'woman'
      }
    ],
    objArray: [{
        id: 5,
        unique: 'unique_5'
      },
      {
        id: 4,
        unique: 'unique_4'
      },
      {
        id: 3,
        unique: 'unique_3'
      },
      {
        id: 2,
        unique: 'unique_2'
      },
      {
        id: 1,
        unique: 'unique_1'
      },
      {
        id: 0,
        unique: 'unique_0'
      }
    ],
    numberArray: [1, 2, 3, 4],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-06-18'
    }
  },

  helloMina: function(){
    sayHello('Minaxi')
  },
  hello: function(e){
    let name = e.currentTarget.dataset['name']
    funcs.hello(name)
  },
  goodbye: function(e){
    funcs.goodbye('kjk76')
  },

  switch: function() {
    const length = this.data.objArray.length
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objArray[x]
      this.data.objArray[x] = this.data.objArray[y]
      this.data.objArray[y] = temp
    }
    this.setData({
      objArray: this.data.objArray
    })
  },

  addToFront: function(e) {
    const length = this.data.objArray.length
    this.data.objArray = [{
      id: length,
      unique: 'unique_' + length
    }].concat(this.data.objArray)
    this.setData({
      objArray: this.data.objArray
    })
  },

  addNumberToFront(){
    this.data.numberArray = [this.data.numberArray.length+1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   * 进入小程序之后，用户可以点击右上角的关闭，或者按手机设备的Home键离开小程序，此时小程序并没有被直接销毁，我们    * 把这种情况称为“小程序进入后台状态”，App构造器参数所定义的onHide方法会被调用。
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   * 当再次回到微信或者再次打开小程序时，微信客户端会把“后台”的小程序唤醒，我们把这种情况称为“小程序进入前台状态”    * ，App构造器参数所定义的onShow方法会被调用。
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '分享',
      path: '/page/user?id=123'
    }
  }
})