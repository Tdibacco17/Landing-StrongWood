"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import project_data from '@/data/ProjectData';

const setting = {
   slidesPerView: 4,
   loop: true,
   spaceBetween: 30,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: false,
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

interface PropType {
   style: boolean;
}

const Project = ({ style }: PropType) => {
   return (
      <section className={`project-slider-two-section section-space-bottom p-relative fix ${style ? "bg-color-1 is-dark" : ""}`}>
         <div className="bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-37.png)` }}></div>
         <div className="small-container">
            <div className="project-two-title-area mb-60">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">portfolio</span>
                  <h3 className="section-title mt-10">Our Latest Projects</h3>
               </div>
               <Link className="primary-btn-1 btn-hover" href="/projects">
                  all  PROJECTS &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>
         </div>
         <div className="container-fluid">
            <Swiper {...setting} modules={[Autoplay]} className="swiper project-active-1">
               {project_data.filter((items) => items.page === "home_1").map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="project-slider-two-box p-relative">
                        <figure className="image w-img">
                           <Image src={item.thumb} alt="" />
                        </figure>
                        <div className="content">
                           <div className="inner-box">
                              <span>{item.sub_title}</span>
                              <h5><Link href="/projects">{item.title}</Link></h5>
                           </div>
                           <Link className="icon-1" href="/projects">
                              <i className="icon-arrow-up"></i>
                           </Link>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   )
}

export default Project
