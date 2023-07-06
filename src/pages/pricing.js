import React from 'react'
import{ Navbar} from '@/components'
import Footer from '../containers/footer/Footer'
import PricingCard from '../components/pricingCard/PricingCard'
import {useRouter} from 'next/router'


const Pricing = () => {
  const router = useRouter()
  return (
    <>
    <Navbar/>
    <div className="pricing">
      <div className='HL__pricing section__padding'> 
        <div className='HL__pricing-container'>
          <div className='HL__pricing-container-title'>
            <h1 className='gradient__text'>Sanal Dünyaya Olan Yolculuğunuza Hazır Mısınız?</h1>
            <p className='gradient__text'>Fiyatlarımız Her Bütçeye Uygun!!</p>
          </div>
          <div className='HL__pricing-container-cards'>
            <PricingCard title={"Basic"} price={"1000₺"} body={"zatzut pat cut"} features={[
              '1 User',
              '1 GB Storage',
              
              'Community Access',
              'Unlimited Private Projects',
              'Dedicated Phone Support',
              'Free Subdomain',
              'Monthly Status Reports'
            ]}/>
            <PricingCard title={"Pro"} price={"4000₺"} body={"zatzut pat cut"} features={[
              '5 Users',
              '10 GB Storage',
              'Unlimited Public Projects',
              'Community Access',
              'Unlimited Private Projects',
              'Dedicated Phone Support',
              'Free Subdomain',
              'Monthly Status Reports'
            ]}/>
            <PricingCard title={"Custom"} price={"Custom"} body={"zatzut pat cut"} features={[
              '10 Users',
              '100 GB Storage',
              'Unlimited Public Projects',
              'Community Access',
              'Unlimited Private Projects',
              'Dedicated Phone Support',
              'Free Subdomain',
              
            ]}/>
          </div>
          </div>
        </div>
             
    </div>
    
    <Footer/>

     </>
  )
}

export default Pricing