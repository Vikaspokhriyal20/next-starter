import Link from 'next/link'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
          <Link href='/'>
           Logo
          </Link>
    </div>
  )
}

export default Logo
