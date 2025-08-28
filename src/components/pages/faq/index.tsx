import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import FaqArea from "./FaqArea"

const Faq = () => {
  return (
    <>
      <HeaderThree />
      <main>
         <BreadCrumb sub_title="Faq" title="Faq" />
         <FaqArea />
      </main>
      <FooterThree />
    </>
  )
}

export default Faq
