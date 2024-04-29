import React from 'react'
import '../css/style.css'
import logo from '../Images/logo.png'
import { NavLink, Link } from 'react-router-dom'


export default function Header() {

    return (
        <>
            <section className='main-containor'>
                <NavLink
                    to='/'
                >
                    <img className='logo' src={logo}></img>
                </NavLink>
                <section className='header-containor'>
                    
                    <li className='header-content'>
                        <NavLink className='navlink'
                            to="/Shop"
                        >
                            Products
                        </NavLink>
                    </li>
                    <li className='header-content'>
                        <NavLink className='navlink'
                            to="/Place"
                        >
                            Vendor
                        </NavLink></li>
                    <li className='header-content'>
                        <NavLink className='navlink'
                            to="/AboutUs"
                        >
                            About Us
                        </NavLink></li>
                </section>
                <section className='login'>
                    <NavLink className='navlink'
                        to="/SignUp"
                    >
                        Sign Up
                    </NavLink>
                </section>

            </section>
            <hr></hr>
        </>
    )
}


