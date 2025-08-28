import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import ServiceArea from "./ServiceArea"
import Choose from "@/components/homes/home-three/Choose"
import Counter from "@/components/homes/home-one/Counter"

const Service = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Services" title="Services" />
            <ServiceArea />
            <Choose />
            <Counter style={false} />
         </main>
         <FooterThree />
      </>
   )
}

export default Service
