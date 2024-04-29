import React from 'react'
import { NavLink } from 'react-router-dom'
import light from '../../Images/solar-home-light-system-model-jtb-500x500.png'
import Window from '../../Images/windowCharger.jpg'
import camera from '../../Images/camera.jpeg'
import grid from '../../Images/off-grid-combo.jpg'
import turbine from '../../Images/turbine.jpg'
import baring from '../../Images/bb.jpeg'
import vt from '../../Images/vt.jpg'
import htc from '../../Images/htc.jpg'
// import LightSystem from '../Products/LightSystem'


function Shop() {
    return (
        <div>
            <div className='shop-containor-1 shop-containor'>
                <div className='shop-Heading-1'>Solar Energy</div>
                <div className='shop-cards'>

                    <div class="card">
                        <div className='solar-card-1'>
                            <img src={light} alt="" />
                            <div class="card-content">
                                <h2>
                                    lighting system
                                </h2>
                                <p>
                                    A solar home lighting system is a self-contained, off-grid lighting solution that utilizes solar energy to power lights in your home.                                </p>
                                <span class="material-symbols-outlined">
                                    <NavLink className='navlink'
                                        to="/LightSystem"
                                    >
                                        Detail
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div className='solar-card-1'>
                            <img className='windowIng' src={Window} alt="window" />
                            <div class="card-content">
                                <h2>
                                    solar Window charger
                                </h2>
                                <p>
                                    the Window solar charger is stuck to the glass of a window and the silicon pads on the ABS case utilizes solar energy for charging your phones                                </p>
                                <span class="material-symbols-outlined">
                                    <NavLink className='navlink'
                                        to="/WindowCharger"
                                    >
                                        Detail
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div className='solar-card-1'>
                            <img src={camera} alt="" />
                            <div class="card-content">
                                <h2>
                                    Security Camera
                                </h2>
                                <p>
                                    The solar panel will charge security camera with direct sunlight. No circuit wiring hassles, you can place it anywhere. The solar security camera is also equipped with battery inside, which provide extra 4-6 months backup battery life.                                </p>
                                <span class="material-symbols-outlined">
                                    <NavLink className='navlink'
                                        to="/SecurityCamera"
                                    >
                                        Detail
                                    </NavLink>
                                </span>

                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div className='solar-card-1'>
                            <img src={grid} alt="" />
                            <div class="card-content">
                                <h2>
                                    off-grid combo
                                </h2>
                                <p>
                                    A solar off-grid combo kit is a pre-packaged system that provides all the essential components you need to generate your own electricity using solar power.</p>
                                <span class="material-symbols-outlined">
                                    <NavLink className='navlink'
                                        to="/OffgrideCombo"
                                    >
                                        Detail
                                    </NavLink>                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='shop-containor-2 shop-containor' >
                <div className='shop-Heading-2'>Hydro Energy</div>
                <div className='shop-cards'>
                    <div class="card">
                        <div className='solar-card-1'>
                            <img src={turbine} alt="" />
                            <div class="card-content">
                                <h2>
                                    water turbine
                                </h2>
                                <p>
                                    This is small scale water turbine which gives the maximum shaft rpm from the lowest head of water. The propeller is completely submerged in water unlike some bigger hydro power plants.                                </p>
                                <span class="material-symbols-outlined">
                                    <NavLink className='navlink'
                                        to="/WaterTurbine"
                                    >
                                        Detail
                                    </NavLink>                                    </span>
                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <div className='solar-card-1'>
                            <img src={baring} alt="" />
                            <div class="card-content">
                                <h2>
                                    bearing block
                                </h2>
                                <p>
                                    This is a complete bearing block with trim, SKF bearings, grease fitting, shaft, seal and fixings. when you need to change your bearings, you can simply swap parts and then replace the old bearing at your leisure.                                </p>
                                <span class="material-symbols-outlined">
                                    <NavLink className='navlink'
                                        to="/BeringBlock"
                                    >
                                        Detail
                                    </NavLink>                                    </span>

                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <div className='solar-card-1'>
                            <img src={vt} alt="" />
                            <div class="card-content">
                                <h2>
                                    Vertical Turbine Pumps
                                </h2>
                                <p>
                                    Vertical Turbine Pumps (VT) consist of three different functional units, namely pump unit, column unit and head unit. VEP pumps are designed for maximum operating speed of 1800 RPM used for small space.                                </p>
                                    <span class="material-symbols-outlined">
                                    <NavLink className='navlink'
                                        to="/VerticalTurbinePump"
                                    >
                                        Detail
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <div className='solar-card-1'>
                            <img src={htc} alt="" />
                            <div class="card-content">
                                <h2>
                                    hydraulic charging tool
                                </h2>
                                <p>
                                    This miniature hydraulic charging tool works with flowing water. It is suitable for charging small batteries, mobile phones, LED lights, etc.                                </p>
                                    <span class="material-symbols-outlined">
                                    <NavLink className='navlink'
                                        to="/Htc"
                                    >
                                        Detail
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
