"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"
import Link from 'next/link';

import brand_1 from "@/assets/imgs/resources/brand-1.png"
import brand_2 from "@/assets/imgs/resources/brand-2.png"
import brand_3 from "@/assets/imgs/resources/brand-3.png"
import brand_4 from "@/assets/imgs/resources/brand-4.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_3, brand_2]

const setting = {
   slidesPerView: 5,
   spaceBetween: 99,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: false,
   breakpoints: {
      '1400': {
         slidesPerView: 5,
      },
      '1200': {
         slidesPerView: 4,
      },
      '992': {
         slidesPerView: 4,
      },
      '768': {
         slidesPerView: 3,
      },
      '576': {
         slidesPerView: 2,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const Brand = () => {
   return (
      <div className="brand-section section-space-bottom">
         <div className="small-container">
            <Swiper {...setting} modules={[Autoplay]} className="swiper brand-active">
               {brand_data.map((brand, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                     <span><Link href="#"><Image src={brand} alt="" /></Link></span>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   )
}

export default Brand
