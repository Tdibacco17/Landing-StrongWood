"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import service_data from '@/data/ServiceData';

const setting = {
   slidesPerView: 4,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: {
      prevEl: ".service-active-2-button-prev",
      nextEl: ".service-active-2-button-next",
   },
   breakpoints: {
      '1400': {
         slidesPerView: 4,
      },
      '1200': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 2,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const Service = () => {
   return (
      <section className="service-section-three p-relative section-space-bottom bg-color-1 fix">
         <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-46.png)` }}></div>
         <div className="shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-47.png)` }}></div>
         <div className="shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-48.png)` }}></div>
         <div className="small-container">
            <div className="service-3-title-box mb-50">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title no-border">Our SERVICES</span>
                  <h3 className="section-title mt-10">Quality Roofing Services</h3>
               </div>
               <div className="service_1_navigation__wrapprer position-relative z-1">
                  <div className="common-slider-navigation">
                     <button className="service-active-2-button-prev"><i className="icon-arrow-left-angle"></i></button>
                     <button className="service-active-2-button-next"><i className="icon-arrow-right-angle"></i></button>
                  </div>
               </div>
            </div>
            <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper service-active-2">
               {service_data.filter((items) => items.page === "home_2").map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="service-3-box-area p-relative">
                        <Link className="image w-img" href="/service-details">
                           <Image src={item.thumb} alt="" />
                        </Link>
                        <div className="inner text-center">
                           <div className="content-box">
                              <div className="icon-box">
                                 <i className={item.icon}></i>
                              </div>
                              <h4><Link href="/service-details">{item.title}</Link></h4>
                              <p className="mb-25">{item.desc}</p>
                           </div>
                           <div className="btn-area">
                              <Link href="/service-details">services details <i className="icon-arrow-right-double"></i></Link>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   )
}

export default Service
