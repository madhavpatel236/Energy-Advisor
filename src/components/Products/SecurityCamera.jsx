import React from 'react'
import Templete from './Templete'
import camera from '../../Images/solar-camera.webp'

function SecurityCamera() {
    return (
        <div>
            <Templete 
                image = {camera}
                title = 'Security Camera'
                description='Introducing our Solar Panel Security Camera, a state-of-the-art surveillance solution powered by the sun. Keep your property safe with continuous monitoring, motion detection, and remote access, all powered by renewable solar energy.'
                specs='Specification :'
                specs1='7W Solar Panel'
                specs2='4MP Fixed Lens'
                specs3='5X Hybrid Zoom'
                specs4='Built-in 10000mAH Battery '
                specs5='2K UHD 2304X1296P Resolution'
                buyLink='https://www.google.com/shopping/product/1?q=Solar+panel+security+camera&client=ms-android-samsung-ss&sca_esv=0498115c76c36171&biw=384&bih=687&tbs=vw:l&prmd=sivnbmtz&sxsrf=ACQVn08eytZUtPLvwvCOh8wO_LkT-6FsYg:1714328313901&prds=num:1,of:1,eto:8768066559558291949_0,prmr:1,pid:8768066559558291949,cs:1&sa=X&ved=0ahUKEwj5jLbRwuWFAxUPhq8BHbbbB7gQgjYImQs'
            />
        </div>
    )
}

export default SecurityCamera
