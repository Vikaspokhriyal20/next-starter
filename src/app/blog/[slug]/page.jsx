import React from 'react'

const page = ({ params }) => {
  return (
    <div className='container h-80'>
      <p>Frist Blog Post : {params.slug}</p>
    </div>
  )
}

export default page
