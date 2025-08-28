"use client"
import Link from "next/link"
import Category from "./Category"
import RecentPost from "./RecentPost"
import Tags from "./Tags"
import Image from "next/image"

import img_1 from "@/assets/imgs/service/service-widget-1.jpg"

const BlogSidebar = () => {
   return (
      <div className="col-xxl-4 col-xl-4 col-lg-4">
         <div className="blog-sidebar">
            <aside>
               <div className="blog-widget-1 mb-30">
                  <h5 className="blog-widget-title p-relative mb-45">Search</h5>
                  <div className="search-form p-relative">
                     <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Search here" />
                        <button type="submit"><i className="icon-search"></i></button>
                     </form>
                  </div>
               </div>
               <Category />
               <RecentPost />
               <Tags />
               <div className="service-widget-2 mb-30">
                  <figure className="w-img">
                     <Image src={img_1} alt="" />
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
            </aside>
         </div>
      </div>
   )
}

export default BlogSidebar
