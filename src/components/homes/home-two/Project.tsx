"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import project_data from '@/data/ProjectData';

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
      prevEl: ".project-1-button-prev",
      nextEl: ".project-1-button-next",
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

const Project = () => {
   return (
      <section className="project-slider-section section-space fix">
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-6">
                  <div className="title-box mb-50 wow fadeInLeft" data-wow-delay=".5s">
                     <span className="section-sub-title no-border">RECENT works</span>
                     <h3 className="section-title mt-10">Explore Our Recent Projects</h3>
                  </div>
               </div>
               <div className="col-xxl-6">
                  <div className="project_1_navigation__wrapprer position-relative z-1 text-end mt-30">
                     <div className="common-slider-navigation">
                        <button className="project-1-button-prev"><i className="icon-arrow-left-angle"></i></button>
                        <button className="project-1-button-next"><i className="icon-arrow-right-angle"></i></button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Swiper {...setting} modules={[Navigation, Autoplay]} className="swiper project-active-1">
            {project_data.filter((items) => items.page === "home_2").map((item) => (
               <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="project-slider-area p-relative">
                     <figure className="image w-img">
                        <Image src={item.thumb} alt="" />
                     </figure>
                     <div className="content-area">
                        <div className="title-area">
                           <h6 className="mb-5">{item.sub_title}</h6>
                           <h5><Link href="/project-details">{item.title}</Link></h5>
                        </div>
                        <div className="icon-area">
                           <Link href="/project-details"><i className="icon-arrow-up"></i></Link>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   )
}

export default Project
