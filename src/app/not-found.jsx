import Link from 'next/link'
import React from 'react'

const notfound = () => {
  return (
    <div className='container'>
          <center>
          <p>Page is Not found</p>
          <Link href={'/'} className='go-to-home'>GO TO HOME PAGE</Link>
          </center> 
    </div>
  )
}

export default notfound
