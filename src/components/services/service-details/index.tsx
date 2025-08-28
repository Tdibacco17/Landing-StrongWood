import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import ServiceDetailsArea from "./ServiceDetailsArea"

const ServiceDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Service Details" title="Service Details" />
            <ServiceDetailsArea />
         </main>
         <FooterThree />
      </>
   )
}

export default ServiceDetails
