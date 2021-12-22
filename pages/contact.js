import Link from "next/link"

import styles from '../styles/Home.module.css'

export default function Contact(){

  return(
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.titleHolder}>
          <h1 className={styles.title}>Roonicorn<span className={styles.title2}>Contact</span></h1>
        </div>

        <Link href="/"><a>Home</a></Link>

        </main>
    </div>
  )
}
