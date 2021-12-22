import Link from "next/link"

import styles from '../styles/Home.module.css'

export default function Contact(){

  return(
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.titleHolder}>
          <h1 className={styles.title}>Contact<span className={styles.title2}>Us</span></h1>
        </div>

        <aside className={styles.linkHolder}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/gallery"><a>Gallery</a></Link>
          <Link href="/riss"><a>About</a></Link>
        </aside>

      </main>
    </div>
  )
}
