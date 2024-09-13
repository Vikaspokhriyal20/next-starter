import Image from "next/image"
import styles from './blog.module.css'
import BlogPost from "@/Components/blogpost/BlogPost"

const Blog = () => {
    return (
      <section className={styles.blogcontainer}>
        <h2>Blog</h2>
        <p>Indian Homemade Recipes</p>

        <div className={styles.gridcontainer}>
          <BlogPost/>
       </div>
      </section>
    )
  }
  
  export default Blog