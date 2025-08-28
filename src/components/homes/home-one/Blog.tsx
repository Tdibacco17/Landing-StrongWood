import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import blog_thumb1 from "@/assets/imgs/blog/blog-4.jpg"

interface DataType {
   id: number,
   page: string;
   thumb?: StaticImageData;
   author: string;
   date: string;
   title: string;
   desc?: string;
   col?: string;
   class?: string;
}

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      col: "col-xxl-8 col-xl-8 col-lg-12",
      thumb: blog_thumb1,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Rebecca's New Album Aid for the Needy",
      desc: "Lorem ipsum dolor sit amet consectetur the adipiscing elit Morbi is sodales consequat"
   },
   {
      id: 2,
      page: "home_1",
      col: "col-xxl-4 col-xl-4 col-lg-12",
      class: "d-block",
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Rebecca's New Album Aid for the Needy",
      desc: "Lorem ipsum dolor sit amet consectetur the adipiscing elit Morbi is sodales consequat"
   },
]

interface PropType {
   style: boolean;
}

const Blog = ({ style }: PropType) => {
   return (
      <section className={`blog-two-section section-space ${style ? "bg-color-3 is-dark" : ""}`}>
         <div className="small-container">
            <div className="blog-two-title-area mb-60">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">LATEST blog</span>
                  <h3 className="section-title mt-10">Latest Blog Insights</h3>
               </div>
               <Link className="primary-btn-1 btn-hover" href="/blog-grid">
                  view all &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>
            <div className="row g-4">
               {blog_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className={item.col}>
                     <div className={`blog-style-two ${item.class}`}>
                        {item.thumb &&
                           <Link className="blog-image w-img" href="/blog-details">
                              <Image src={item.thumb ? item.thumb : ""} alt="" />
                           </Link>
                        }
                        <div className="blog-content-area">
                           <div className="post-meta">
                              <span className="p-relative"><Link href="/blog-details"><i className="fal fa-user"></i>{item.author}</Link></span>
                              <span className="p-relative"><Link href="/blog-details"><i className="fal fa-calendar-alt"></i>{item.date}</Link></span>
                           </div>
                           <hr />
                           <h5 className="blog-title"><Link href="/blog-details">{item.title}</Link></h5>
                           <p className="blog-text">{item.desc}</p>
                           <Link className="primary-btn-5 btn-hover" href="/blog-details">
                              Read MORE &nbsp; | <i className="icon-right-arrow"></i>
                              <span style={{ top: "147.172px", left: "108.5px" }}></span>
                           </Link>
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
