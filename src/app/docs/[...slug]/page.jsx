'use client';

import { useRouter } from 'next/navigation'
import styles from './docs.module.css'
import Image from 'next/image';

const DocsDetails = ({ params }) => {
  const Router = useRouter();

  const handleRouter = () => {
    Router.back();
  }
  return (
    <div className='container'>
      <Image src='/Namakwali.avif' alt='namakwali' width={80} height={40}/>
      <p>This is Docs {params.slug}</p>
      <button className={styles.btn} onClick={handleRouter}>previous</button>
    </div>
  )
}

export default DocsDetails
