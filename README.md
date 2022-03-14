# MTTakeaway
 Imitate the website of meituan takeaway

仿美团外卖静态网页
3-10
1、分大组件：

分别是：案例组件、底部组件、头部组件、头部图片组件、新闻组件、服务介绍组件

一、App
1、各个组件的显示与否状态都存放在这里
2、document.documentElement.scrollTop一直时一个初始值不变，原来是没有放到回调函数里面

3、监听滚动条函数最开始用的是window.onmousewheel鼠标滚轮监听，发现如果用鼠标拉右方滚动条并不会触发回调函数，而且鼠标滚轮监听不敏感，有时候已经到最上方还需要滚轮一次，改为
好用！

二、Header
1、首先能确定Header组件始终在页面最上方显示，设置固定钉在浏览器顶部，而且一直显示在最上方，这样就需要设置z-index为最大
position: fixed;
z-index: 99999999;
2、滚动条在最上方与其他状况不同，背景颜色logo和字体颜色都会改变从而让用户体验更好，为需要改变的元素设置两套样式，根据App中的状态（父传子props）

来切换style
3、鼠标悬停在a链接上时要突出，利用hover设置属性：字体变粗、出现边框


三、HeaderImg
1、从后台获取要展示的数据（因为没有图床，加载本地图片来模拟），在useEffect中获取数据

但是如果直接利用得到的数据进行渲染，会报错：axios请求是异步请求，如果请求结果还没返回就利用数据进行渲染直接报错。
解决办法：检测数据有无，如果数据还未返回设置为空，当数据返回状态就会更新，这样会重新渲染。

2、鼠标悬停在按钮上时，突出按钮，利用:hover选择器


3、今天进行测试按钮变大突然用不了，但是用控制台调试可以使用

原因：写Service组件的时候将其z-index设置的较高，z轴方向覆盖了三个按钮。将按钮的z-index设置比Service组件高就行了（ul1是按钮容器）


四、ServiceIntro

1、显示服务介绍title的scrolltop值为555
2、淡入动画同时从下方滑进屏幕，利用动画关键帧


3-11
3、消除li前面的黑点：

4、

原因：

解决：（离谱阿！）


5、清除定时器放在useEffect的返回回调函数中，相当于ComponentWillUnmount


6、这样设置定时器切换显示图片会出现chooseImg一直增长的情况，用其他值存储也会出现设置的值一直为0。

未解决：使用useRef创建一个ref对象，在整个生命周期内都存在不会被清掉。但是这样的话chooseRef自己走自己的，不能手动切换chooseImg让它跟着变。


解决方法：直接用chooseRef是不行的，要用chooseRef.current

3-12
五、Case
1、实现轮播图
由于在bd中设置了overflow: hidden，就可以使超出div宽度的其余图片被隐藏
给大长容器的外层容器设overflow

（1）、test测试


Js部分：




2、return中写Img标签的url不能直接显示，要先引入才能使用图片标签


3、设置padding时两个数之间不用加逗号


4、React操作DOM
一：使用选择器：
1、引入react-dom
    import ReactDom from 'react-dom'
2、给react节点设置id或类名等标识
    <span id='tip'></span>
3、定义变量保存dom元素
    var span = document.getElementById('tip')
4、通过ReactDom的findDOMNode()方法修改dom的属性
    ReactDom.findDOMNode(span).style.color = 'red'
 
 
二：使用ref属性  （函数式用不了）
1、给指定标签设置ref属性
<span ref='tip'></span>
2、通过this.refs.ref属性值来修改标签的属性
this.refs.tip.style.color = "red"



5、轮播图写完后出现情况，只有第一张没有文字，二三张正常，第四张消失


原来是使用cloneNode时不能传入true参数


6、实现轮播div思路：
一共三个div显示界面，并排放在一个大容器里，将大容器设置为overflow:hidden。创建一个和第三个div一模一样的div-1放在最前面。也就是一共四个div，第一个和最后一个一样。从第一个到第四个平滑过渡，第三个到第四个过渡动画完成后，即轮到第四个显示了的瞬间设置大div的状态为初始，也就是显示第一个。虽然是第四个div到第一个div的强硬瞬间过渡却看不出来区别。


7、回退轮播按钮实现：若index为0，关闭动画先瞬间轮到第四个，然后再开启动画往前移动到第三个

定时器是为了让上面轮到第四个的操作先做完。

8、利用小圆点点击来显示相应的图片：（必须用let）

3-13
六、News
1、段落显示



2、利用box-shadow实现：


3-14
1、 三、3
2、 五、7
3、 五、8
4、实现平滑回到顶部，不用a标签#

利用document.documentElement.scrollTop || document.body.scrollTop获得滚动条的位置，然后利用window.scrollTo()每隔一秒向上滚动一点，从而实现平滑滚动的效果。

七、优化
1、
.......
判断的太多了，每次滚动条有变动都要判断这么多次。擅用return提前退出：

这样判断的次数变为1~7次，优化性能


2、Service组件中的右侧手机显示页面，切换太僵硬。加平滑过渡的transition

