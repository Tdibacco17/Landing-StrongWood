import BlogGrid from "@/components/blogs/blog-grid";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Blog Grid Gramen - Roofing Services React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <BlogGrid />
    </Wrapper>
  )
}

export default page