import React from 'react'
import Templete from './Templete'
import grid from '../../Images/off-grid-combo.jpg'

function OffgrideCombo() {
    return (
        <div>
                <Templete 
                image = {grid}
                title = 'Off Grid Combo'
                description='Introducing our Solar Off-Grid Combo, the ultimate solution for independent power generation. Harness solar energy with efficiency and reliability. This all-in-one system ensures uninterrupted electricity for off-grid living or backup power needs.'
                specs='Specification :'
                specs1='Capacity: 1500.0 VA'
                specs2='Warranty: 300 Months'
                // specs3=' Output: 5V/1A'
                // specs4='Output Interface: USB '
                // specs5='Solar Panel: 0.6W/5.5V'
                buyLink='https://www.google.com/url?q=https://www.powerwale.com/store/luminous-1-5kw-off-grid-solar-system-(1-5kw---120ahx2---325w)/77559&opi=95576897&sa=U&ved=0ahUKEwjR3JjEw-WFAxU9i68BHdEzBmsQgOUECNoI&usg=AOvVaw0tOdaAjTT6kX96QfaDU8y5'
                
            />
        </div>
    )
}

export default OffgrideCombo
