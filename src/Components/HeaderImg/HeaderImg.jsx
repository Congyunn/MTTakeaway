import { Button } from 'antd';
import { RightOutlined, HomeOutlined,UserAddOutlined,UsergroupAddOutlined } from '@ant-design/icons'; 
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import './HeaderImg.css'

export default function HeaderImg() {
  const [headerLinks, setheaderLinks] = useState([]);
  let headerImgUrl
  useEffect(() => {
    axios.get(`http://localhost:5000/img`).then(
      res => {
        headerImgUrl = res.data.headerImg
        //console.log(headerImgUrl);
      }
    )

    axios.get(`http://localhost:5000/headerLinks`).then(
    res => {
      //console.log(res.data);
      setheaderLinks(res.data)
      //console.log(headerLinks[0].tit);
    }
  )
  }, []);


  return (
    <div id='headerI'>
      <div className='headerImg'></div>
      <ul id='ul1'>
        <li id='li1'>
          <Button type="primary" id='text1'><span style={{ fontSize: "25px" }}><HomeOutlined /> {headerLinks[0]?.tit} <RightOutlined /></span><br />
          <span>{headerLinks[0]?.subtit}</span></Button>
        </li>
        <li id='li1'>
          <Button type="primary" id='text2'><span style={{ fontSize: "25px" }}><UsergroupAddOutlined /> {headerLinks[1]?.tit} <RightOutlined /></span><br />
          <span>{headerLinks[1]?.subtit}</span></Button>
        </li>
        <li id='li1'>
          <Button type="primary" id='text3'><span style={{ fontSize: "25px" }}><UserAddOutlined /> {headerLinks[2]?.tit} <RightOutlined /></span><br />
          <span>{headerLinks[2]?.subtit}</span></Button>
        </li>
      </ul>
    </div>
  )
}
