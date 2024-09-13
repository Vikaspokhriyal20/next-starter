import Image from "next/image";
import Link from "next/link";
import styles from './blogpost.module.css'

const BlogPost = () => {
    const blogpost = [
        {
            postTitle: 'Mango Chutney',
            postImage: '/mango2.jpg',
            postDetails:'/blog/mango-chutney',
        },
        {
            postTitle: 'Coconut Chutney',
            postImage: '/coconut.jpg',
            postDetails:'/blog/coconut-chutney',
        },
        {
            postTitle: 'Garlic Chutney',
            postImage: '/garlic.jpg',
            postDetails:'/blog/garlic-chutney',
        },
        {
            postTitle: 'Tamarind Chutney',
            postImage: '/tamarind.jpg',
            postDetails:'/blog/tamarind-chutney',
        },{
            postTitle: 'Tomato Chutney',
            postImage: '/tomato.jpg',
            postDetails:'/blog/tomato-chutney',
        },{
            postTitle: 'Mint Chutney',
            postImage: '/mint.jpg',
            postDetails:'/blog/mint-chutney',
        },
    ];
  return (
    <>
          {
              blogpost.map((post) => {
                  return (
                      <div key={post.postTitle} className={styles.blogcard}>
                          <div className={styles.wrapper}>
                          <Image src={post.postImage} width={200} height={200} alt='img' className={styles.cardimg} />
                          <div className={styles.blogcontent}>
                          <h4>{post.postTitle}</h4>
                          <Link href={post.postDetails}>See More</Link> 
                          </div>
                          </div>
                      </div>
                  )
              })
      }
    </>
  )
}

export default BlogPost
