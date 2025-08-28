"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import TestimonialForm from "@/components/forms/TestimonialForm"
import Image from "next/image";
import testi_data from '@/data/TestimonialData';

const setting = {
   slidesPerView: 1,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: {
      prevEl: ".testimonial-1-button-prev",
      nextEl: ".testimonial-1-button-next",
   }
};

const Testimonial = () => {
   return (
      <section className="testimonials-section p-relative section-space fix" style={{ backgroundImage: `url(/assets/imgs/bg/testimonial-bg.png)` }}>
         <div className="bg-shape" style={{ backgroundImage: `url(/assets/imgs/bg/testimonial-bg-1.png)` }}></div>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/bg/testimonial-bg-2.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-16.png)` }}></div>
         <div className="bg-shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-17.png)` }}></div>
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="contact-from p-relative">
                     <div className="title-box mb-40 wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title text-white">Book APPOINTMENT</span>
                        <h3 className="section-title mt-10 text-white">Roofing Services Available</h3>
                     </div>
                     <TestimonialForm />
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="testimonials-area">
                     <div className="title-box mb-40 wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title">Testimonials</span>
                        <h3 className="section-title mt-10">Clients Feedback</h3>
                     </div>
                     <p className="mb-40">It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.</p>
                     <div className="testimonials-box">
                        <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper testimonial-active-1">
                           {testi_data.filter((items) => items.page === "home_1").map((item) => (
                              <SwiperSlide key={item.id} className="swiper-slide">
                                 <div className="autor-upper p-relative">
                                    <figure className="image">
                                       <Image src={item.avatar} alt="" />
                                    </figure>
                                    <div className="icon-1">
                                       <i className="icon-comma-double"></i>
                                    </div>
                                    <div className="author-info">
                                       <h5>{item.name}</h5>
                                       <span>{item.designation}</span>
                                       <ul className="rating-list">
                                          <li><i className="fa fa-star"></i></li>
                                          <li><i className="fa fa-star"></i></li>
                                          <li><i className="fa fa-star"></i></li>
                                          <li><i className="fa fa-star"></i></li>
                                          <li><i className="fa fa-star"></i></li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="content">
                                    <p>{item.desc}</p>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                     <div className="testimonials_1_navigation__wrapprer position-relative z-1 text-center mt-40">
                        <div className="common-slider-navigation">
                           <button className="testimonial-1-button-prev p-relative"><i className="icon-arrow-left-angle"></i></button>
                           <button className="testimonial-1-button-next p-relative"><i className="icon-arrow-right-angle"></i></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonial
