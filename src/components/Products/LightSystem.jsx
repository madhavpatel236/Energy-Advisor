
import React from 'react'
import light from '../../Images/solar-home-light-system-model-jtb-500x500.png'
import Templete from './Templete'

function LightSystem() {
    return (
        <div>
            <Templete 
                image = {light}
                title = 'Light system'
                description='Illuminate your home sustainably with our Solar Home Lighting System. Featuring high-efficiency solar panels, long-lasting LED lights, and remote control functionality, enjoy reliable, eco-friendly illumination powered by the sun.'
                specs='items :'
                specs1='12V 40Watt PolyCrystalline Solar Panel'
                specs2=' 6A Solar Charge controller'
                specs3='LED Wattage 5W DC LED Bulb x 3pc '
                specs4='18Watt DC Table Fan '
                specs5='Battery – 12.8V 24Ah Lithium Ferro phosphate'
                buyLink='https://www.google.com/shopping/product/1?q=solar+home+lighting+system&client=ms-android-samsung-ss&sca_esv=0498115c76c36171&biw=384&bih=735&tbs=vw:g&prmd=isvnbmtz&sxsrf=ACQVn0-i9IjBlEV4gL6n-sNUIPyxSwmbHw:1714326914232&prds=num:1,of:1,eto:7146439384195958003_0,prmr:1,pid:7146439384195958003,cs:1&sa=X&ved=0ahUKEwjK9YC2veWFAxVU3jQHHeqqApYQgjYIoAg'
            />
        </div>
    )
}

export default LightSystem
