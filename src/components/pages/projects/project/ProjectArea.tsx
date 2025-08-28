import project_data from "@/data/ProjectData"
import Image from "next/image"
import Link from "next/link"

const ProjectArea = () => {
   return (
      <section className="project-page-section section-space p-relative fix">
         <div className="small-container">
            <div className="row g-4">
               {project_data.filter((items) => items.page === "inner_page").map((item) => (
                  <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
                     <div className="project-slider-area p-relative">
                        <figure className="image m-img">
                           <Image src={item.thumb} alt="" />
                        </figure>
                        <div className="content-area">
                           <div className="title-area">
                              <h6 className="mb-5">{item.sub_title}</h6>
                              <h5><Link href="/project-details">{item.title}</Link></h5>
                           </div>
                           <div className="icon-area">
                              <Link href="/project-details"><i className="icon-arrow-up"></i></Link>
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

export default ProjectArea
