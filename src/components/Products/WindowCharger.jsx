import React from 'react'
import Window from '../../Images/windowCharger.jpg'
import Templete from './Templete'

function WindowCharger() {
    return (
        <div>
                <Templete 
                image = {Window}
                title = 'Solar Window Charger'
                description='Introducing our Window Solar Charger, a cutting-edge device that transforms sunlight into power for your gadgets. Simply attach to any window and let solar energy keep your devices charged wherever you go.'
                specs='Specification :'
                specs1='Power Source: USB, Solar Energy, A.C. Source'
                specs2='Input: 100-240V/0.15A'
                specs3=' Output: 5V/1A'
                specs4='Output Interface: USB '
                specs5='Solar Panel: 0.6W/5.5V'
                buyLink='https://www.google.com/shopping/product/1?q=Window+solar+charger&client=ms-android-samsung-ss&sca_esv=0498115c76c36171&biw=384&bih=687&tbs=vw:l&prmd=sivnbmtz&sxsrf=ACQVn09jzmrKF3GeesLOQUu9bkLt2l1TWA:1714327694825&prds=num:1,of:1,eto:4236539374783481035_0,prmr:1,pid:4236539374783481035,cs:1&sa=X&ved=0ahUKEwiE1JyqwOWFAxVgsVYBHd8CDf8QgjYI7gk' />
        </div>
    )
}

export default WindowCharger


