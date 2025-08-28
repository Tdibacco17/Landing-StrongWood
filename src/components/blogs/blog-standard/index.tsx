import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import BlogArea from "./BlogArea"

const BlogStandard = () => {
  return (
    <>
      <HeaderThree />
      <main>
         <BreadCrumb sub_title="Blog Standard" title="Blog Standard" />
         <BlogArea />
      </main>
      <FooterThree />
    </>
  )
}

export default BlogStandard
