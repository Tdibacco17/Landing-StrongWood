import { StaticImageData } from "next/image";

import team_1 from "@/assets/imgs/team/team-1.jpg"
import team_2 from "@/assets/imgs/team/team-2.jpg"
import team_3 from "@/assets/imgs/team/team-3.jpg"
import team_4 from "@/assets/imgs/team/team-4.jpg"
import team_5 from "@/assets/imgs/team/team-5.jpg"
import team_6 from "@/assets/imgs/team/team-6.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   name: string;
   designation: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      thumb: team_1,
      name: "Kristin Watson",
      designation: "Project Manager"
   },
   {
      id: 2,
      page: "home_3",
      thumb: team_2,
      name: "Annette Black",
      designation: "Senior QA Engineer"
   },
   {
      id: 3,
      page: "home_3",
      thumb: team_3,
      name: "Ralph Edwards",
      designation: "Engineer"
   },

   // inner_page

   {
      id: 1,
      page: "inner_page",
      thumb: team_1,
      name: "Kristin Watson",
      designation: "Project Manager"
   },
   {
      id: 2,
      page: "inner_page",
      thumb: team_2,
      name: "Annette Black",
      designation: "Senior QA Engineer"
   },
   {
      id: 3,
      page: "inner_page",
      thumb: team_3,
      name: "Ralph Edwards",
      designation: "Engineer"
   },
   {
      id: 4,
      page: "inner_page",
      thumb: team_4,
      name: "Albert Flores",
      designation: "Roof Worker"
   },
   {
      id: 5,
      page: "inner_page",
      thumb: team_5,
      name: "Dianne Russell",
      designation: "Project Manager"
   },
   {
      id: 6,
      page: "inner_page",
      thumb: team_6,
      name: "Eleanor Pena",
      designation: "Engineer"
   },
]

export default team_data;