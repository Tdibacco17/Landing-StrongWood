import NotFound from "@/components/pages/error";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "404 || Gramen - Roofing Services React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <NotFound />
    </Wrapper>
  )
}

export default page