import BreadCrumb from "@/components/common/BreadCrumb"
import ProjectArea from "./ProjectArea"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"

const Project = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Projects" title="Projects" />
            <ProjectArea />
         </main>
         <FooterThree />
      </>
   )
}

export default Project
