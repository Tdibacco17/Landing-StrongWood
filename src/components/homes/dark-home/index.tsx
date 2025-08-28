import HeaderOne from "@/layouts/headers/HeaderOne"
import Banner from "../home-one/Banner"
import About from "../home-one/About"
import Service from "../home-one/Service"
import Process from "../home-one/Process"
import TextSlider from "../home-one/TextSlider"
import Project from "../home-one/Project"
import Testimonial from "../home-three/Testimonial"
import Counter from "../home-one/Counter"
import HelpForm from "../home-one/HelpForm"
import Blog from "../home-one/Blog"
import Features from "../home-one/Features"
import FooterOne from "@/layouts/footers/FooterOne"

const DarkHome = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Banner />
        <Features style={true} />
        <About style={true} />
        <Service style={true} />
        <Process style={true} />
        <TextSlider style={true} />
        <Project style={true} />
        <Testimonial style={true} />
        <Counter style={true} />
        <HelpForm />
        <Blog style={true} />
      </main>
      <FooterOne />
    </>
  )
}

export default DarkHome
