"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import HeaderTwoTop from "./Menu/HeaderTwoTop";

import logo from "@/assets/imgs/logo/logo.svg";

const HeaderTwo = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   return (
      <>
         <header>
            <HeaderTwoTop />
            <div id="header-sticky" className={`header-area header-style-three ${sticky ? "sticky" : ""}`}>
               <div className="large-container">
                  <div className="mega-menu-wrapper">
                     <div className="header-main">
                        <div className="header-left">
                           <div className="header-logo">
                              <Link href="/">
                                 <Image src={logo} alt="header logo" />
                              </Link>
                           </div>
                        </div>
                        <div className="header-right d-flex justify-content-end">
                           <div className="mean__menu-wrapper d-none d-lg-block">
                              <div className="main-menu">
                                 <nav id="mobile-menu">
                                    <NavMenu />
                                 </nav>
                                 <div className="header__hamburger ml-50 d-none">
                                    <button type="button" className="hamburger-btn offcanvas-open-btn">
                                       <span>01</span>
                                       <span>01</span>
                                       <span>01</span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div className="search-toggle-open header-search my-auto">
                              <div onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-icon">
                                 <i className="icon-search"></i>
                              </div>
                           </div>
                           <div className="header-shopping-cart my-auto">
                              <div className="cart-icon">
                                 <Link href="#"><i className="icon-shopping-cart"></i></Link>
                              </div>
                           </div>
                           <div className="header__hamburger d-xl-block my-auto">
                              <div className="sidebar__toggle">
                                 <a className="bar-icon" onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }}>
                                    <i className="fa-light fa-bars-sort"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas style={true} offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderTwo
