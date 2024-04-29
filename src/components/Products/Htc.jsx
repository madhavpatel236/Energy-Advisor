import React from 'react'
import Templete from './Templete'
import htc from '../../Images/htc.jpg'

function Htc() {
    return (
        <div>
            <Templete
                image={htc}
                title='HYDRAULIC CHARGING TOOL'
                description='Introducing our Miniature Hydraulic Charging Tool, a compact and versatile device for on-the-go power needs. Harness hydraulic energy to charge your devices efficiently and conveniently, anytime, anywhere.'
                specs='Specification :'
                specs1='Wattage- 10 Watts'
                specs2='Power Source - Battery Powered'
                specs3='Item Weight - 90 Grams'
                specs4='Voltage - 12 Volts '
                specs5='Output Wattage - 10 Watts'
                buyLink='https://www.google.com/shopping/product/1?q=Miniature+hydraulic+charging+tool&client=ms-android-samsung-ss&sca_esv=1d62dda5da21c497&biw=384&bih=687&tbs=vw:l&prmd=isvnbmtz&sxsrf=ACQVn09tkoEhz6PxCByEDgHyw4lIlfp0EQ:1714329776745&prds=num:1,of:1,eto:12584332633763315524_0,prmr:1,cs:1&sa=X&ved=0ahUKEwjs-PqKyOWFAxW6k1YBHUImDDAQgjYImQk'
            />
        </div>
    )
}

export default Htc
