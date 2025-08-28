import Image from "next/image";
import Link from "next/link";
import React from "react";

import choose_thumb from "@/assets/imgs/resources/choose-1.png"

interface DataType {
   sub_title: string;
   title: string;
   feature_list: {
      id: number;
      icon: string;
      title: string;
      desc: string;
   }[]
}

const choose_data: DataType = {
   sub_title: "why choose us",
   title: "What's Make Us Different",
   feature_list: [
      {
         id: 1,
         icon: "icon-roof-4",
         title: "Commercial Roofing",
         desc: "Embarrassing hidden in the middle All the Lorem Ipsum generators on the Internet repeat predefined chunks",
      },
      {
         id: 2,
         icon: "icon-target",
         title: "Mission Statement Roofing",
         desc: "Embarrassing hidden in the middle All the Lorem Ipsum generators on the Internet repeat predefined chunks",
      },
      {
         id: 3,
         icon: "icon-help",
         title: "Safety And Reliability",
         desc: "Embarrassing hidden in the middle All the Lorem Ipsum generators on the Internet repeat predefined chunks",
      },
   ],
}

const { sub_title, title, feature_list } = choose_data;

const Choose = () => {
   return (
      <section className="choose-section bg-color-1 section-space-top p-relative">
         <div className="bg-image" style={{ backgroundImage: `url(/assets/imgs/bg/choose-bg.png)` }}></div>
         <div className="shape-image" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-15.png)` }}></div>
         <div className="small-container">
            <div className="row g-4">
               <div className="col-xxl-6 col-xl-6 col-lg-6 p-relative section-space-medium-bottom">
                  <div className="title-box mb-50 wow fadeInLeft" data-wow-delay=".5s">
                     <span className="section-sub-title">{sub_title}</span>
                     <h3 className="section-title mt-10">{title}</h3>
                  </div>
                  {feature_list.map((item) => (
                     <React.Fragment key={item.id}>
                        <div className="choose-area-icon-box mb-15 wow fadeInRight" data-wow-delay=".5s">
                           <div className="icon-box p-relative">
                              <i className={item.icon}></i>
                           </div>
                           <div className="content">
                              <h5><Link href="/services">{item.title}</Link></h5>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                        <hr />
                     </React.Fragment>
                  ))}
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="1.2s">
                  <figure className="image m-img">
                     <Image src={choose_thumb} alt="" />
                  </figure>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Choose
