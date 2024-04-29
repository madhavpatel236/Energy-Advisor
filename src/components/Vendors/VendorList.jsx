import React from 'react'
import '../component.css'

function VendorList({
    Seller,
    Address
}) {

    return (
        <div className='sc'>
        <div class="seller-card ">
            <h4>{Seller}</h4>
            <p>{Address}</p>
        </div>
        </div>
    )
}

export default VendorList
