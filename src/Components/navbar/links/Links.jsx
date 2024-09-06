import Link from 'next/link';
import React from 'react'

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Docs",
            path: "/docs"
        },
    ];

    return (
        <>
            {links.map((link => (
                <Link key={link.title} href={link.path}>{link.title}</Link>
            )))}
        </>
    )
}

export default Links
