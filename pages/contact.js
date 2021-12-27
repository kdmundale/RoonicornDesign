import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '/components/title'
import Footer from '/components/footer'
import StarField from '/components/star_field'

import styles from '../styles/Home.module.css'

export default function Contact(){

  let t1 = 'Contact'
  let t2 ='Us'

  return(
    <div className={styles.container}>
    <Head>
      <title>Contact Roonicorn Designs</title>
      <meta name="description" content="Roonicorn Designs Contact Page" />
    </Head>
      <article className={styles.main}>
      <PageTitle>
      {t1}
      {t2}
      </PageTitle>

      <div className={styles.tools}>

      </div>

      <div className={styles.tools1}>

      </div>

        <article className={styles.contactbox}>
          <section className={styles.contactLink}>
            <a className={styles.block} target="blank" href="https://www.instagram.com/rooni_corn_designs/">
              <Image
              src="/images/icons/ig_icon.png"
              layout='intrinsic'
              height={80}
              width={80}
              alt="Instagram icon"
              rel="preload"
              />
            <p>rooni_corn_designs</p>
            </a>
          </section>

          <section className={styles.contactLink}>
            <a className={styles.block} target="blank" href="mailto: roonicorn.info@gmail.com">
              <Image
              src="/images/icons/email_icon.png"
              layout='intrinsic'
              height={80}
              width={80}
              alt="Email icon"
              rel="preload"
              />
            <p>roonicorn.info</p>
            </a>
          </section>

          <section className={styles.contactLink}>
            <a className={styles.block} target="blank" href="https://www.facebook.com/adam.smerick">
              <Image
              src="/images/icons/fb_icon.png"
              layout='intrinsic'
              height={80}
              width={80}
              alt="Facebook icon"
              rel="preload"
              />
            <p>Adam Smerick</p>
            </a>
          </section>
        </article>
        <aside className={styles.linkHolder}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/projects"><a>Projects</a></Link>
          <Link href="/about_Roonicorn"><a>About</a></Link>
        </aside>

      </article>
      <Footer/>
    </div>
  )
}
