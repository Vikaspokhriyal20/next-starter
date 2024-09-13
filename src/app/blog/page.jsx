
import styles from './blog.module.css'
import BlogPost from "@/Components/blogpost/BlogPost"

const Blog = () => {
    return (
      <section className={styles.blogcontainer}>
        <div className={styles.gridcontainer}>
          <BlogPost/>
       </div>
      </section>
    )
  }
  
  export default Blog