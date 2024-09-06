import React from 'react'

const page = ({params}) => {
  return (
    <div className="container">
      <p> Blog Post -  {params.slug} Blog Review - {params.reviewsId}</p>
    </div>
  )
}

export default page
