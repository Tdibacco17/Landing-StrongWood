/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
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
                                <ul className="submenu">
                                    {menu.sub_menus.map((sub_m, i) => (
                                        <li key={i}>
                                            <Link href={sub_m.link} className={`${sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}`}>
                                                {sub_m.title}
                                            </Link>
                                            {sub_m.mega_menus && (
                                                <ul className="submenu">
                                                    {sub_m.mega_menus.map((mega_m, i) => (
                                                        <li key={i}>
                                                            <Link href={mega_m.link} className={`${mega_m.link && isSubMenuItemActive(mega_m.link) ? "active" : ""}`}>
                                                                {mega_m.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;
