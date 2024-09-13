'use client'
import { useRouter } from 'next/navigation'
import styles from './blogdetail.module.css'


const BlogDetails = ({ params }) => {
  console.log(params.slug);
  const router = useRouter();

  const handleForward = () => {
    router.back();
  }
  return (
    <div className='container'>
      <p className={styles.titletext}> Blog Details : <kbd className={styles.recipetext}>{params.slug}</kbd></p>
      <button className='btn' onClick={handleForward}>Go Back</button>
    </div>
  )
}

export default BlogDetails
