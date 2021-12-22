import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Contact(){

  return(
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.titleHolder}>
          <h1 className={styles.title}>Contact<span className={styles.title2}>Us</span></h1>
        </div>

        <article className={styles.contactbox}>
          <section className={styles.contactLink}>
            <a className={styles.block} target="blank" href="https://www.instagram.com/rooni_corn_designs/">
              <Image
              src="/images/icons/insta.png"
              layout='intrinsic'
              height={140}
              width={140}
              alt="image of handmade wooden watchbox in walnut"
              rel="preload"
              />
            @rooni_corn_designs
            </a>
          </section>

          <section className={styles.contactLink}>
            <a className={styles.block} target="blank" href="mailto: roonicorn.info@gmail.com">
              <Image
              src="/images/icons/email.png"
              layout='intrinsic'
              height={140}
              width={140}
              alt="image of handmade wooden watchbox in walnut"
              rel="preload"
              />
            email roonicorn.info
            </a>
          </section>
        </article>
        <aside className={styles.linkHolder}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/gallery"><a>Gallery</a></Link>
          <Link href="/riss"><a>About</a></Link>
        </aside>

      </main>
    </div>
  )
}
