import React from 'react'
import Templete from './Templete'
import vtp from '../../Images/Vertical-Turbine-Pump-Small-VEP-_Low-Res.jpg'

function VerticalTurbinePump() {
    return (
        <div>
            <Templete
                image={vtp}
                title='Vertical Turbine Pump'
                description='Introducing our Vertical Turbine Pumps, engineered for optimal performance in various water applications. With a compact design and high-efficiency operation, these pumps deliver reliable water supply for agricultural, industrial, and municipal needs.'
                specs='Specification :'
                specs1='Material - MS, SS'

                specs2='Product Unit - 40 Unit/Units'
                // specs3='Frequency 50 Hz'
                // specs4='Package Dimensions: 9 x 7 x 3 cm; '
                // specs5='Solar Panel: 0.6W/5.5V'
                buyLink='https://www.google.com/url?q=https://www.tradeindia.com/products/vertical-turbine-pumps-c5772010.html&opi=95576897&sa=U&ved=0ahUKEwiYkr__xeWFAxWGVPUHHUsfCDgQgOUECLsI&usg=AOvVaw1L0mMNeKh21wIFqjmWHOyH'/>
        </div>
    )
}

export default VerticalTurbinePump
