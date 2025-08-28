"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import service_data from '@/data/ServiceData';

const setting = {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: {
      prevEl: ".service-1-button-prev",
      nextEl: ".service-1-button-next",
   },
   breakpoints: {
      '1400': {
         slidesPerView: 3,
      },
      '1200': {
         slidesPerView: 3,
      },
      '992': {
         slidesPerView: 2,
      },
      '768': {
         slidesPerView: 1,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const Service = () => {
   return (
      <section className="service-slider-section section-space bg-color-1 p-relative">
         <div className="shape-1 float-bob-y" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-10.png)` }}></div>
         <div className="shape-2 float-bob-y" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-9.png)` }}></div>
         <div className="shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-11.png)` }}></div>
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-6">
                  <div className="title-box mb-50 wow fadeInLeft" data-wow-delay=".5s">
                     <span className="section-sub-title">Our SERVICES</span>
                     <h3 className="section-title mt-10">Best Roofing Services</h3>
                  </div>
               </div>
               <div className="col-xxl-6">
                  <div className="service_1_navigation__wrapprer position-relative z-1 text-end mt-30">
                     <div className="common-slider-navigation">
                        <button className="service-1-button-prev"><i className="icon-arrow-left-angle"></i></button>
                        <button className="service-1-button-next"><i className="icon-arrow-right-angle"></i></button>
                     </div>
                  </div>
               </div>
            </div>

            <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper service-active-1">
               {service_data.filter((items) => items.page === "home_2").map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="service-slider-area p-relative">
                        <figure className="image w-img">
                           <Image src={item.thumb} alt="" />
                        </figure>
                        <div className="content">
                           <div className="icon-box">
                              <i className={item.icon}></i>
                           </div>
                           <h4 className="mb-15"><Link href="/service-details">{item.title}</Link></h4>
                           <p className="mb-25">{item.desc}</p>
                           <Link href="/service-details" className="service-btn">Read More <i className="icon-arrow-right-double"></i></Link>
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
