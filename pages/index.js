import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MyCarousel from '/components/carousel'
import PageTitle from '/components/title'
import Footer from '/components/footer'

import styles from '../styles/Home.module.css'

export default function Home() {

  let t1 = 'Roonicorn'
  let t2 = 'Designs'
  let blurb = "Roonicorn Designs, operated by Adam Smerick, specializes in handmade wooden crafts including custom displays and cases, shelving, decorations, signs, and much more!"
  let qb = "With over 20 years of woodworking experience, Adam works with you to bring custom pieces into your home."
  return (
    <div className={styles.container}>
      <Head>
        <title>Roonicorn Design</title>
        <meta name="description" content="Roonicorn Designs Home Page" />
        <link rel="icon" href="/favicon.ico"/>
        <meta name="google-site-verification" content="nFyDox2__5-SddrNVAhPKfsBfuPFekARjktQC6UMTDw" />
      </Head>

      <article className={styles.uni}>
      <div className={styles.tools}>

      </div>

      <div className={styles.tools1}>

      </div>

        <PageTitle>
        {t1}
        {t2}
        </PageTitle>

        <div className={styles.unibox}>

          <h2 className={styles.description}>
            Custom<span>Woodcrafts</span>
          </h2>
        </div>

        <MyCarousel/>

        <section className={styles.about}>
        <p>{blurb}</p>
        <p>{qb}</p>
        </section>

        <section className={styles.grid}>
          <Link href="/about_Roonicorn">
          <a>
          <h2>About<span>Roonicorn</span></h2>
          </a>
          </Link>
          <Link href="/projects">
          <a>
            <h2>Project<span>Photos</span></h2>
          </a>
          </Link>
          <Link href="/contact">
          <a>
            <h2>Contact<span>Roonicorn</span></h2>
          </a>
          </Link>
        </section>

            </article>
              <Footer/>
    </div>
  )
}
