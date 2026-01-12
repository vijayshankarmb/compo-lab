interface NavItem {
    label: string
    href: string
}

export const NavbarConfig = {
    logo: {
        src: "/next.svg",
        alt: "Next Logo",
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