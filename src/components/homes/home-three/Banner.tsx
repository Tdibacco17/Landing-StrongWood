"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Link from "next/link";
import { JSX } from 'react';

interface DataType {
   id: number;
   thumb: string;
   sub_title: string;
   title: string;
   desc: JSX.Element;
}

const banner_data: DataType[] = [
   {
      id: 1,
      thumb: "assets/imgs/banner/banner-3.jpg",
      sub_title: "Smart Roofing Solution",
      title: "Explore Our Efficient Roofing Solutions",
      desc: (<>We denounce with righteous indignation and dislike men who are so<br /> beguiled and demoralized by the charms of pleasure.</>),
   },
   {
      id: 2,
      thumb: "assets/imgs/banner/banner-3.jpg",
      sub_title: "Smart Roofing Solution",
      title: "Explore Our Efficient Roofing Solutions",
      desc: (<>We denounce with righteous indignation and dislike men who are so<br /> beguiled and demoralized by the charms of pleasure.</>),
   },
   {
      id: 3,
      thumb: "assets/imgs/banner/banner-3.jpg",
      sub_title: "Smart Roofing Solution",
      title: "Explore Our Efficient Roofing Solutions",
      desc: (<>We denounce with righteous indignation and dislike men who are so<br /> beguiled and demoralized by the charms of pleasure.</>),
   },
]

const setting = {
   slidesPerView: 1,
   loop: true,
   effect: "fade",
   fadeEffect: { crossFade: true },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".banner-dot",
      clickable: true,
   },
   navigation: false,
};

const Banner = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="banner-section p-relative fix">
            <Swiper {...setting} modules={[Autoplay, Pagination, EffectFade]} className="swiper banner-active">
               {banner_data.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="banner-main" style={{ backgroundImage: `url(${item.thumb})` }}>
                        <div className="large-container">
                           <div className="banner-area p-relative z-3 wow img-custom-anim-left animated" data-wow-delay="1500ms">
                              <span className="p-relative banner-sub-title">{item.sub_title}</span>
                              <h1 className="banner-title">{item.title}</h1>
                              <p className="banner-text">{item.desc}</p>
                              <div className="banner-btn-area">
                                 <Link className="primary-btn-1 btn-hover" href="/services">
                                    eXPLORE mORE &nbsp; | <i className="icon-right-arrow"></i>
                                    <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                 </Link>
                                 <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="play-btn popup-video">
                                    <div className="icon-1">
                                       <i className="icon-play"></i>
                                    </div>
                                    <span>How It Works</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="banner-shape-area">
                        <div className="shape-1" data-background="assets/imgs/shapes/shape-1.png"></div>
                        <div className="shape-2" data-background="assets/imgs/shapes/shape-2.png"></div>
                        <div className="shape-3" data-background="assets/imgs/shapes/shape-3.png"></div>
                        <div className="shape-4" data-background="assets/imgs/shapes/shape-4.png"></div>
                        <div className="shape-5" data-background="assets/imgs/shapes/shape-5.png"></div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="banner-dot-inner">
               <div className="banner-dot"></div>
            </div>
         </section>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId="eEzD-Y97ges"
         />
      </>
   )
}

export default Banner
