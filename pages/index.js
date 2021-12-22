import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MyCarousel from '/components/carousel'
import PageTitle from '/components/title'
import StarField from '/components/star_field'

import styles from '../styles/Home.module.css'

export default function Home() {

  let t1 = 'Roonicorn'
  let t2 = 'Designs'
  let blurb = "Roonicorn Designs specializes in handmade wooden crafts including custom displays and cases, shelving, decorations, signs, and much more!"
  let quote ="Started by Adam Smerick after his daughter's childhood cancer diagnosis, Roonicorn Designs is named after Marissa's favorite animal, the unicorn, and inspired by her strength through treatment."
  return (
    <StarField>
    <div className={styles.container}>
      <Head>
        <title>Roonicorn Design</title>
        <meta name="description" content="Roonicorn Designs Home Page" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.uni}>

        <PageTitle>
        {t1}
        {t2}
        </PageTitle>

        <div className={styles.unibox}>

          <p className={styles.description}>
            Custom<span>Woodcrafts</span>
          </p>
        </div>

        <MyCarousel/>

        <section className={styles.about}>
        <p>{blurb}</p>
        <p>{quote}</p>
        </section>

        <div className={styles.grid}>
          <Link href="/riss">
          <a>
          <h2>About<span>Marissa</span></h2>
          </a>
          </Link>
          <Link href="/gallery">
          <a>
            <h2>Project<span>Photos</span></h2>
          </a>
          </Link>
          <Link href="/contact">
          <a>
            <h2>Contact<span>Roonicorn</span></h2>
          </a>
          </Link>
        </div>

      </main>

      <footer className={styles.footer}>
      <p>page built and maintained by <a target="blank" href="https://kdmundale.com">kdmundale.com</a> Copywrite 2021</p>
      </footer>
    </div>
    </StarField>
  )
}
