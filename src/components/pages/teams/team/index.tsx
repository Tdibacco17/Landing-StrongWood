import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import TeamArea from "./TeamArea"

const Team = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Team" title="Team" />
            <TeamArea />
         </main>
         <FooterThree />
      </>
   )
}

export default Team
