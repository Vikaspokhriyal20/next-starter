"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import styles from './menu.module.css'

const Menu = () => {
    const [open, setOpen] = useState(false);

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
        <div>
            <Image
                className={styles.menuButton}
                width={30}
                height={30}
                src='/iconmenu.svg'
                alt='menu'
                onClick={() => setOpen((prev) => !prev)}
            />

            {
                open && (
                    <div className={styles.mobileLink}>
                        {links.map((link) => (
                            <Link key={link.title} href={link.path}>{link.title}</Link>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Menu
