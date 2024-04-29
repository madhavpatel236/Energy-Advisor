import React from 'react'
import Templete from './Templete'
import BB from '../../Images/baringblock.jpeg'

function BeringBlock() {
    return (
        <div>
            <Templete
                image={BB}
                title='Bering Blocks'
                description='Introducing our Water Turbine Bearing Block, an essential component for smooth and efficient turbine operation. Built to withstand the rigors of water power generation, ensuring reliable performance and longevity.'
                specs='Specification :'
                specs1='Material -Cast Iron'


                specs2='Steel Bearing Number - UCP204'
                specs3='Bearing Type - Ball Bearing'
                // specs4='Package Dimensions: 9 x 7 x 3 cm; '
                // specs5='Solar Panel: 0.6W/5.5V'
                buyLink='https://www.google.com/url?q=https://www.amazon.in/Bearing-Pillow-Block-Shaft-Diameter/dp/B08VD8RDP6%3Fsource%3Dps-sl-shoppingads-lpcontext%26ref_%3Dfplfs%26psc%3D1%26smid%3DA1SRKJDG0QDQNG&opi=95576897&sa=U&ved=0ahUKEwi4o9OnxeWFAxXdna8BHTgzCVUQgOUECNEI&usg=AOvVaw3a2ATdwgEk29DpwcIg3I_E'
            />
        </div>
    )
}

export default BeringBlock
