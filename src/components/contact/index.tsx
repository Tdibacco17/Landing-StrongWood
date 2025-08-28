import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import BreadCrumb from '../common/BreadCrumb'
import ContactArea from './ContactArea'
import ContactMap from './ContactMap'

const Contact = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title='Contact' title='Contact' />
            <ContactArea />
            <ContactMap />
         </main>
         <FooterThree />
      </>
   )
}

export default Contact
