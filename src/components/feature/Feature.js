
import React from 'react'




const Feature = ({title , text}) => {
  return (
    <div className='HL__features-container__feature'>
      <div className="HL__features-container__feature-title">
        <div />
          <h1>{title}</h1>
         </div>
        <div className='HL__features-container__feature-text'>
          <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature