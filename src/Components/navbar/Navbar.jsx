import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Logo from './logo/Logo'
import Menu from './menu/Menu'

const Navbar = () => {

  return (
    <nav>
      <div className='container flex'>
        <Logo />
        <div className={styles.links}>
          <Links />
        </div>
        <div className={styles.smallscreen}>
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
