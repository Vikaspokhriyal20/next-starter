
import Link from 'next/link'
import styles from './logo.module.css'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className={styles.logo}>
          <Link href='/'>
            <Image width={40} height={40} src='/logoicon2.png' alt='logo'/>
          </Link>
    </div>
  )
}

export default Logo
