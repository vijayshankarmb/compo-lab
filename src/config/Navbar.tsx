interface NavItem {
    label: string
    href: string
}

export const NavbarConfig = {
    logo: {
        src: "",
        alt: "Logo",
    }, 
    navItems: [
        {
            label: "Features",
            href: "/features"
        }, 
        {
            label: "Pricing",
            href: "/pricing"
        },
        {
            label: "About",
            href: "/about"
        }
    ] as NavItem[],
};