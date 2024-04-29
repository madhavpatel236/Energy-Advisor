import React from 'react'
import '../css/style.css'
import logo from '../Images/logo.png'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer>
                <div className="f1">
                    <ul className=" foot foot-img">
                        <nav className="footer-img" src='../Images/logo.png' alt="" />
                    </ul>
                    <ul className="foot foot1">
                        <h3>Quick Links</h3>
                        <li>
                            <NavLink className='navlink'
                                to="/AboutUs"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li><a href="https://www.linkedin.com/in/madhav-karavadiya-466348261/"> Contact</a></li>
                    </ul>
                    <ul className="foot foot2">
                        <h3>Usefull Links</h3>
                        <li><a href="https://github.com/madhavpatel236/Energy-Advisor">Project Code</a></li>
                        <li><a href="https://github.com/madhavpatel236">GitHub </a></li>
                    </ul>
                    <ul className="foot foot3">
                        <h3>Contact Detail</h3>
                        <li>+91 9722919177</li>
                        <li> <a href="https://mail.google.com/mail/u/2/?hl=en_GB#inbox?compose=new">madhavkaravadiya@gmail.com
                        </a></li>
                    </ul>
                </div>
                <div className="rights">
                    <p>© 2024 Energy Advisor. All rights reserved | Created by Madhav karavadiya</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
