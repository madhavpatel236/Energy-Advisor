import React from 'react'
import '../component.css'
import madhav from '../../Images/Madhav.png'
import jeet from '../../Images/Jeet.jpg'
import rahi from '../../Images/Rahi.jpg'
import harsh from '../../Images/Harsh.jpg'
import tirth from '../../Images/tirth.jpg'
import meet from '../../Images/meet.jpg'

function AboutUs() {
    return (
        <div className='about-containor'>
            <h1 class="h1-text">
                Team Members
            </h1>

            <div class="container">
                <div class="box">
                    <div class="top-bar"></div>
                    
                    <div class="content">
                        <img src={madhav}
                            alt="" />
                            <strong>Madhav Karavadiya</strong>
                            <p>210390116039@saffrony.ac.in</p>
                    </div>
                    <div class="btn">
                        <a href="https://www.linkedin.com/in/madhav-karavadiya-466348261/"><i class="fa fa-clipboard" aria-hidden="true"></i>LinkedIn</a>
                    </div>
                </div>

                <div class="box">
                    <div class="top-bar"></div>
                    <div class="content">
                        <img src={jeet}
                            alt="" />
                            <strong>Jeet Tandel</strong>
                            <p>210390116026@saffrony.ac.in</p>
                    </div>
                    <div class="btn">
                        <a href="https://www.linkedin.com/in/jeet-tandel-931003259/"><i class="fa fa-clipboard" aria-hidden="true"></i>LinkedIn</a>
                    </div>
                </div>

                <div class="box">
                    <div class="top-bar"></div>
                    <div class="content">
                        <img src={rahi}
                            alt=""/>
                            <strong>Rahi Mehta</strong>
                            <p>210390116023@saffrony.ac.in</p>
                    </div>
                    <div class="btn">
                        <a href="https://www.linkedin.com/in/rahi-mehta-b4428128b/"><i class="fa fa-clipboard" aria-hidden="true"></i>LinkedIn</a>
                    </div>
                </div>

                <div class="box">
                    <div class="top-bar"></div>
                    <div class="content">
                        <img src={tirth}
                            alt="" />
                            <strong>Tirth Limbasiya</strong>
                            <p>210390116020@saffrony.ac.in</p>
                    </div>
                    <div class="btn">
                        <a href="#"><i class="fa fa-clipboard" aria-hidden="true"></i>LinkedIn</a>
                    </div>
                </div>

                <div class="box">
                    <div class="top-bar"></div>
                    <div class="content">
                        <img src={harsh}
                            alt="" />
                            <strong>Harsh Savani</strong>
                            <p>210390116006</p>
                    </div>
                    <div class="btn">
                        <a href="https://www.linkedin.com/in/harshsavani/"><i class="fa fa-clipboard" aria-hidden="true"></i>LinkedIn</a>
                    </div>
                </div>

                <div class="box">
                    <div class="top-bar"></div>
                    <div class="content">
                        <img src={meet}
                            alt="" />
                            <strong>Meet Patel</strong>
                            <p>210390116041@saffrony.ac.in</p>
                    </div>
                    <div class="btn">
                        <a href="https://www.linkedin.com/in/meet-patel-3a63a126a/"><i class="fa fa-clipboard" aria-hidden="true"></i>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
