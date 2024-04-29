import React from 'react'
import VendorList from './VendorList'

function Ahmedabad() {
    return (
        <div className='row'>
        <VendorList
            Seller = 'Green Solar Energy Enterprises'
            Address = '57,Fortune north,B/h GETCO substation, Cross road, Nana Chiloda, Ahmedabad, Gujarat 382330, Contect Number:97129 09823'
        />
        <VendorList
            Seller = 'Green Watt Energy Powerd by TATA POWER SOLAR'
            Address = 'B-114, Sumel-7 Business Park, Road, opp. Soni Ni Chali, Rakhial, Ahmedabad, Gujarat 380023, '
        />
        <VendorList
            Seller = 'ReEnergy Solar Solutions'
            Address = 'Ground Floor, Anand Complex, A-10, Sarkhej - Gandhinagar Hwy, nr. Maruti Suzuki Showroom, opp. Sola, Overbridge, Thaltej, Ahmedabad, Gujarat 380054, Contect Number: 99099 97095'
        />
        <VendorList
            Seller = 'Grace Renewable Energy Pvt Ltd.'
            Address = '103/104, 10th Floor, The Chambers, Sarkhej - Gandhinagar Hwy, nr. TGB, Bodakdev, Ahmedabad, Gujarat 380054, Contect Number: 90994 62222'
        />
        </div>
    )
}

export default Ahmedabad
