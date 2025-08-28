import Image from "next/image"
import Link from "next/link"

import team_img1 from "@/assets/imgs/team/team-single.jpg"

interface DataType {
   name: string;
   designation: string;
   desc_1: string;
   skillbar: {
      title: string;
      skill: number;
   }[];
   title: string;
}

const team_data: DataType = {
   name: "Kristin Watson",
   designation: "Senior QA Engineer",
   desc_1: "Mauris sapien neque, placerat ut dolor nec, egestas tincidunt felis. Sed in ornare quam, finibus dui aliquam justo duis eros quam, semper at libero sed, vehicula the consequat arcu. In ornare, enim at egestas bibendum, ligula ante congue arcu, sed ornare sem nulla is nec magna. Morbi faucibus sed ante eu bibendum. lacud Phasellus posuere mauris risus,",
   skillbar: [
      {
         title: "Analysis",
         skill: 95
      },
      {
         title: "Optimization",
         skill: 85
      },
      {
         title: "Branding",
         skill: 98
      },
   ],
   title: "Education Background",
}

const { name, designation, desc_1, skillbar, title } = team_data;

const TeamDetailsArea = () => {
   return (
      <section className="team-details-page section-space-top">
         <div className="small-container">
            <div className="team-member-info mb-80">
               <div className="row">
                  <div className="col-xxl-5">
                     <div className="team-member-info-image-area p-relative">
                        <figure className="w-img">
                           <Image src={team_img1} alt="" />
                        </figure>
                        <ul className="team-member-socials-icon">
                           <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                           <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                           <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-xxl-7 pl-20">
                     <h5 className="pt-20">{name}</h5>
                     <h6 className="mb-25 mt-20 designation">{designation}</h6>
                     <hr />
                     <p className="mt-40 mb-40">{desc_1}</p>
                     {skillbar.map((item, i) => (
                        <div key={i} className="team-details-progress-bar p-relative">
                           <h6>{item.title}</h6>
                           <div className="progress">
                              <div
                                 className="progress-bar wow slideInLeft"
                                 data-wow-duration="1s"
                                 data-wow-delay=".3s"
                                 role="progressbar"
                                 data-width={`${item.skill}%`}
                                 aria-valuenow={25}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                                 style={{
                                    width: `${item.skill}%`,
                                    visibility: "visible",
                                    animationDuration: "1s",
                                    animationDelay: "0.3s",
                                    animationName: "slideInLeft",
                                 }}
                              ></div>
                           </div>
                           <span className="progress-count">{item.skill}%</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="team-member-info-details pt-60 pb-60">
               <h5 className="mb-30">{title}</h5>
               <hr />
               <div className="edu-info mb-30 mt-30">
                  <h6>Diploma</h6>
                  <span>2012 - 2016</span>
               </div>
               <p className="mb-50">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the is quis nostrud vitae exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit The is ipsum dolor sit amet consectetur nulla adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat..</p>

               <div className="edu-info mb-30">
                  <h6>Degree, Roofing</h6>
                  <span>2016 - 2020 </span>
               </div>
               <p>Duis ac ligula vel enim vehicula semper. Praesent diam enim, ultricies sed pharetra in, vestibulum eget elit. Praesent condimentum, eros vitae feugiat faucibus, elit arcu commodo orci, et sodales orci lacus vel urna. Nullam sodales rhoncus nulla, quis gravida mauris blandit ut. Cras a massa non neque faucibus porta id et leo. Nunc sit amet volutpat libero. Maecenas aliquet blandit libero sit amet efficitur. Nam mauris nisi,</p>
            </div>
         </div>
      </section>
   )
}

export default TeamDetailsArea
