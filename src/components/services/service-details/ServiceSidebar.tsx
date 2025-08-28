import Image from "next/image"
import Link from "next/link"

import sidebar_thumb from "@/assets/imgs/service/service-widget-1.jpg"

const sidebar_list: string[] = ["Roof Renovation", "Roof Installation", "Modified Roofing", "Roof Repair", "Fixing Roofing"]

const ServiceSidebar = () => {
   return (
      <div className="col-xxl-4 col-xl-4 col-lg-4">
         <div className="service-sidebar">
            <aside>
               <div className="service-widget-1 mb-30">
                  <h5>Main Services</h5>
                  <ul>
                     {sidebar_list.map((list, i) => (
                        <li key={i}>
                           <Link href="#">
                              <span>{list}</span>
                              <span><i className="icon-arrow-right-double"></i></span>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="service-widget-2 mb-30">
                  <figure className="w-img">
                     <Image src={sidebar_thumb} alt="" />
                  </figure>
                  <div className="content bg-color-1 text-center">
                     <div className="icon-box p-relative">
                        <i className="fal fa-phone-volume"></i>
                     </div>
                     <h5>Need Help? Call Here</h5>
                     <a className="pt-25 pb-25 phone" href="tel:2085550112">+208-555-0112</a>
                     <div className="btn-box">
                        <Link className="primary-btn-1 btn-hover" href="/contact">
                           GET A QUOTE &nbsp; | <i className="icon-right-arrow"></i>
                           <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="service-widget-3">
                  <div className="company-file">
                     <h6>Company File</h6>
                     <div className="file-size">
                        <span>(1.5MB)</span>
                        <span><Link href="#"><i className="far fa-arrow-down-to-bracket"></i></Link></span>
                     </div>
                  </div>
               </div>
            </aside>
         </div>
      </div>
   )
}

export default ServiceSidebar
