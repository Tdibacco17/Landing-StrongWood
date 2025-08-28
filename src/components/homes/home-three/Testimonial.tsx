"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import testi_data from '@/data/TestimonialData';

import testi_thumb from "@/assets/imgs/resources/video-1.jpg"

const setting = {
   slidesPerView: 2,
   spaceBetween: 20,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".testimonial-swiper-dot",
      clickable: true,
   },
   navigation: false,
   breakpoints: {
      '1400': {
         slidesPerView: 2,
      },
      '1200': {
         slidesPerView: 2,
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

interface PropType {
   style: boolean;
}

const Testimonial = ({ style }: PropType) => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className={`testimonials-two-section fix ${style ? "bg-color-1 is-dark" : ""}`}>
            <div className="container-fluid g-0">
               <div className="row g-0">
                  <div className="col-xxl-4 col-xl-4 col-lg-12">
                     <div className="testimonials-video-area p-relative">
                        <figure className="image w-img">
                           <Image src={testi_thumb} alt="" />
                        </figure>
                        <div className="play-btn">
                           <div className="video_player_btn">
                              <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="popup-video"><i className="icon-play"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xxl-8 col-xl-8 col-lg-12">
                     <div className="testimonials-two-area section-space-medium bg-color-1 p-relative">
                        <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-36.png)` }}></div>
                        <div className="title-box wow fadeInLeft mb-60" data-wow-delay=".5s">
                           <span className="section-sub-title">Testimonials</span>
                           <h3 className="section-title mt-10">Our Client Feedback</h3>
                        </div>
                        <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper testimonial-active-2">
                           {testi_data.filter((items) => items.page === "home_1").map((item) => (
                              <SwiperSlide key={item.id} className="swiper-slide">
                                 <div className="testimonials-two-box">
                                    <div className="author-image">
                                       <Image src={item.avatar} alt="" />
                                    </div>
                                    <div className="icon-1">
                                       <i className="icon-comma-double"></i>
                                    </div>
                                    <h4>{item.name}</h4>
                                    <span>{item.designation}</span>
                                    <ul className="ratings">
                                       <li><i className="fa fa-star"></i></li>
                                       <li><i className="fa fa-star"></i></li>
                                       <li><i className="fa fa-star"></i></li>
                                       <li><i className="fa fa-star"></i></li>
                                       <li><i className="fa fa-star"></i></li>
                                    </ul>
                                    <p>“ Consectetur adipiscing elit. Integer is nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean ”</p>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                        <div className="testimonial-dot-inner text-center mt-60">
                           <div className="testimonial-swiper-dot"></div>
                        </div>
                     </div>
                  </div>
               </div>
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

export default Testimonial
