import { StaticImageData } from "next/image";

import blog_thumb2 from "@/assets/imgs/blog/blog-1.jpg"
import blog_thumb3 from "@/assets/imgs/blog/blog-2.jpg"
import blog_thumb4 from "@/assets/imgs/blog/blog-3.jpg"
import blog_thumb5 from "@/assets/imgs/blog/blog-8.jpg"
import blog_thumb6 from "@/assets/imgs/blog/blog-9.jpg"
import blog_thumb7 from "@/assets/imgs/blog/blog-10.jpg"
import blog_thumb8 from "@/assets/imgs/blog/blog-5.jpg"
import blog_thumb9 from "@/assets/imgs/blog/blog-6.jpg"
import blog_thumb10 from "@/assets/imgs/blog/blog-7.jpg"

interface DataType {
   id: number,
   page: string;
   thumb: StaticImageData;
   author: string;
   date: string;
   title: string;
   desc?: string;
}

const blog_data: DataType[] = [
   // home_2
   {
      id: 1,
      page: "home_2",
      thumb: blog_thumb2,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Best Repairing For Leakage Roof In",
   },
   {
      id: 2,
      page: "home_2",
      thumb: blog_thumb3,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Correct Execution Ensures Victory.",
   },
   {
      id: 3,
      page: "home_2",
      thumb: blog_thumb4,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
   },

   // inner_1
   {
      id: 1,
      page: "inner_1",
      thumb: blog_thumb5,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
      desc: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus."
   },
   {
      id: 2,
      page: "inner_1",
      thumb: blog_thumb6,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
      desc: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus."
   },
   {
      id: 3,
      page: "inner_1",
      thumb: blog_thumb7,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
      desc: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus."
   },
   {
      id: 4,
      page: "inner_1",
      thumb: blog_thumb6,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
      desc: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus."
   },
   {
      id: 5,
      page: "inner_1",
      thumb: blog_thumb7,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
      desc: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus."
   },
   {
      id: 6,
      page: "inner_1",
      thumb: blog_thumb5,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
      desc: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus."
   },
   {
      id: 7,
      page: "inner_1",
      thumb: blog_thumb7,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
      desc: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus."
   },

   // inner_2

   {
      id: 1,
      page: "inner_2",
      thumb: blog_thumb2,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Best Repairing For Leakage Roof In",
   },
   {
      id: 2,
      page: "inner_2",
      thumb: blog_thumb3,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Correct Execution Ensures Victory.",
   },
   {
      id: 3,
      page: "inner_2",
      thumb: blog_thumb4,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
   },
   {
      id: 4,
      page: "inner_2",
      thumb: blog_thumb8,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
   },
   {
      id: 5,
      page: "inner_2",
      thumb: blog_thumb9,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Rebecca's New Album Aid for the Needy",
   },
   {
      id: 6,
      page: "inner_2",
      thumb: blog_thumb10,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
   },
   {
      id: 7,
      page: "inner_2",
      thumb: blog_thumb8,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Doing Things Correctly Leads to Success",
   },
   {
      id: 8,
      page: "inner_2",
      thumb: blog_thumb9,
      author: "By Admin",
      date: "28 Nov, 2024",
      title: "Rebecca's New Album Aid for the Needy",
   },
];

export default blog_data;