// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  obj:{
    inputValue:''
  },
  search(){
    wx.request({
      url: 'http://localhost:3000/list',
      data: {
        q:this.obj.inputValue
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      success:(res)=>{
        this.setData({
          list:res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  go(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.id
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
  input(e) {
    this.obj.inputvalue = e.detail.value;

  }
 
})