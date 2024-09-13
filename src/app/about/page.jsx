import Image from "next/image";
import styles from './about.module.css'

export const metadata = {
  title: "About Page",
};

const About = () => {
  return (
    <section className={styles.aboutcontainer}>
      <center>
      <h4>Our Story</h4>
      </center> 
      <Image
        src='/mint.jpg'
        width={600}
        height={300}
        alt="image"
        className={styles.aboutbanner}
      />
      <div className={styles.storycontent}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi quos esse delectus mollitia ipsum saepe consequuntur amet dolor, expedita sit porro dolorem at molestias!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum culpa ad.</p>
  
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda veniam obcaecati fugit debitis dolore perferendis ratione itaque quisquam, nisi vero fugiat. Alias, ullam. Dicta expedita doloribus quos culpa officiis cumque?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, enim odit? Quod soluta minus eligendi ab.</p>
     
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum incidunt adipisci ut blanditiis nulla exercitationem fuga aliquid, odio reiciendis, aperiam quaerat veniam officiis sint aliquam cumque rerum deserunt eos dolores soluta delectus. Repellendus dolorum odit excepturi quaerat doloribus consequatur.</p>
      </div>

      <div className={styles.rating}>
        <kbd>😇</kbd>
        <kbd>😎</kbd>
        <kbd>😃</kbd>
        <kbd>🙂</kbd>
      </div>
    </section>
  )
}

export default About
