import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MyCarousel from '/components/carousel'

import styles from '../styles/Home.module.css'

export default function Home() {

  let quote ="Started by Adam Smerick after his daughter's childhood cancer diagnosis, Roonicorn Designs is named after Marissa's favorite animal, the unicorn, and inspired by her strength through treatment."
  return (
    <div className={styles.container}>
      <Head>
        <title>Roonicorn Design</title>
        <meta name="description" content="Roonicorn Designs Home Page" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.uni}>

        <div className={styles.titleHolder}>
        <h1 className={styles.title}>
          Roonicorn<span className={styles.title2}>Designs</span>
        </h1>
        </div>

        <div className={styles.unibox}>
        <Image src="/unicorn1.gif"
        layout='intrinsic'
        height={130}
        width={100}
        alt="image of handmade wooden watchbox in walnut"
        rel="preload"/>
        <p className={styles.description}>
          Custom<span>Woodcrafts</span>
        </p>
        </div>

        <MyCarousel/>

        <section className={styles.about}>

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
  )
}
