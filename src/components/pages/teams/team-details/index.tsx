import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import TeamDetailsArea from "./TeamDetailsArea"

const TeamDetails = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb sub_title="Team Details" title="Team Details" />
        <TeamDetailsArea />
      </main>
      <FooterThree />
    </>
  )
}

export default TeamDetails
