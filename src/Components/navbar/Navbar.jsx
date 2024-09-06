import React from 'react'
import Links from './links/Links'

const Navbar = () => {
  return (
    <nav>
      <div className='container flex'>
        <div><p>Logo</p></div>
        <div className='link-gap'>
         <Links/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
