import team_data from "@/data/TeamData";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
   return (
      <section className="team-section p-relative section-space">
         <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-13.png)` }}></div>
         <div className="shape-2 float-bob-y" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-14.png)` }}></div>
         <div className="small-container">
            <div className="title-box text-center mb-50 wow fadeInLeft" data-wow-delay=".5s">
               <span className="section-sub-title">OUR EXPERT</span>
               <h3 className="section-title mt-10">The Specialists in Roofing</h3>
            </div>
            <div className="row g-4">
               {team_data.filter((items) => items.page === "home_3").map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="team-area-box p-relative mb-60 wow fadeInLeft" data-wow-delay=".7s">
                        <figure className="image w-img p-relative">
                           <Image src={item.thumb} alt="" />
                        </figure>
                        <div className="content">
                           <div className="author-info">
                              <h5 className="mb-5"><Link href="/team-details">{item.name}</Link></h5>
                              <span>{item.designation}</span>
                           </div>
                           <div className="social-links p-relative">
                              <span><i className="icon-share"></i></span>
                              <ul>
                                 <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                 <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                 <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Team
