"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = () => {
    const pathname = usePathname();

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Docs",
            path: "/docs",
        },
    ];

    return (
        <>
            {
                links.map((link) => {
                    return (
                        <Link className={pathname === link.path ? "active" : ''}
                            key={link.title} href={link.path}>{link.title}
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Links
