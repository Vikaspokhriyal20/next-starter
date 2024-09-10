'use client';

import { useRouter } from 'next/navigation'
import styles from './docs.module.css'

const DocsDetails = ({ params }) => {
  const Router = useRouter();

  const handleRouter = () => {
    Router.back();
  }
  return (
    <div className='container'>
      <p>This is Docs {params.slug}</p>
      <button className={styles.btn} onClick={handleRouter}>previous</button>
    </div>
  )
}

export default DocsDetails
