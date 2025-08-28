"use client"
import Image from "next/image"
import Link from "next/link"
import { JSX } from "react";

import logo from "@/assets/imgs/logo/logo-white.svg"

interface DataType {
   id: number;
   icon: string;
   title: string;
   info: JSX.Element;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: "fa-light fa-location-dot",
      title: "Location:",
      info: (<><p className="m-0">4517 Washington. mg Manchester, Kentucky 39495</p></>),
   },
   {
      id: 2,
      icon: "fa-light fa-phone-alt",
      title: "Phone Call:",
      info: (<><Link href="tel:20866660112">208-6666-0112,</Link> <Link href="tel:30855550113">308-5555-0113</Link></>),
   },
   {
      id: 3,
      icon: "fa-light fa-clock",
      title: "Opening Hours:",
      info: (<><p className="m-0">Mon - Sat: 10.00 AM - 4.00 PM</p></>),
   },
];

const FooterTwo = () => {
   return (
      <footer>
         <div className="footer-main bg-color-1 p-relative">
            <div className="footer-shape-1" style={{ backgroundImage: `url(/assets/imgs/footer/shape-f-1.png)` }}></div>
            <div className="footer-shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-50.png)` }}></div>
            <div className="footer-top section-space-medium">
               <div className="small-container">
                  <div className="row g-4">
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-1">
                           <figure className="image">
                              <Image src={logo} alt="" />
                           </figure>
                           <p className="mt-40 mb-40"> Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis</p>
                           <div className="footer-socials p-relative">
                              <span><Link href="#"><i className="fab fa-facebook-f"></i></Link></span>
                              <span><Link href="#"><i className="fab fa-twitter"></i></Link></span>
                              <span><Link href="#"><i className="fab fa-linkedin-in"></i></Link></span>
                              <span><Link href="#"><i className="fab fa-youtube"></i></Link></span>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-2 pl-50">
                           <h4 className="mb-30 footer-title">Quick Links</h4>
                           <ul className="service-list">
                              <li><Link href="/about">About Us</Link></li>
                              <li><Link href="/team">Our Team</Link></li>
                              <li><Link href="/services">Our Services</Link></li>
                              <li><Link href="/blog-grid">Latest Blog</Link></li>
                              <li><Link href="/contact">Contact Us</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-2">
                           <h4 className="mb-30 footer-title">Our Services</h4>
                           <ul className="service-list">
                              <li><Link href="/service-details">Damage Roofing</Link></li>
                              <li><Link href="/service-details">Roof Repair</Link></li>
                              <li><Link href="/service-details">Roof Installation</Link></li>
                              <li><Link href="/service-details">Roof Animation</Link></li>
                              <li><Link href="/service-details">Modified Roofing</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-4">
                           <h4 className="mb-20 footer-title">Contact Info</h4>
                           <ul className="footer-contact-info-widget p-relative">
                              {contact_data.map((item) => (
                                 <li key={item.id}>
                                    <div className="icon">
                                       <i className={item.icon}></i>
                                    </div>
                                    <div className="info-details">
                                       <h6 className="mb-10">{item.title}</h6>
                                       {item.info}
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="small-container">
               <div className="footer-bottom pt-30 pb-30 p-relative">
                  <div className="left-area">
                     <span>© All Copyright 2025 by <Link href="#">Gramen</Link></span>
                  </div>
                  <div className="right-area">
                     <span><Link href="#">Terms & Condition</Link></span>
                     <span><Link href="#">Privacy Policy</Link></span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
