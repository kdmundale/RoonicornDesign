import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Gallery(){

  return(
    <div className={styles.container}>
    <main className={styles.main}>

    <div className={styles.titleHolder}>
    <h1 className={styles.title}>Project<span className={styles.title2}>Photos</span></h1>
    </div>

    <Link href="/"><a>Home</a></Link>

    </main>
    </div>
  )
}
