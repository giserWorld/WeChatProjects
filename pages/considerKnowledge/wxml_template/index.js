/********************************template模板******************************
*1.template模板语言就是预定义一个html片段，template模板通过data属性接受数据
   data传递的数据将作为template模板的环境变量
*/
Page({
  data: {
    name:"index",
    user1:{name:"小红",age:25},
    user2:{name:"小李",age:26},
  },
})