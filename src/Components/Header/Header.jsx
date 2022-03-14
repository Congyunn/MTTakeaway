import React from 'react'
import './Header.css'

export default function Header(props) {
  return (
    <div className={`csr-header${props.HeadColor}`}>
      <div className={`header-content`}>
        <div id={`left${props.HeadColor}`}></div>

        <div id='right'>
          <ul id='headerul'>
            <li id={`headerli${props.HeadColor}`}><a href="/" className='headera'>首页</a></li>
            <li id={`headerli${props.HeadColor}`}><a href="/" className='headera'>入驻平台</a></li>
            <li id={`headerli${props.HeadColor}`}><a href="/" className='headera'>开放平台</a></li>
            <li id={`headerli${props.HeadColor}`}><a href="/" className='headera'>社会责任</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
