import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import './News.css'

export default function News(props) {

  const [dataSource, setdataSource] = useState(null);
  const [index, setindex] = useState(0);
  let icon_box1 = useRef(null)
  let swiper_box = useRef(null)
  var timer

  useEffect(() => {
    axios.get(`http://localhost:5000/newsListData`).then(
      res => {
        setdataSource(res.data)
      }
    )
    return () => clearInterval(timer)
  }, []);

  useEffect(() => {
    var index = 0;

    /*动态添加小圆点*/
    //定义一个小圆点变量
    function icon() {
      var icon = "";
      for (var i = 0; i < 6; i++) {
        icon += "<span></span>";
      }
      icon_box1.current.innerHTML = icon
    }
    icon();

    /*小圆点同步轮播图片选中状态*/
    var icon = icon_box1.current.querySelectorAll("span");

    function activeIcon(index) {
      for (var i = 0; i < 6; i++) {
        icon[i].className = "";
      }
      icon[index].className = "active";
    }
    activeIcon(index);

    /*点击小圆点显示相应的图片*/
    for (let i = 0; i < 6; i++) {
      icon[i].index = i
      icon[i].onclick = function () {
        index = i
        setindex(index)
        //console.log(i);
        openTransition() //打开平滑动画
        indexShow() //进行过渡
        //next.current.onclick();
        activeIcon(index);
      }
    }

    const NextNews = () => {
      index++;
      setindex(index)
      openTransition() //打开平滑动画
      indexShow() //进行过渡
      if (index === 6) { //现在该显示第四个div了
        index = 0;  //瞬间置回第一个div
        setindex(index)
        activeIcon(index) //改变底下小圆点，无论是第几个都要改
        setTimeout(function () { //等第三个到第四个的动画走完
          closeTransition() //关闭平滑动画，因为第一个第四个一样
          indexShow() //大div移动回初始状态第一个
        }, 600)
      } else {
        activeIcon(index)
      }
    }
    timer = setInterval(NextNews, 2500);
    //console.log(next.current.onclick);

    /*鼠标放到容器上停止动画*/
    swiper_box.current.onmouseover = function () {
      clearInterval(timer);
    }
    /*鼠标移开开始动画*/
    swiper_box.current.onmouseout = function () {
      timer = setInterval(NextNews, 2500);
    }

    /*开启过渡效果*/
    function openTransition() {
      swiper_box.current.style.transition = "all .3s";
    }

    /*关闭过渡效果*/
    function closeTransition() {
      swiper_box.current.style.transition = "none";
    }

    /*滚动到index相应的位置*/
    function indexShow() {
      swiper_box.current.style.top = "-" + index * 510 + "px";
    }

  }, [swiper_box]);

  return (
    <div className='NewsBox'>
      <div className={`NewsShow${props.setNewsIntroshow}`}></div>
      <div className={`NewsText${props.NewsText}`}>
        <div className='NewsBackground'></div>
        <div className='Newsloop'>
          <div className='Newslist' ref={swiper_box}>

            <div className='NewsItem'>
              <img src={require(`../../Img/News/NewsItem5.jpg`)} alt="" className='NewsImg' />
              <div className='NewsText'>
                <h2 className='NewsH2'>{dataSource?.data[0]?.title}</h2>
                <div className='NewsDiv'></div>
                <p className='NewsP'>{dataSource?.data[0]?.para}</p>
                <div className='NewsDivButton'>查看详情</div>
              </div>
            </div>

            <div className='NewsItem'>
              <img src={require(`../../Img/News/NewsItem0.jpg`)} alt="" className='NewsImg' />
              <div className='NewsText'>
                <h2 className='NewsH2'>{dataSource?.data[1]?.title}</h2>
                <div className='NewsDiv'></div>
                <p className='NewsP'>{dataSource?.data[1]?.para}</p>
                <div className='NewsDivButton'>查看详情</div>
              </div>
            </div>

            <div className='NewsItem'>
              <img src={require(`../../Img/News/NewsItem1.jpg`)} alt="" className='NewsImg' />
              <div className='NewsText'>
                <h2 className='NewsH2'>{dataSource?.data[2]?.title}</h2>
                <div className='NewsDiv'></div>
                <p className='NewsP'>{dataSource?.data[2]?.para}</p>
                <div className='NewsDivButton'>查看详情</div>
              </div>
            </div>

            <div className='NewsItem'>
              <img src={require(`../../Img/News/NewsItem2.jpg`)} alt="" className='NewsImg' />
              <div className='NewsText'>
                <h2 className='NewsH2'>{dataSource?.data[3]?.title}</h2>
                <div className='NewsDiv'></div>
                <p className='NewsP'>{dataSource?.data[3]?.para}</p>
                <div className='NewsDivButton'>查看详情</div>
              </div>
            </div>

            <div className='NewsItem'>
              <img src={require(`../../Img/News/NewsItem3.jpg`)} alt="" className='NewsImg' />
              <div className='NewsText'>
                <h2 className='NewsH2'>{dataSource?.data[4]?.title}</h2>
                <div className='NewsDiv'></div>
                <p className='NewsP'>{dataSource?.data[4]?.para}</p>
                <div className='NewsDivButton'>查看详情</div>
              </div>
            </div>

            <div className='NewsItem'>
              <img src={require(`../../Img/News/NewsItem4.jpg`)} alt="" className='NewsImg' />
              <div className='NewsText'>
                <h2 className='NewsH2'>{dataSource?.data[5]?.title}</h2>
                <div className='NewsDiv'></div>
                <p className='NewsP'>{dataSource?.data[5]?.para}</p>
                <div className='NewsDivButton'>查看详情</div>
              </div>
            </div>

            <div className='NewsItem'>
              <img src={require(`../../Img/News/NewsItem5.jpg`)} alt="" className='NewsImg' />
              <div className='NewsText'>
                <h2 className='NewsH2'>{dataSource?.data[0]?.title}</h2>
                <div className='NewsDiv'></div>
                <p className='NewsP'>{dataSource?.data[0]?.para}</p>
                <div className='NewsDivButton'>查看详情</div>
              </div>
            </div>
          </div>
        </div>
        <div className='IndexNumber'>0{index + 1}</div>
        <div className='icon_box1' ref={icon_box1}></div>

        <div className='NewsInfo'>
          <div className='NewsList'>
            {dataSource?.title}
            <ul className='NewsUl'>
              <li id='Newsli0'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource?.data[0]?.title}</li>
              <li id='Newsli1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource?.data[1]?.title}</li>
              <li id='Newsli2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource?.data[2]?.title}</li>
              <li id='Newsli3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource?.data[3]?.title}</li>
              <li id='Newsli4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource?.data[4]?.title}</li>
              <li id='Newsli5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataSource?.data[5]?.title}</li>
            </ul>
            </div>
          <div className='NewsMore'>
            <a href="">全部报道</a>&nbsp;&nbsp;
            <img src={require('../../Img/Case/right.png')} alt="" className='NewsMoreImg' />
          </div>
        </div>
      </div>
    </div>
  )
}
