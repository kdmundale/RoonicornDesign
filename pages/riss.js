import Link from 'next/link'
import PageTitle from '/components/title'
import StarField from '/components/star_field'

import styles from '../styles/Home.module.css'

export default function Riss(){

  let t1 = "Roonicorn"
  let t2 = "Story"

  return(
    <StarField>
    <div className={styles.container}>
      <main className={styles.main}>
      <PageTitle>
      {t1}
      {t2}
      </PageTitle>

        <aside className={styles.linkHolder}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/gallery"><a>Gallery</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </aside>

      </main>
    </div>
    </StarField>
  )
}
