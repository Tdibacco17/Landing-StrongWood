import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

import avatar_1 from "@/assets/imgs/blog/post-box-1.jpg"
import avatar_2 from "@/assets/imgs/blog/post-box-2.jpg"

interface DataType {
   id: number;
   avatar: StaticImageData;
   title: string;
   date: string;
   desc: string;
}

const comment_data: DataType[] = [
   {
      id: 1,
      avatar: avatar_1,
      title: "Ralph edwards",
      date: "March 20, 2023 at 2:37 pm",
      desc: "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy"
   },
   {
      id: 2,
      avatar: avatar_2,
      title: "Albert Flores",
      date: "March 20, 2023 at 2:37 pm",
      desc: "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy"
   },
];

const BlogComments = () => {
   return (
      <>
         <h4 className="post-box-comments-title">02 Comments</h4>
         {comment_data.map((item) => (
            <React.Fragment key={item.id}>
               <div className="post-box-comments-box p-relative mt-40 mb-40">
                  <div className="postbox__comment-avatar">
                     <Image src={item.avatar} alt="" />
                  </div>
                  <div className="postbox__comment-text ">
                     <div className="postbox__comment-name">
                        <h5><Link href="#">{item.title}</Link></h5>
                        <span className="post-meta">{item.date}</span>
                     </div>
                     <ul className="postbox__comment_ratings">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                     </ul>
                     <p className="pt-25 pb-25">{item.desc}</p>
                     <div className="postbox__comment-reply">
                        <Link href="#">Reply</Link>
                     </div>
                  </div>
               </div>
               <hr />
            </React.Fragment>
         ))}
      </>
   )
}

export default BlogComments
