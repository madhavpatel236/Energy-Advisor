import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import VendorList from './VendorList'


function Place() {
    const navigate = useNavigate();

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        // Logic to determine the target path based on selectedValue
        navigate(`/${selectedValue}`);
    };

    return (
        <div className='location-containor'>
            <div className='cont-1'>
                <h1>Select Your location</h1>
                <select className='location-select' onChange={handleSelectChange}>
                    <option className='option'></option>
                    <option className='option'>Ahmedabad</option>
                    <option className='option'>Gandhinagar</option>
                    <option className='option'>Surat</option>
                </select>
            </div>
        </div>
    )
}

export default Place
