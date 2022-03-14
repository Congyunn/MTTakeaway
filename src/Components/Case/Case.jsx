import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import './Case.css'

export default function Case(props) {

  const [dataSource, setdataSource] = useState([]);
  let swiper_box = useRef(null)
  let next = useRef(null)
  let icon_box = useRef(null)
  let prve = useRef(null)
  let last = useRef(null)
  let first = useRef(null)
  let second = useRef(null)
  var timer

  useEffect(() => {
    axios.get(`http://localhost:5000/story`).then(
      res => {
        setdataSource(res.data)
        //console.log(res.data);
      }
    )

    return () => {
      clearInterval(timer)
    }
  }, []);

  useEffect(() => {
    var index = 0;

    /*动态添加小圆点*/
    //定义一个小圆点变量
    function icon() {
      var icon = "";
      for (var i = 0; i < 3; i++) {
        icon += "<span></span>";
      }
      icon_box.current.innerHTML = icon
    }
    icon();

    /*设置轮播容器长度为所有图片长度之和*/
    swiper_box.current.style.width = 980 * 4 + "px";

    /*小圆点同步轮播图片选中状态*/
    var icon = icon_box.current.querySelectorAll("span");

    function activeIcon(index) {
      for (var i = 0; i < 3; i++) {
        icon[i].className = "";
      }
      icon[index].className = "active";
    }
    activeIcon(index);
    /*点击小圆点显示相应的图片*/
    for (let i = 0; i < 3; i++) {
      icon[i].index = i
      icon[i].onclick = function () {
        index = i
        //console.log(i);
        openTransition() //打开平滑动画
        indexShow() //进行过渡
         //next.current.onclick();
         activeIcon(index);
      }
    }

    /*点击下一张图片按钮*/
    //console.log(next);
    next.current.onclick = function () {
      index++;
      openTransition() //打开平滑动画
      indexShow() //进行过渡
      if (index === 3) { //现在该显示第四个div了
        index = 0;  //瞬间置回第一个div
        activeIcon(index) //改变底下小圆点，无论是第几个都要改
        setTimeout(function () { //等第三个到第四个的动画走完
          closeTransition() //关闭平滑动画，因为第一个第四个一样
          indexShow() //大div移动回初始状态第一个
        }, 600)
      } else {
        activeIcon(index)
      }
    }

    /*点击上一张图片按钮*/
    prve.current.onclick = function () {
      //console.log(index);
      if (index === 0) {
        //console.log("object");
        index = 3
        closeTransition()
        indexShow()
      }
      index--
      setTimeout(() => {
        openTransition()
        indexShow()
        activeIcon(index)
      }, 0);
    }

    timer = setInterval(next.current.onclick, 2500);
    //console.log(next.current.onclick);

    /*鼠标放到容器上停止动画*/
    swiper_box.current.onmouseover = function () {
      clearInterval(timer);
    }
    /*鼠标移开开始动画*/
    swiper_box.current.onmouseout = function () {
      timer = setInterval(next.current.onclick, 2500);
    }

    /*开启过渡效果*/
    function openTransition() {
      swiper_box.current.style.transition = "all .6s";
    }

    /*关闭过渡效果*/
    function closeTransition() {
      swiper_box.current.style.transition = "none";
    }

    /*滚动到index相应的位置*/
    function indexShow() {
      swiper_box.current.style.left = "-" + index * 980 + "px";
    }

  }, [swiper_box]);

  return (
    <div className='CaseDiv'>
      <div className={`CaseShow${props.CaseInrtoshow}`} ></div>
      <div className='CaseBox'>
        <div className={`CaseText`}>
          <div className={`CaseBackground${props.CaseText}`}></div>
          <div className={`CaseStory${props.CaseText}`}>
            <div className='LeftArrow' ref={prve}></div>
            <div className='slick-list'>
              <div className={`slick-track`} ref={swiper_box} >

                <div className='CaseItem-1' ref={last}>
                  <div className='CaseText-1'>
                    <h2 className='ItemH2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource[2]?.tit}</h2>
                    <h3 className='ItemH3'>{dataSource[2]?.subtit}</h3>
                    <p className='ItemP'>{dataSource[2]?.desc}</p>
                  </div>
                  <img src={require(`../../Img/Case/CaseItem2.jpg`)} alt="" style={{ float: 'right', width: '360px', height: '360px' }} />
                </div>

                <div className='CaseItem0' ref={first}>
                  <div className='CaseText0'>
                    <h2 className='ItemH2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource[0]?.tit}</h2>
                    <h3 className='ItemH3'>{dataSource[0]?.subtit}</h3>
                    <p className='ItemP'>{dataSource[0]?.desc}</p>
                  </div>
                  <img src={require(`../../Img/Case/CaseItem0.jpg`)} alt="" style={{ float: 'right', width: '360px', height: '360px' }} />
                </div>

                <div className='CaseItem1' ref={second}>
                  <div className='CaseText1'>
                    <h2 className='ItemH2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource[1]?.tit}</h2>
                    <h3 className='ItemH3'>{dataSource[1]?.subtit}</h3>
                    <p className='ItemP'>{dataSource[1]?.desc}</p>
                  </div>
                  <img src={require(`../../Img/Case/CaseItem1.jpg`)} alt="" style={{ float: 'right', width: '360px', height: '360px' }} />
                </div>

                <div className='CaseItem2' ref={last}>
                  <div className='CaseText2'>
                    <h2 className='ItemH2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource[2]?.tit}</h2>
                    <h3 className='ItemH3'>{dataSource[2]?.subtit}</h3>
                    <p className='ItemP'>{dataSource[2]?.desc}</p>
                  </div>
                  <img src={require(`../../Img/Case/CaseItem2.jpg`)} alt="" style={{ float: 'right', width: '360px', height: '360px' }} />
                </div>

              </div>
            </div>
            <div className='RightArrow' ref={next}></div>
          </div>
          <div className='icon_box' ref={icon_box}></div>
        </div>

      </div>
    </div>
  )
}
