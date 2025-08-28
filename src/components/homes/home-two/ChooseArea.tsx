"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image";
import Link from "next/link";

import choose_thumb1 from "@/assets/imgs/resources/choose-2.jpg"
import choose_thumb2 from "@/assets/imgs/about/about-2.jpg"

interface DataType {
   sub_title: string;
   title: string;
   desc: string;
   feature_list: {
      id: number;
      icon: string;
      list: string;
   }[]
}

const about_data: DataType = {
   sub_title: "why choose us",
   title: "Few Reasons to Choose Our Company",
   desc: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.",
   feature_list: [
      {
         id: 1,
         icon: "icon-roof-7",
         list: "Quality Materials",
      },
      {
         id: 2,
         icon: "icon-engineer",
         list: "Expert Engineer",
      },
      {
         id: 3,
         icon: "icon-help",
         list: "Roofing Warranty",
      },
      {
         id: 4,
         icon: "icon-prize",
         list: "Award Winning",
      },
   ],
}

const { sub_title, title, desc, feature_list } = about_data;

const ChooseArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="choose-3-section p-relative section-space" style={{ backgroundImage: `url(/assets/imgs/bg/choose-bg-2.png)` }}>
            <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-49.png)` }}></div>
            <div className="small-container">
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="choose-3-image-area p-relative">
                        <div className="shape-1" data-background="assets/imgs/shapes/shape-29.png"></div>
                        <figure className="image w-img pr-100">
                           <Image src={choose_thumb1} alt="" />
                        </figure>
                        <div className="image-3-area">
                           <div className="image-3 p-relative">
                              <Image src={choose_thumb2} alt="" />
                              <div className="play-btn">
                                 <div className="video_player_btn">
                                    <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="popup-video"><i className="icon-play"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <h1>ROOFING</h1>
                     </div>
                  </div>

                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="choose-3-content-area pl-60 pt-20 p-relative">
                        <div className="title-box mb-25 wow fadeInLeft" data-wow-delay=".5s">
                           <span className="section-sub-title no-border">{sub_title}</span>
                           <h3 className="section-title mt-10">{title}</h3>
                        </div>
                        <p>{desc}</p>
                        <div className="row g-4 pt-35">
                           {feature_list.map((item) => (
                              <div key={item.id} className="col-lg-6">
                                 <div className="icon-box-area">
                                    <div className="icon-box">
                                       <i className={item.icon}></i>
                                    </div>
                                    <h5><Link href="/services">{item.list}</Link></h5>
                                 </div>
                              </div>
                           ))}
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

export default ChooseArea
