import HeaderOne from "@/layouts/headers/HeaderOne"
import Banner from "./Banner"
import Features from "./Features"
import About from "./About"
import Service from "./Service"
import Process from "./Process"
import TextSlider from "./TextSlider"
import Project from "./Project"
import Testimonial from "./Testimonial"
import HelpForm from "./HelpForm"
import Blog from "./Blog"
import Counter from "./Counter"
import FooterOne from "@/layouts/footers/FooterOne"

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Banner />
        <Features style={true} />
        <About style={false} />
        <Service style={false} />
        <Process style={false} />
        <TextSlider style={false}/>
        <Project style={false} />
        <Testimonial />
        <Counter style={false} />
        <HelpForm />
        <Blog style={false} />
      </main>
      <FooterOne />
    </>
  )
}

export default HomeOne
