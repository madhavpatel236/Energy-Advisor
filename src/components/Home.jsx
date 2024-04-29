import React from 'react'
import '../css/style.css'
import home2 from '../Images/home2.png'
import { NavLink, Link } from 'react-router-dom'


function Home() {
    return (
        <div className='Home'>
            <div className='home-containor'>
                <div className='content-1  main-home-contant'> Energy Advisor </div>
                <div className='content-2 main-home-contant' >One Stop-Shop for all your Green energy Needs.</div>
                <p className='know-more-btn main-home-contant'>
                    <NavLink className='navlink'
                        to="/More"
                    >
                        Know More
                    </NavLink>
                </p>
            </div>
            <div className='Home2'>
                <div className='Home2-content'>
                    <div className='content-3'>The Future of Fuel</div>
                    <div className='content-4'>Transitioning to sustainable energy sources like solar, wind, and bio fuels is imperative for mitigating climate change, reducing carbon emissions, ensuring energy security, and fostering economic resilience in the face of global challenges. This shift away from fossil fuels not only safeguards the environment but also lays the foundation for a more sustainable and prosperous future for generations to come.</div>
                </div>
                <div className='img-home2'> <img src={home2}></img> </div>
            </div>
            <div className='Home3'>
                <div className='Home3-content'>
                    <div className='content-5 c-h3'> Our Plan</div>
                    <div className='content-6 c-h3'> Our main goal is to fill the current information gap about renewable energy in the market for the consumers. The aim is to make the purchase and selection of renewable energy as easy as shopping for a pizza online.</div>
                </div>
            </div>
        </div>

    )
}

export default Home
