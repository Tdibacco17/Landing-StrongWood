"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image";
import Link from "next/link";
import Count from "@/components/common/Count";

import about_1 from "@/assets/imgs/about/about-1.jpg"
import about_2 from "@/assets/imgs/about/about-2.jpg"

interface DataType {
   sub_title: string;
   title: string;
   desc: string;
   feature_list: {
      id: number;
      icon: string;
      title: string;
      desc: string;
   }[]
}

const about_data: DataType = {
   sub_title: "About Us",
   title: "Devoted to Delivering Top Notch Roofing Solutions",
   desc: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.",
   feature_list: [
      {
         id: 1,
         icon: "icon-roof",
         title: "Commercial Roofing",
         desc: "Embarrassing hidden in the middle All the Lorem Ipsum generators on the Internet repeat predefined chunks",
      },
      {
         id: 2,
         icon: "icon-roof-9",
         title: "Best Roofing Warranty",
         desc: "Embarrassing hidden in the middle All the Lorem Ipsum generators on the Internet repeat predefined chunks",
      },
   ],
}

const { sub_title, title, desc, feature_list } = about_data;

const About = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
      <section className="about-us-section section-space p-relative">
         <div className="shape-area">
            <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/bg/bg-shape-1.png)` }}></div>
            <div className="shape-2 quote-animation" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-7.png)` }}></div>
            <div className="shape-3 quote-animation" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-8.png)` }}></div>
         </div>
         <div className="small-container">
            <div className="row g-4">
               <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="about-us-image-area p-relative wow fadeInRight" data-wow-delay=".5s">
                     <div className="border-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-6.png)` }}></div>
                     <figure className="image-1">
                        <Image src={about_1} alt="" />
                     </figure>
                     <div className="image-2-area">
                        <div className="image-2 p-relative">
                           <Image src={about_2} alt="" />
                           <div className="play-btn">
                              <div className="video_player_btn">
                                 <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="popup-video"><i className="icon-play"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="working-area float-bob-y">
                        <div className="inner p-relative">
                           <div className="icon-box">
                              <i className="icon-prize"></i>
                              <h4><span className="counter"><Count number={25} /></span> Years</h4>
                              <p>Working Experience</p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="about-us-content-area p-relative z-1 pl-30">
                     <div className="title-box mb-35 wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title">{sub_title}</span>
                        <h3 className="section-title mt-10">{title}</h3>
                     </div>
                     <p className="mb-35 wow fadeInLeft" data-wow-delay=".5s">{desc}</p>
                     {feature_list.map((item) => (
                        <div key={item.id} className="icon-box mb-20 wow fadeInLeft" data-wow-delay=".8s">
                           <div className="icon">
                              <i className={item.icon}></i>
                           </div>
                           <div className="content">
                              <h5><Link href="/about">{item.title}</Link></h5>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     ))}
                     <div className="about-btn-box wow fadeInLeft" data-wow-delay="1s">
                        <Link className="primary-btn-1 btn-hover" href="/about">
                           about us &nbsp; | <i className="icon-right-arrow"></i>
                           <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </Link>
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

export default About
