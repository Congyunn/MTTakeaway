import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='FooterBox'>
      <div className='FooterInfo'>
        <div className='left'>
          <ul className='FooterCol1'>
            <li><a href="">开放平台</a></li>
            <li><a href="">媒体报道</a></li>
            <li><a href="">资质规则</a></li>
            <li><a href="">入住加盟</a></li>
          </ul>

          <ul className='FooterCol2'>
            <li><a href="">常见问题</a></li>
            <li><a href="">用户反馈</a></li>
            <li><a href="">诚信举报</a></li>
            <li><a href="">加入我们</a></li>
          </ul>
        </div>

        <div className='middle'>
          <div className='Cooperation'>
            <div className='title'>品牌合作</div>
            <div className='content'>wpbg.marketing@meituan.com</div>
          </div>

          <div className='ClientService'>
            <div className='title'>客服 1010-9777</div>
            <div className='content'>
            周一至周日 9:00~23:00 <br></br>
            客服不受理商务合作
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='RightTitle'>更多商家，更多优惠</div>
          <div className='QrCode1'></div>
          <div className='QrCode2'></div>
        </div>
      </div>
      <div className='MiddleLine'></div>
      <div style={{color:'white'}}>敏感位置</div>
    </div>
  )
}
