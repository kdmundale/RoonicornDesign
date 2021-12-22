import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {

  let quote ="Named after his daughter Marissa's favorite animal, the unicorn, and inspired by her strength through her cancer journey, Roonicorn Designs was started by Adam Smerick after her diagnosis."
  return (
    <div className={styles.container}>
      <Head>
        <title>Roonicorn Design</title>
        <meta name="description" content="Roonicorn Designs Home Page" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.titleHolder}>
        <h1 className={styles.title}>
          Roonicorn<span className={styles.title2}>Designs</span>
        </h1>
        </div>
        <p className={styles.description}>
          Custom Woodcrafts and Furniture
        </p>
        <a className={styles.block} target="blank" href="https://www.instagram.com/rooni_corn_designs/">
        <span id={styles.ig_icon}></span>
        @rooni_corn_designs
        </a>

        <Image
        src="/images/watchbox3.jpg"
        layout='intrinsic'
        height={450}
        width={600}
        alt="image of handmade wooden watchbox in walnut"
        rel="preload"
        />

        <section className={styles.about}>

        <h3>Roonicorn</h3>

        <p>{quote}</p>
        </section>

        <div className={styles.grid}>
          <Link href="/riss">
          <a>
          <h2>About Marissa</h2>
          </a>
          </Link>
          <Link href="/gallery">
          <a>
            <h2>Project Photos</h2>
          </a>
          </Link>
          <Link href="/contact">
          <a>
            <h2>Contact Roonicorn</h2>
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
