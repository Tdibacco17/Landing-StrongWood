import Link from "next/link";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import BlogComments from "./BlogComments";
import BlogForm from "@/components/forms/BlogForm";

import img_1 from "@/assets/imgs/blog/blog-details-1.jpg"
import img_2 from "@/assets/imgs/blog/blog-details-2.jpg"
import img_3 from "@/assets/imgs/blog/blog-details-3.jpg"

interface DataType {
   title_1: string;
   desc_1: string;
   desc_2: string;
   desc_3: string;
   desc_4: string;
   desc_5: string;
   blockquote: string;
   tags: string[];
}

const blog_data: DataType = {
   title_1: "Best Repairing For Leakage Roof In",
   desc_1: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
   desc_2: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
   desc_3: "Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.",
   desc_4: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
   desc_5: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
   blockquote: "Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit amet est vehicula.",
   tags: ["rooftiles", "repairs", "roofrepairs"],
}

const { title_1, desc_1, desc_2, desc_3, desc_4, desc_5, blockquote, tags } = blog_data;

const BlogDetailsArea = () => {
   return (
      <section className="blog-details-page section-space">
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <figure className="blog-thumb w-img">
                     <Image src={img_1} alt="" />
                  </figure>
                  <ul className="blog-post-meta mb-20 mt-40">
                     <li><Link href="#"><i className="fal fa-user"></i>By Admin</Link></li>
                     <li><Link href="#"><i className="fal fa-calendar-days"></i>28 Nov, 2023</Link></li>
                     <li><Link href="#"><i className="fal fa-tag"></i>Roof Renovation</Link></li>
                  </ul>
                  <hr />
                  <h3 className="blog-details-title mb-30 mt-20"><Link href="#">{title_1}</Link></h3>
                  <p className="mb-30">{desc_1}</p>
                  <p className="mb-30">{desc_2}</p>
                  <p className="mb-40">{desc_3}</p>

                  <div className="row mb-40">
                     <div className="col-lg-6">
                        <figure className="w-img">
                           <Image src={img_2} alt="" />
                        </figure>
                     </div>
                     <div className="col-lg-6">
                        <figure className="w-img">
                           <Image src={img_3} alt="" />
                        </figure>
                     </div>
                  </div>
                  <p className="mb-40">{desc_4} </p>
                  <blockquote>
                     <div className="quote-area p-relative">
                        <p>{blockquote}</p>
                        <i className="fa-sharp fa-solid fa-quote-right"></i>
                     </div>
                  </blockquote>
                  <p className="mt-40 mb-65">{desc_5}</p>
                  <div className="postbox__share-wrapper mb-60">
                     <div className="row g-4 align-items-center">
                        <div className="col-xl-7 col-lg-12">
                           <div className="tagcloud tagcloud-sm">
                              <span>Tags:</span>
                              {tags.map((tag, i) => (
                                 <Link key={i} href="#">{tag}</Link>
                              ))}
                           </div>
                        </div>
                        <div className="col-xl-5 col-lg-12">
                           <div className="postbox__share text-xl-end">
                              <span>Share:</span>
                              <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                              <Link href="#"><i className="fab fa-twitter"></i></Link>
                              <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  <BlogComments />
                  <div className="postbox__comment-form mt-60">
                     <h4 className="postbox__comment-form-title mb-50">Leave a Comment</h4>
                     <BlogForm />
                  </div>
               </div>
               <BlogSidebar />
            </div>
         </div>
      </section>
   )
}

export default BlogDetailsArea
