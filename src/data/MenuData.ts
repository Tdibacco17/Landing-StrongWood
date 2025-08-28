
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
        mega_menus?: {
            link: string;
            title: string;
        }[];
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/", title: "Home One" },
            { link: "/home-two", title: "Home Two" },
            { link: "/home-three", title: "Home Three" },
            { link: "/dark-home", title: "Home Dark" },
        ],
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "/about",
    },
    {
        id: 3,
        title: "Services",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/services", title: "Services" },
            { link: "/services-details", title: "Services Details" },
        ],
    },
    {
        id: 4,
        title: "Pages",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            {
                link: "#",
                title: "Projects",
                mega_menus: [
                    {
                        title: "Projects",
                        link: "/projects",
                    },
                    {
                        title: "Projects Details",
                        link: "/project-details",
                    }
                ],
            },
            { link: "/team", title: "Team" },
            { link: "/team-details", title: "Team Details" },
            { link: "/faq", title: "Faq's" },
            { link: "/not-found", title: "Error Page" },
        ],
    },
    {
        id: 5,
        title: "Blog",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/blog-standard", title: "Blog Default" },
            { link: "/blog-grid", title: "Blog Grid" },
            { link: "/blog-details", title: "Blog Details" },
        ],
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;