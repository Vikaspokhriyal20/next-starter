import React from 'react'
import styles from './docs.module.css'

const layout = ({children}) => {
  return (
      <div className={styles.container}>
          <p className={styles.title}>Docs Details</p>
          {children}
    </div>
  )
}

export default layout
