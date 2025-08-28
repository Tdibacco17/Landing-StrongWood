import { StaticImageData } from "next/image";

import service_img1 from "@/assets/imgs/service/service-4.jpg"
import service_img2 from "@/assets/imgs/service/service-5.jpg"
import service_img3 from "@/assets/imgs/service/service-6.jpg"
import service_img4 from "@/assets/imgs/service/service-7.jpg"

import service_img5 from "@/assets/imgs/service/service-1.jpg"
import service_img6 from "@/assets/imgs/service/service-2.jpg"
import service_img7 from "@/assets/imgs/service/service-3.jpg"
import service_img8 from "@/assets/imgs/service/service-7.jpg"
import service_img9 from "@/assets/imgs/service/service-9.jpg"
import service_img10 from "@/assets/imgs/service/service-10.jpg"

interface DataType {
   id: number;
   page:string;
   thumb: StaticImageData;
   icon: string;
   title: string;
   desc: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      page:"home_2",
      thumb: service_img1,
      icon: "icon-roof",
      title: "Roof Renovation",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 2,
      page:"home_2",
      thumb: service_img2,
      icon: "icon-roof-8",
      title: "Roof Cornering",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 3,
      page:"home_2",
      thumb: service_img3,
      icon: "icon-roof-2",
      title: "Modified Roofing",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 4,
      page:"home_2",
      thumb: service_img4,
      icon: "icon-roof-3",
      title: "Roof Installation",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 5,
      page:"home_2",
      thumb: service_img3,
      icon: "icon-roof-8",
      title: "Roof Cornering",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },

   // inner_page
   
   {
      id: 1,
      page:"inner_page",
      thumb: service_img5,
      icon: "icon-roof",
      title: "Roof Renovation",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 2,
      page:"inner_page",
      thumb: service_img6,
      icon: "icon-roof-2",
      title: "Roof Installation",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 3,
      page:"inner_page",
      thumb: service_img7,
      icon: "icon-roof-3",
      title: "Modified Roofing",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 4,
      page:"inner_page",
      thumb: service_img8,
      icon: "icon-hammer",
      title: "Damage Repair",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 5,
      page:"inner_page",
      thumb: service_img9,
      icon: "icon-roof-5",
      title: "Roof Animation",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 6,
      page:"inner_page",
      thumb: service_img10,
      icon: "icon-roof-6",
      title: "Fixing Roofing",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
];

export default service_data;