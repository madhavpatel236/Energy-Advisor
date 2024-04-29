import React from 'react'
import Turbine from '../../Images/turbine.jpg'
import Templete from './Templete'

function WaterTurbine() {

    return (
        <div>
                <Templete 
                image = {Turbine}
                title = 'Water Turbine'
                description='Introducing our Water Turbine, a cutting-edge solution for sustainable energy generation. Harness the power of flowing water to produce clean electricity for your home or business. Efficient, reliable, and eco-friendly.'
                specs='Specification :'
                specs1='Item Weight 90 grams'
                specs2='Total Power Outlets	1'
                specs3='Frequency 50 Hz'
                specs4='Package Dimensions: 9 x 7 x 3 cm; '
                // specs5='Solar Panel: 0.6W/5.5V'
                buyLink='https://www.google.com/url?q=https://www.amazon.in/Performance-Micro-Hydro-Generator-Generation-transparent/dp/B0CC48CKSZ%3Fsource%3Dps-sl-shoppingads-lpcontext%26ref_%3Dfplfs%26psc%3D1%26smid%3DAD9O4PTIPTBLX&opi=95576897&sa=U&ved=0ahUKEwiQ_9ihxOWFAxXJQfUHHZFXDWUQguUECIAJ&usg=AOvVaw3Gzav69U5NDayXMmwemxv5'
            />
        </div>
    )
}

export default WaterTurbine
