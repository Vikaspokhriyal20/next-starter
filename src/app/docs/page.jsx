import Link from 'next/link'
import React from 'react'

const page = () => {

  return (
    <div className='container'>
      <p>Docs</p>
      <ul>
        <li>
          <Link href={'/docs/1'}>Docs-1</Link>
        </li>
        <li>
          <Link href={'/docs/2'}>Docs-2</Link>
        </li>
        <li>
          <Link href={'/docs/3'}>Docs-3</Link>
        </li>
        <li>
          <Link href={'/docs/next.js'}>Docs-4</Link>
        </li>
      </ul>
    </div>
  )
}

export default page
