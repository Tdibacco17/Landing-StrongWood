"use client"
import Count from "@/components/common/Count"
import Link from "next/link"

const Banner = () => {
   return (
      <section className="banner-three-section fix">
         <div className="container-fluid g-0">
            <div className="row g-0">
               <div className="col-xxl-7">
                  <div className="banner-3-content p-relative bg-color-1">
                     <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-39.png)` }}></div>
                     <div className="shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-40.png)` }} ></div>
                     <div className="shape-3 float-bob-y" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-41.png)` }}></div>
                     <div className="banner-area-2 img-custom-anim-left animated" data-wow-delay="2000ms">
                        <span className="p-relative banner-sub-title no-border">Professional Roof Repair</span>
                        <h1 className="banner-title">We Provide Complete Roofing Solution</h1>
                        <p className="banner-text">Nulla commodo dolor massa vel pellentesque nulla congue quis fusce <br />ut convallis diam. Nam id tortor et nunc tempor faucibus.</p>
                        <div className="banner-btn-area-2">
                           <Link className="primary-btn-1 btn-hover" href="/services">
                              GET A QUOTE &nbsp; | <i className="icon-right-arrow"></i>
                              <span style={{ top: "147.172px", left: "108.5px" }}></span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-xxl-5">
                  <div className="banner-3-image-area p-relative" style={{ backgroundImage: `url(/assets/imgs/banner/banner-4.jpg)` }}>
                     <div className="banner-3-experience">
                        <div className="icon-box">
                           <i className="icon-roof-9"></i>
                        </div>
                        <div className="content">
                           <h3 className="text-white"><span className="counter"><Count number={25} /></span>+</h3>
                           <p className="text-white">Years Working Experience</p>
                        </div>
                     </div>
                     <div className="content-1">
                        <div className="banner-3-popup p-relative">
                           <div className="banner_popup_btn">
                              <div className="icon-1"><i className="fa fa-plus"></i></div>
                           </div>
                           <div className="best-quality">
                              <span>Best Quality</span>
                           </div>
                        </div>
                     </div>
                     <div className="content-2">
                        <div className="banner-3-popup p-relative">
                           <div className="banner_popup_btn">
                              <div className="icon-1"><i className="fa fa-plus"></i></div>
                           </div>
                           <div className="best-quality">
                              <span>Best Quality</span>
                           </div>
                        </div>
                     </div>
                     <div className="content-3">
                        <div className="banner-3-popup p-relative">
                           <div className="banner_popup_btn">
                              <div className="icon-1"><i className="fa fa-plus"></i></div>
                           </div>
                           <div className="best-quality">
                              <span>Best Quality</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Banner
