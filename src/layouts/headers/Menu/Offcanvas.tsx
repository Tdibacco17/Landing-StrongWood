import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/imgs/logo/logo-white.svg"
import MobileMenu from "./MobileMenu";

interface MobileSidebarProps {
   style: boolean;
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ style, offCanvas, setOffCanvas }: MobileSidebarProps) => {

   return (
      <>
         <div className="fix">
            <div className={`offcanvas__info ${offCanvas ? "info-open" : ""}`}>
               <div className="offcanvas__wrapper">
                  <div className="offcanvas__content">
                     <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo">
                           <Link href="/dashboard">
                              <Image src={logo} alt="Header Logo" />
                           </Link>
                        </div>
                        <div className="offcanvas__close">
                           <button onClick={() => setOffCanvas(false)}>
                              <i className="fal fa-times"></i>
                           </button>
                        </div>
                     </div>
                     {style && <div className="offcanvas__search mb-25">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime accusamus corrupti natus obcaecati vitae dignissimos, id officiis similique eos.</p>
                     </div>}
                     <div className="mobile-menu mobile-menu-wrapper fix mb-40 mean-container">
                        <div className="mean-bar">
                           <nav className="mean-nav">
                              <MobileMenu />
                           </nav>
                        </div>
                     </div>
                     {style &&
                        <>
                           <div className="offcanvas__contact mt-30 mb-20">
                              <h4>Contact Info</h4>
                              <ul>
                                 <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                       <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                       <Link target="_blank"
                                          href="#">31 Park End St, Brockhampton, UK</Link>
                                    </div>
                                 </li>
                                 <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                       <i className="far fa-phone"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                       <Link href="tel:+00112233665">+00112233665</Link>
                                    </div>
                                 </li>
                                 <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                       <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                       <Link href="tel:+012-345-6789"><span className="mailto:support@example.com">support@example.com</span></Link>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="offcanvas__social">
                              <ul>
                                 <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                 <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                 <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                 <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
                              </ul>
                           </div>
                        </>
                     }
                  </div>
               </div>
            </div>
         </div>
         <div onClick={() => setOffCanvas(false)} className={`offcanvas__overlay ${offCanvas ? "overlay-open" : ""}`}></div>
         <div onClick={() => setOffCanvas(false)} className="offcanvas__overlay-white"></div>
      </>
   )
}

export default Offcanvas
