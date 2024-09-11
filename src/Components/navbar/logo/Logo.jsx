import Link from 'next/link'
import styles from './logo.module.css'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className={styles.logo}>
          <Link href='/'>
          <Image src='/Namakwali.avif' alt='namakwali' width={80} height={40}/>
          </Link>
    </div>
  )
}

export default Logo
