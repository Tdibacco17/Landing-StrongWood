/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileMenu = () => {
   const currentRoute = usePathname();
   const [navTitle, setNavTitle] = useState("");
   const [subNavTitle, setSubNavTitle] = useState("");

   const isMenuItemActive = (menuLink: string) => {
      return currentRoute === menuLink;
   };

   const isSubMenuItemActive = (subMenuLink: string) => {
      return currentRoute === subMenuLink;
   };

   // Open or close the parent menu
   const openMobileMenu = (menu: any) => {
      setNavTitle((prev: any) => (prev === menu ? "" : menu));
      setSubNavTitle("");
   };

   // Open or close the submenu
   const openMobileSubMenu = (sub_m: any) => {
      setSubNavTitle((prev: any) => (prev === sub_m ? "" : sub_m));
   };

   return (
      <ul>
         {menu_data.map((menu) => (
            <li key={menu.id} className={menu.has_dropdown ? "has-dropdown" : ""}>
               <Link href={menu.link} className={`${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                  {menu.title}
               </Link>

               {menu.has_dropdown && (
                  <>
                     {menu.sub_menus && (
                        <ul className="submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                           {menu.sub_menus.map((sub_m, i) => (
                              <li key={i}>
                                 <Link href={sub_m.link} className={`${sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}`}>
                                    {sub_m.title}
                                 </Link>
                                 {sub_m.mega_menus && (
                                    <ul className="submenu" style={{ display: subNavTitle === sub_m.title ? "block" : "none", }}>
                                       {sub_m.mega_menus.map((mega_m, i) => (
                                          <li key={i}>
                                             <Link href={mega_m.link} className={`${mega_m.link && isSubMenuItemActive(mega_m.link) ? "active" : ""}`}>
                                                {mega_m.title}
                                             </Link>
                                          </li>
                                       ))}
                                    </ul>
                                 )}
                                 {sub_m.mega_menus && (<a
                                    className={`mean-expand ${subNavTitle === sub_m.title ? "mean-clicked" : ""}`}
                                    onClick={() => openMobileSubMenu(sub_m.title)}
                                    style={{ cursor: "pointer", fontSize: "18px" }}
                                 >
                                    <i className={subNavTitle === sub_m.title ? "fal fa-plus" : "fal fa-plus"}></i>
                                 </a>)}
                              </li>
                           ))}
                        </ul>
                     )}
                  </>
               )}
               {menu.sub_menus && (
                  <a
                     className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                     onClick={() => openMobileMenu(menu.title)}
                     style={{ cursor: "pointer", fontSize: "18px" }}
                  >
                     <i className={navTitle === menu.title ? "fal fa-plus" : "fal fa-plus"}></i>

                  </a>
               )}
            </li>
         ))}
      </ul>
   );
};

export default MobileMenu;
