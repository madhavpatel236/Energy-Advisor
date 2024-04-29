import React from 'react'
import '../component.css'

export default function Templete(
    {
        image,
        title,
        description,
        specs,
        specs1,
        specs2,
        specs3,
        specs4,
        specs5,
        buyLink
    }) {
    return (
        <div>
            <div className='product-containor'>
                {/* img and contain */}
                <div className='Product-info'>
                    <div className='product-img'> <img src={image}></img> </div>
                    <div className='product-detail-box'>
                        <div className='product-name'>{title}</div>
                        <div className='product-desciption'>{description}
                            <h2>{specs}</h2>
                            <h4 className='specs-detail'>
                                <li>{specs1}</li>
                                <li>{specs2}</li>
                                <li>{specs3}</li>
                                <li>{specs4}</li>
                                <li>{specs5}</li>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='buy-button'>
                <button className='know-more-button navlink'> <a href={buyLink}>Buy Here</a> </button>
                </div>
            </div>
        </div>
    )
}

