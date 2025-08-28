import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Page Not Found" title="404" />
            <ErrorArea />
         </main>
         <FooterThree />
      </>
   )
}

export default NotFound
