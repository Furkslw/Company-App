import React from 'react'
import { useState , useEffect } from 'react'
import {RiCloseLine,RiMenu3Line} from 'react-icons/ri'

import Link from 'next/link'



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  

  const handleScroll = () => {
    setToggleMenu(false);
  };

  // Scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='HL__navbar'>
        <div className='HL__navbar-links'>
            <div className="HL__navbar-links-logo">
                <Link href={"/"}>
                <img src="/assets/logo.png" alt="logo" width={120} height={50}/>
                </Link>
            </div>
            <div className="HL__navbar-links_container">
                <Link href={"/"} className="HL__navbar-links_container-p">Anasayfa</Link>
                <Link href={"/pricing"} className="HL__navbar-links_container-p">Fiyatlandırma</Link>
                <Link href={"#aboutUs"} className="HL__navbar-links_container-p">Biz kimiz</Link>
                <Link href={"#contact"} className="HL__navbar-links_container-p">İletişim</Link>
            </div>
            <div className='HL__navbar-menu'>
                {toggleMenu 
                ? <RiCloseLine for="menu-toggle"  color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
                : <RiMenu3Line for="menu-toggle"  color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
                    }
                {toggleMenu && (
                    <div className='HL__navbar-menu_container' scale-up-center>
                        <div className='HL__navbar-menu_container-links'>

                            <Link href={"/"} className="HL__navbar-menu_container-links-p">Anasayfa</Link>
                            <Link href={"/pricing"} className="HL__navbar-menu_container-links-p">Fiyatlandırma</Link>
                            <Link href={"#aboutUs"} className="HL__navbar-menu_container-links-p">Biz kimiz</Link>
                            <Link href={"#contact"} className="HL__navbar-menu_container-links-p">İletişim</Link>
                        
                        </div>
                    </div>
                )
                        }
            </div>
        </div>
    </div>
  )
}

export default Navbar