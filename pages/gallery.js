import Link from 'next/link'
import PageTitle from '/components/title'

import styles from '../styles/Home.module.css'

export default function Gallery(){

  let t1 = 'Project'
  let t2 = 'Photos'

  return(
    <div className={styles.container}>
      <main className={styles.main}>

      <PageTitle>
      {t1}
      {t2}
      </PageTitle>
      <div className={styles.tools}>

      </div>

      <div className={styles.tools1}>

      </div>

        <aside className={styles.linkHolder}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/riss"><a>About</a></Link>
        </aside>

      </main>
    </div>
  )
}
