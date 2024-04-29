import React from 'react'
import VendorList from './VendorList'


function Gandhinagar() {
    return (
        <div className='row'>
        <VendorList
            Seller = 'Topsun Energy Limited'
            Address = 'Solar rooftop |Solar Panel Manufacturers |Residential solar, B 101, K Rd, GIDC Electronic Estate, Sector 25, Gandhinagar, Gujarat 382027, Contect Number: +917573006633'
        />
        <VendorList
            Seller = 'Pushpak Green & Clean Energy'
            Address = 'Infocity IT Tower 1, Ground Floor 1-A, Gujarat 382009, Contect Number: 88660 98020'
        />
        <VendorList
            Seller = 'Nine Star Systems'
            Address = 'Plot No. B-62, GIDC Electronic Estate, Sector 25, Gandhinagar, Gujarat 382024, Contect Number: 079 2328 9089'
        />
        <VendorList
            Seller = 'Helios Natural Renewtech Pvt Ltd'
            Address = '228-229, Shreedhar Auram, near Shivalay Parisar, opp. Umiyakrupa society, Kudasan, Gandhinagar, Gujarat 382421, Contect Number:  076000 48554'
        />
        </div>
    )
}

export default Gandhinagar
