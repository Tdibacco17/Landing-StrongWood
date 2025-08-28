import { StaticImageData } from "next/image";

import avatar_1 from "@/assets/imgs/resources/testimonials-2.png"
import avatar_2 from "@/assets/imgs/resources/testimonials-1.png"

interface DataType {
   id: number;
   page: string;
   avatar: StaticImageData;
   name: string;
   designation: string;
   desc: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      avatar: avatar_1,
      name: "Kathryn Murphy",
      designation: "Engineering",
      desc: "“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”"
   },
   {
      id: 2,
      page: "home_1",
      avatar: avatar_2,
      name: "Kathryn Murphy",
      designation: "Engineering",
      desc: "“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”"
   },
   {
      id: 3,
      page: "home_1",
      avatar: avatar_1,
      name: "Kathryn Murphy",
      designation: "Engineering",
      desc: "“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”"
   },
   {
      id: 4,
      page: "home_1",
      avatar: avatar_2,
      name: "Kathryn Murphy",
      designation: "Engineering",
      desc: "“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”"
   },
];

export default testi_data;