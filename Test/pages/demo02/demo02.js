// pages/demo02/demo02.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  onclick(e){
    console.log("o(*￣︶￣*)o");
    console.log(e);
    
    this.setData({
      num:e.detail.value
    })
  },
  dj(e){
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num:this.data.num + operation
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})