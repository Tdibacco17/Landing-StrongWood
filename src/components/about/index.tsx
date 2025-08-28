import AboutHome from "@/components/homes/home-three/About"
import BreadCrumb from "../common/BreadCrumb"
import Choose from "../homes/home-three/Choose"
import Process from "../homes/home-one/Process"
import Team from "../homes/home-three/Team"
import Map from "./Map"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"

const About = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="About" title="About" />
            <AboutHome />
            <Choose />
            <Process style={false} />
            <Team />
            <Map />
            <FooterThree />
         </main>
      </>
   )
}

export default About
