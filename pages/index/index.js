/*********************************Page()函数******************************
*1.Page()函数用来注册一个页面，接受一个object参数，其指定页面的初始数据、声明周期函数、事件处理函数
*/
const app = getApp();//获取应用实例
let flag="";
let color="";
Page({
  //1.页面的初始数据
  data: {
    name: 'index页面',
    color:"window",
  },
  //不能使用箭头函数，否则this为null
  clickFun:function(){
    console.log("点击了文字！！");
    if(flag){
      color = "window-red";
      flag = false;//
    }else{
      color = "window";
      flag = true;
    }
    //更新数据
    this.setData({
      color:color
    });
  },
  //1.页面初始化 options为页面跳转所带来的参数
  onLoad: function (options) {

  },
  //2.页面渲染完成
  onReady:function(){
    
  },
  //3.页面显示
  onShow:function(){
    
  },
  //4.页面隐藏
  onHide:function(){
   
  },
  //5.页面关闭
  onUnload:function(){
    
  }
})//e
