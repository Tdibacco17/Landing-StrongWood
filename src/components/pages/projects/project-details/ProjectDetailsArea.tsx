"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"
import ProjectSidebar from "./ProjectSidebar"

import project_thumb1 from "@/assets/imgs/project/project-details-1.jpg"
import project_thumb2 from "@/assets/imgs/project/project-details-2.jpg"
import project_thumb3 from "@/assets/imgs/project/project-details-3.jpg"

const ProjectDetailsArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="Project-details-page section-space">
            <div className="small-container">
               <figure className="w-img">
                  <Image src={project_thumb1} alt="" />
               </figure>
               <div className="row mt-50">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="project-details-page-content">
                        <div className="project-info mb-50">
                           <h6><span>Year:</span> 2022-2023</h6>
                           <h6><span>Client:</span> Robert Fox</h6>
                           <h6><span>Category:</span> Roof Renovation</h6>
                           <h6><span>Location:</span> fot kde, USA</h6>
                        </div>
                        <h5 className="project-details-page-title">Here to know about this project</h5>

                        <p className="mt-30 mb-30">The is ipsum dolor sit amet consectetur adipiscing elit the fusce is eleifend porta of arcu In hac habitasse platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat. </p>
                        <p>lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas lacinia turpis the in nunc the quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is vel volutpat nam nec purus at is orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.</p>

                        <h4 className="mt-35 mb-25">The Challenge Of Project</h4>

                        <p>lacus sed pretium pretium justo. Integer vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat is semper vel id turpis In a malesuada arcu ac hendrerit metus.</p>

                        <div className="row">
                           <div className="col-lg-7">
                              <figure className="w-img">
                                 <Image src={project_thumb2} alt="" />
                              </figure>
                           </div>
                           <div className="col-lg-5">
                              <ul className="service-details-page-list pt-20 pb-10">
                                 <li>Roof Renovation</li>
                                 <li>Roof Installation</li>
                                 <li>Modified Roofing</li>
                                 <li>Roof Repair</li>
                                 <li>Fixing Roofing</li>
                                 <li>Roof Animation</li>
                              </ul>
                           </div>
                        </div>

                        <h4 className="mt-35 mb-25">The Final View Of Project</h4>
                        <p className="mb-30">The is ipsum dolor sit amet consectetur adipiscing elit the fusce is eleifend porta of arcu In hac habitasse platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat. </p>

                        <div className="project-details-video p-relative">
                           <figure className="image w-img">
                              <Image src={project_thumb3} alt="" />
                           </figure>
                           <div className="play-btn">
                              <div className="video_player_btn">
                                 <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="popup-video"><i className="icon-play"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <ProjectSidebar />
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

export default ProjectDetailsArea
