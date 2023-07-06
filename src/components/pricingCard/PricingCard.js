import React from 'react'
import Link from 'next/link'

const PricingCard = ({title , price , body ,features}) => {
  return (
    <div className='HL__pricing-container-cards'>
              <div className='HL__pricing-container-cards-card'>
                <div className='HL__pricing-container-cards-card-title'>
                  <p className='--gradient-text'>{title}</p>
                </div>
                <div className='HL__pricing-container-cards-card-price'>
                  <h1>{price} </h1><p>   /Aylık</p>
                </div>
                <div className='HL__pricing-container-cards-card-body'>
                  
                  <p> {body} </p>
                </div>
                  <div className='HL__pricing-container-cards-card-body-button'>
                  <Link href={"/#pricing"}>İletişim</Link>
                 </div>
                <div className='HL__pricing-container-cards-card-features'>
                  <p>Features</p>
                  <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
                </div>
              </div>
            </div>
  )
}

export default PricingCard