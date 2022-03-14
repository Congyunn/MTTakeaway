import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import './ServiceIntro.css'

export default function ServiceIntro(props) {

  const [dataSource, setdataSource] = useState(null);

  const [chooseImg, setchooseImg] = useState(0);

  let chooseRef = useRef(0);
  chooseRef.current = chooseImg

  useEffect(() => {
    axios.get(`http://localhost:5000/category`).then(
      res => {
        setdataSource(res.data)
        //console.log(res.data);
      }
    )

    var timer = setInterval(() => {
      if(chooseRef.current === 3){
        chooseRef.current = -1
      }
      chooseRef.current++
      setchooseImg(chooseRef.current)
      //console.log(chooseImg);
    }, 2000);
    return ()=>{
      clearInterval(timer)
    }
  }, []);

  
  return (
    <div id='ServiceBox'>
      <div className={`ServiceShow${props.ServiceIntroShow}`} ></div>
      <div className={`ServiceText${props.ServiceText}`}>
        <div id={'servicetitle'}>{dataSource?.tit}</div>
        <ul id='ServiceUl'>
          <li id={`ServiceText0`} onMouseOver={() => {
            setchooseImg(0)
          }}
            onMouseOut={() => {
              setchooseImg(0)
            }}>
            <span id={`ServiceTitle0${chooseImg}`}>{dataSource?.data[0].tit}</span>
            <br /><span id={`ServiceSubtitle0${chooseImg}`}>{dataSource?.data[0].subtit}</span></li>

          <li id={`ServiceText1${chooseImg}`} onMouseOver={() => {
            setchooseImg(1)
          }}
            onMouseOut={() => {
              setchooseImg(1)
            }}>
            <span id={`ServiceTitle1${chooseImg}`}>{dataSource?.data[1].tit}</span>
            <br /><span id={`ServiceSubtitle1${chooseImg}`}>{dataSource?.data[1].subtit}</span></li>

          <li id={`ServiceText2${chooseImg}`} onMouseOver={() => {
            setchooseImg(2)
          }}
            onMouseOut={() => {
              setchooseImg(2)
            }}>
            <span id={`ServiceTitle2${chooseImg}`}>{dataSource?.data[2].tit}</span>
            <br /><span id={`ServiceSubtitle2${chooseImg}`}>{dataSource?.data[2].subtit}</span></li>

          <li id={`ServiceText3${chooseImg}`} onMouseOver={() => {
            setchooseImg(3)
          }}
            onMouseOut={() => {
              setchooseImg(3)
            }}>
            <span id={`ServiceTitle3${chooseImg}`}>{dataSource?.data[3].tit}</span>
            <br /><span id={`ServiceSubtitle3${chooseImg}`}>{dataSource?.data[3].subtit}</span></li>
        </ul>

        <div id='PhonePart'>
          <div id='PhoneOut'>
            <div id={`PhoneInside${chooseImg}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}