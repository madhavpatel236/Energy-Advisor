import React from 'react'
import '../component.css'
import solar from '../../Images/solar.jpg'
import wind from '../../Images/Wind.jpg'
import hydro from '../../Images/hydro.jpg'
import bio from '../../Images/biogas.jpg'

export default function Knowmore() {
    return (
        <div>
            <hr></hr>
            <div className='more-containor'>
                <div className='more-containor-1'>
                    <p className='heading-1 more-content-1'>Why choose renewable energy?</p>
                    <p className='heading-2 more-content-1'>In the last couple decades we have often heard that our planet is changing and terms like “global warming” and “energy crisis” are heard more often than ever. Our planet craves a breath of fresh air and as such renewable energy is the answer. Unlike fossil fuels that choke our skies with pollution and heat up our planet, renewable sources like sunshine, wind, and geothermal power tap into the Earth's natural resources without leaving a dirty footprint.</p>
                    <p className='heading-3 more-content-1'>What exactly do we mean by renewable energy?</p>
                    <p className='heading-4 more-content-1'>Fossil fuels have powered our world for a long time, but they have downsides. Taking millions of years to produce and polluting the environment. So wouldn't it be better if there was a never-ending source of clean energy?
                        Enter renewable energy!  These energy sources are constantly refilled naturally. Sunshine, wind, moving water, and even the Earth's internal heat are all examples. The best part is that they will not run out.
                        We can capture and use these energy sources through various technologies like solar panels. wind mills, water turbines,etc.</p>
                </div>
                <div className='more-containor-2'>
                    <figure class="snip1559">
                        <div class="profile-image"><img src={solar} alt="profile-sample2" /></div>
                        <figcaption>
                            <h3>Solar Energy</h3>
                            <p>Harness the sun's abundant energy to power your home or business. Solar technology offers a clean, reliable, and cost-effective way to reduce your energy bills and environmental impact.
                            </p>
                        </figcaption>
                    </figure>
                    <figure class="snip1559">
                        <div class="profile-image"><img src={wind} alt="profile-sample7" /></div>
                        <figcaption>
                            <h3>Wind Energy</h3>
                            <p>Capture the power of the wind. Wind energy offers a reliable and sustainable way to generate electricity for homes and businesses</p>
                        </figcaption>
                    </figure>
                    <figure class="snip1559">
                        <div class="profile-image"><img src={bio} alt="profile-sample6" /></div>
                        <figcaption>
                            <h3 className='hydro'>Hydro Energy</h3>
                            <p>Push the boundaries of hydropower. Emerging technologies like tidal and wave energy are expanding the potential of hydro. These innovative approaches capture the power of oceans and rivers, offering a glimpse into the future of clean energy.
                            </p>
                        </figcaption>
                    </figure>
                    <figure class="snip1559">
                        <div class="profile-image"><img src={bio} alt="profile-sample6" /></div>
                        <figcaption>
                            <h3>biomass</h3>
                            <p> Empower your home with small-scale biomass technology. Convert yard waste and food scraps into clean energy, fostering self-sufficiency and reducing reliance on the grid.
                            </p>
                        </figcaption>
                    </figure>

                </div>
                <div className='more-containor-3'>
                    <div className='more-containor-3'>
                        <p className='heading-5 more-content-2'>What is stopping people from taking the step towards renewable energy?</p>
                        <p className='heading-6 more-content-2'>Now that we know and understand the importance of this switch but over the years there have been many obstacles for consumers  in the process of switching to green energy. There have been many reasons like misinformation, misconceptions, lack of incentive, upfront cost, limited availability, unfavorable regulations, and many more.  These are the major obstacles faced by those willing to make a change. Hence even apart from people who do not know about renewable energy those  who do know have not been able to adapt it due to this reasons.</p>
                        <p className='heading-7 more-content-2'>What is our goal?</p>
                        <p className='heading-8 more-content-2'>The goal is simply to minimize or eliminate the obstacles faced when trying to switch to green energy. To do so is to give the consumer a simple one stop solution on our platform where they can gather all the information they need. It is to make ot so that they can find the various products or solutions that can help them in this process and also find sellers and other means to obtain these products from a reliable source without wasting time and with confidence.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

