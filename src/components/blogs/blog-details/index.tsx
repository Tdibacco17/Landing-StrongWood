import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Blog Details" title="Blog Details" />
            <BlogDetailsArea />
         </main>
         <FooterThree />
      </>
   )
}

export default BlogDetails
