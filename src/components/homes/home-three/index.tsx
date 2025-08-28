import Banner from "./Banner"
import About from "./About"
import Service from "./Service"
import Cta from "./Cta"
import Project from "../home-two/Project"
import Choose from "./Choose"
import Team from "./Team"
import Testimonial from "./Testimonial"
import Blog from "../home-two/Blog"
import Brand from "../home-two/Brand"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Banner />
            <About />
            <Service />
            <Cta />
            <Project />
            <Choose />
            <Team />
            <Testimonial style={false} />
            <Blog />
            <Brand />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeThree
