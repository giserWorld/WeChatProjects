/********************************if条件渲染******************************
*1.
*/
Page({
  data: {
    name:"if条件渲染",
    type:"1",
  },
  clickFun:function(){
    this.setData({
      type:"2",
    });
  }
})