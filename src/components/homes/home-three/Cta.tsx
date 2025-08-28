import Image from "next/image"
import Link from "next/link"

import cta from "@/assets/imgs/resources/cta-1.jpg"

const Cta = () => {
   return (
      <section className="cta-1-section bg-color-1 p-relative wow fadeInDown" data-wow-delay=".5s">
         <div className="small-container">
            <div className="row g-0 box-shadow-1 fix">
               <div className="col-xxl-6 col-lg-6 bg-white">
                  <figure className="image w-img">
                     <Image src={cta} alt="" />
                  </figure>
               </div>
               <div className="col-xxl-6 col-lg-6">
                  <div className="content p-relative">
                     <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-12.png)` }}></div>
                     <div className="icon-box">
                        <i className="fal fa-phone-volume"></i>
                     </div>
                     <h3 className="mb-15">Need Any Roofing Help?</h3>
                     <h5><Link href="tel:2085550112">+208-555-0112</Link></h5>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Cta
