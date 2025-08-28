import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"

const Blog = () => {
   return (
      <section className="blog-section-one section-space">
         <div className="small-container">
            <div className="blog-title-box mb-40">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title no-border">LATEST blog</span>
                  <h3 className="section-title mt-10">Latest Blog Insights</h3>
               </div>
               <Link className="primary-btn-1 btn-hover" href="/blog-details">
                  view all &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>
            <div className="row g-4">
               {blog_data.filter((items) => items.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-6">
                     <div className="blog-style-one">
                        <Link className="blog-image w-img" href="/blog-details">
                           <Image src={item.thumb ? item.thumb : ""} alt="" />
                        </Link>
                        <div className="blog-content">
                           <div className="post-meta">
                              <span className="p-relative"><Link href="/blog-details"><i className="fal fa-user"></i> {item.author}</Link></span>
                              <span className="p-relative"><Link href="/blog-details"><i className="fal fa-calendar-alt"></i>{item.date}</Link></span>
                           </div>
                           <hr />
                           <h5 className="blog-title mb-30"><Link href="/blog-details">{item.title}</Link></h5>
                           <div className="blog-link">
                              <Link className="primary-btn-5 btn-hover" href="/blog-details">
                                 Read MORE &nbsp; | <i className="icon-right-arrow"></i>
                                 <span style={{ top: "147.172px", left: "108.5px" }}></span>
                              </Link>
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

export default Blog
