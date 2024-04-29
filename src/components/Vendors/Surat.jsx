import React from 'react'
import VendorList from './VendorList'

function Surat() {
    return (
        <div>
            <div className='row'>
                <VendorList
                    Seller='Goldi Solar Pvt. Ltd'
                    Address='1009, 10th floor, Infinity Tower, beside Ayurvedic College, near Railway Station, Surat, Gujarat 395003, Contect Number: 1800 833 5511'
                />
                <VendorList
                    Seller='Heaven Solar Energy Pvt. Ltd'
                    Address='204, Anupam square, SAT Swaminarayana Temple Rd, Mota Varachha, Surat, Gujarat 394101, Contect Number: 90811 00296'
                />
                <VendorList
                    Seller='ABSOL ENERGY'
                    Address='b-222, atlanta shopping mall, nr. sudama chowk, mota varachha, surat, gujarat 394101, Contect Number: 96646 32432 '
                />
                <VendorList
                    Seller='WAAREE Energies Limited'
                    Address='Plot No. 231 - 236 Surat Special Economic Zone, Diamond Park, Sachin, Surat, Gujarat 394230, Contect Number: 0261 239 8661 '
                />
            </div>
        </div>
    )
}

export default Surat
