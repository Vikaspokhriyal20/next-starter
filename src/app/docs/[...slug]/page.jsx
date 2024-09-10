'use client';

import { useRouter } from 'next/navigation'
import styles from './docs.module.css'

const page = ({ params }) => {
  const router = useRouter();

  const handleRouter = () => {
    router.back();
  }
  return (
    <div className='container'>
      <p>This is Docs {params.slug}</p>
      <button className={styles.btn} onClick={handleRouter}>previous</button>
    </div>
  )
}

export default page
