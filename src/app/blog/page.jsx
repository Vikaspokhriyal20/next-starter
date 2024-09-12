import Image from "next/image"
import styles from './blog.module.css'
import Link from "next/link"

const Blog = () => {
    return (
      <section className={styles.blogcontainer}>
        <h2>Blog</h2>
        <p>Indian Homemade Recipes</p>

        <div className={styles.gridcontainer}>
          <div className={styles.blogcard}>
              <Image className={styles.cardimg} src='/mint.jpg' width={200} height={200} />
            <h4>Mint Chutney</h4>
            <Link href='/blog/mint-chutney'>See the Recipe</Link>
          </div>
          <div className={styles.blogcard}>
              <Image className={styles.cardimg} src='/coconut.jpg' width={200} height={200} />
            <h4>Coconut Chutney</h4>
            <Link href='/blog/coconut-chutney'>See the Recipe</Link>
          </div>
          <div className={styles.blogcard}>
          <Image className={styles.cardimg} src='/tamarind.jpg' width={200} height={200} />
            <h4>Tamarind Chutney</h4>
            <Link href='/blog/tamarind-chutney'>See the Recipe</Link>
          </div>
          <div className={styles.blogcard}>
            <Image className={styles.cardimg} src='/mango2.jpg' width={200} height={200} />
            <h4>Green Mango Chutney</h4>
            <Link href='/blog/green-mango chutney'>See the Recipe</Link>
          </div>
          <div className={styles.blogcard}>
          <Image className={styles.cardimg} src='/garlic.jpg' width={200} height={200} />
            <h4>Garlic Chutney</h4>
            <Link href='/blog/garlic-chutney'>See the Recipe</Link>
          </div>
          <div className={styles.blogcard}>
          <Image className={styles.cardimg} src='/tomato.jpg' width={200} height={200} />
            <h4>Tomato Chutney</h4>
            <Link href='/blog/tomato-chutney'>See the Recipe</Link>
          </div>
       </div>
      </section>
    )
  }
  
  export default Blog