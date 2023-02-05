
import classes from './hero.module.css'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/mypic.jpg" alt="my img" width={200} height={250} />
        </div>
        <h1>Hii, I'm Saphal</h1>
        <p>I blog about web dev - especialy frontend frameworks like react</p>

    </section>
  )
}

export default Hero