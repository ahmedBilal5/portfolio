import Link from "next/link";

interface NavItemProps {
    title: string,
    href: string
}


const NavBar =  () => {
    const navItems = [
        {
        title: 'Works',
        href: '',
        },
        {
        title: 'Blog',
        href: '',
        },
        {
        title: 'Contact',
        href: '',
        },
    ];
    return   (
        <div className="mt-3.5 md:mb-18.5 mb-9 h-7 flex flex-row justify-end gap-8 ">
            {
                navItems.map((navItem) => (
                    <Link key={navItem.title} href={navItem.href} className="text-slate-800 text-lg font-medium cursor-pointer hover:text-red-400">
                        {navItem.title}
                    </Link>
                ))
            }
            
        </div>
)
}
export default NavBar;