/***************************表单元素的双向绑定********************
 *1.在元素怒属性前面加上 model: attr 前缀,即可完成双向绑定
 *2.model: attr 属性暂时有问题
 */
Page({
  data: {
    name: '表单元素的双向绑定',
    inputValue:"初始化值",
  },
  clickFun:function(){
    //更新数据
    this.setData({
      inputValue: '改变表单数据',
    });
  },
  getInputVlaue:function(){
   console.log(this.data.inputValue);
  }

})//e
