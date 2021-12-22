import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Riss(){

  return(
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.titleHolder}>
          <h1 className={styles.title}>Roonicorn<span className={styles.title2}>Story</span></h1>
        </div>

        <aside className={styles.linkHolder}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/gallery"><a>Gallery</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </aside>
        
      </main>
    </div>
  )
}
