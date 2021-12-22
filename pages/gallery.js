import Link from 'next/link'
import PageTitle from '/components/title'
import StarField from '/components/star_field'

import styles from '../styles/Home.module.css'

export default function Gallery(){

  let t1 = 'Project'
  let t2 = 'Photos'

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
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/riss"><a>About</a></Link>
        </aside>

      </main>
    </div>
    </StarField>
  )
}
