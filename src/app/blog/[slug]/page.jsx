'use client'
import { useRouter } from 'next/navigation'


const BlogDetails = ({ params }) => {
  const router = useRouter();

  const handleForward = () => {
    router.back();
  }
  return (
    <div className='container'>
      <p>Frist Blog Post : {params.slug}</p>
      <button className='btn' onClick={handleForward}>Go Back</button>
    </div>
  )
}

export default BlogDetails
