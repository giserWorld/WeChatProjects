Page({
  //1.页面的初始数据,状态属性，相当于react中的state对象
  data: {//页面数据
    name: '数据绑定页面',
  },
  //不能使用箭头函数，否则this为null
  clickFun:function(){
    //更新数据
    this.setData({
      name: '刷线页面',
    });
  }
})//e
