import React from 'react'
import './RightBox.css'

export default function RightBox() {

    const BackTop = () => {
        var gotoTop = function () {
            var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            currentPosition -= 40;  //设置滚动速度
            if (currentPosition > 0) {
                window.scrollTo(0, currentPosition);
            }
            else {
                window.scrollTo(0, 0);
                clearInterval(timer);
                timer = null;
            }
        }
        var timer = setInterval(gotoTop, 1);
    }

    return (
        <div className='RightBox'>
            <div className='Back' onClick={() => BackTop()}>顶部</div>
            <div className='content'>美团外卖APP</div>
            <div className='QR1'></div>
            <div className='content'>美团外卖小程序</div>
            <div className='QR2'></div>
        </div>
    )
}
