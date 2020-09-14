/*********************************Page()函数******************************
*1.Page()函数用来注册一个页面，接受一个object参数，其指定页面的初始数据、声明周期函数、事件处理函数
*/
const app = getApp();//获取应用实例
let flag=true;
Page({
  //1.页面的初始数据,状态属性，相当于react中的state对象
  data: {
    name: 'index页面',
    color:"window",
  },
  //不能使用箭头函数，否则this为null
  clickFun:function(){
    if(flag){
      this.data.color = "window-red";
      flag = false;//
    }else{
      this.data.color = "window";
      flag = true;
    }
    //更新数据
    this.setData({
      color:this.data.color
    });
    console.log("_self",this);
  },
  //1.页面初始化 options为页面跳转所带来的参数
  onLoad: function (options) {
    console.log("onLoad");
  },
  //2.页面渲染完成
  onReady:function(){
    console.log("onReady");
  },
  //3.页面显示
  onShow:function(){
    console.log("onShow");
  },
  //4.页面隐藏
  onHide:function(){
    console.log("onHide");
  },
  //5.页面关闭
  onUnload:function(){
    console.log("onUnload");
  }
})//e
