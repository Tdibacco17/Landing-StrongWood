import Image from "next/image";
import Link from "next/link";

import about_1 from "@/assets/imgs/about/about-5.jpg"

interface DataType {
   sub_title: string;
   title: string;
   desc: string;
   feature_list: {
      id: number;
      list: string[];
   }[]
}

const about_data: DataType = {
   sub_title: "About Us",
   title: "Experienced & Quality Roofing Services Providers",
   desc: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.",
   feature_list: [
      {
         id: 1,
         list: ["Accurate Testing Processes", "100% Satisfaction Guarantee"],
      },
      {
         id: 2,
         list: ["300+ Successful Projects done", "Professional Engineers Provide"],
      },
   ],
}

const { sub_title, title, desc, feature_list } = about_data;

const About = () => {
   return (
      <section className="about-three-section section-space-top p-relative">
         <div className="bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-43.png)` }}></div>
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="about-3-image-area p-relative">
                     <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-42.png)` }}></div>
                     <figure className="image w-img pr-60">
                        <Image src={about_1} alt="" />
                     </figure>
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="about-3-content-area p-relative pr-30 pt-20">
                     <div className="title-box wow fadeInLeft mb-25" data-wow-delay=".5s">
                        <span className="section-sub-title no-border">{sub_title}</span>
                        <h3 className="section-title mt-10">{title}</h3>
                     </div>
                     <p>{desc}</p>
                     <div className="row pb-25 pt-15">
                        {feature_list.map((item) => (
                           <div key={item.id} className="col-lg-6">
                              <ul className="about-3-list">
                                 {item.list.map((list, i) => (
                                    <li key={i}>{list}</li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                     <div className="about-3-progress-bar p-relative">
                        <h6>Quality Services</h6>
                        <div className="progress">
                           <div
                              className="progress-bar wow slideInLeft"
                              data-wow-duration="1s"
                              data-wow-delay=".3s"
                              role="progressbar"
                              data-width="95%"
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{
                                 width: "70%",
                                 visibility: "visible",
                                 animationDuration: "1s",
                                 animationDelay: "0.3s",
                                 animationName: "slideInLeft",
                              }}
                           ></div>

                        </div>
                        <span className="progress-count">95%</span>
                     </div>
                     <Link className="primary-btn-1 btn-hover mt-50" href="/about">
                        about us &nbsp; | <i className="icon-right-arrow"></i>
                        <span style={{ top: "147.172px", left: "108.5px" }}></span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About