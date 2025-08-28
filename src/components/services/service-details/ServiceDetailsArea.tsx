import service_thumb1 from "@/assets/imgs/service/service-details-1.jpg"
import service_thumb2 from "@/assets/imgs/service/service-details-2.jpg"
import service_thumb3 from "@/assets/imgs/service/service-details-3.jpg"
import service_thumb4 from "@/assets/imgs/service/service-details-4.jpg"
import Image from "next/image";
import ServiceSidebar from "./ServiceSidebar";
interface DataType {
   title_1: string;
   title_2: string;
   desc_1: string;
   desc_2: string;
   desc_3: string;
   desc_4: string;
   list: string[];
}

const service_data: DataType = {
   title_1: "Modified Roofing",
   title_2: "Choose Your Services",
   desc_1: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
   desc_2: "lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.",
   desc_3: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
   desc_4: "lacus sed pretium pretium justo. Integer vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat is semper vel id turpis In a malesuada arcu ac hendrerit metus.",
   list: ["Roof Renovation", "Roof Installation", "Modified Roofing", "Roof Repair", "Fixing Roofing", "Roof Animation"]
}

const { title_1, title_2, desc_1, desc_2, desc_3, desc_4, list } = service_data;

const ServiceDetailsArea = () => {
   return (
      <section className="service-details-page section-space">
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="service-details-page-content">
                     <figure className="w-img">
                        <Image src={service_thumb1} alt="" />
                     </figure>
                     <h3 className="service-details-title mt-45 mb-25">{title_1}</h3>
                     <p className="mb-25">{desc_1}</p>
                     <p className="mb-35">{desc_2}</p>
                     <div className="row">
                        <div className="col-lg-6">
                           <figure className="w-img">
                              <Image src={service_thumb2} alt="" />
                           </figure>
                        </div>
                        <div className="col-lg-6">
                           <figure className="w-img">
                              <Image src={service_thumb3} alt="" />
                           </figure>
                        </div>
                     </div>
                     <p className="mt-25 mb-35">{desc_3}</p>

                     <h4>{title_2}</h4>

                     <p className="mt-25 mb-35">{desc_4}</p>
                     <div className="row">
                        <div className="col-lg-7">
                           <figure className="w-img">
                              <Image src={service_thumb4} alt="" />
                           </figure>
                        </div>
                        <div className="col-lg-5">
                           <ul className="service-details-page-list pt-20 pb-10">
                              {list.map((list, i) => (
                                 <li key={i}>{list}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <ServiceSidebar />
            </div>
         </div>
      </section>
   )
}

export default ServiceDetailsArea
