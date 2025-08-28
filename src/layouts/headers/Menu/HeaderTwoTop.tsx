import Link from "next/link"

const HeaderTwoTop = () => {
   return (
      <div className="container-fluid bg-color-1">
         <div className="header-top">
            <div className="header-top-contact-info">
               <span className="email p-relative"><Link href="mailto:info@gramen.com">info@gramen.com</Link></span>
               <span className="time p-relative">Hours: Mon - Sat: 10.00 AM - 4.00 PM</span>
            </div>
            <div className="header-top-socials">
               <span><Link href="#"><i className="fab fa-facebook-f"></i></Link></span>
               <span><Link href="#"><i className="fab fa-twitter"></i></Link></span>
               <span><Link href="#"><i className="fab fa-linkedin-in"></i></Link></span>
               <span><Link href="#"><i className="fab fa-youtube"></i></Link></span>
            </div>
         </div>
      </div>
   )
}

export default HeaderTwoTop
