import Link from 'next/link'
import Image from 'next/image'
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
      <section className={styles.galleryBox}>
      <div>
      <Image src="/images/tree.png"
      layout='intrinsic'
      height={600}
      width={550}
      alt="image of handmade wooden watchbox in walnut"
      rel="preload"/>
      </div>
      <div>
      <Image src="/images/tp_tower.png"
      layout='intrinsic'
      height={700}
      width={550}
      alt="image of handmade wooden watchbox in walnut"
      rel="preload"/>
      </div>
      <div>
      <Image src="/images/working.png"
      layout='intrinsic'
      height={550}
      width={550}
      alt="image of handmade wooden watchbox in walnut"
      rel="preload"/>
      </div>
      <div>
      <Image src="/images/snowmen.JPG"
      layout='intrinsic'
      height={550}
      width={550}
      alt="image of handmade wooden watchbox in walnut"
      rel="preload"/>
      </div>
      <div>
      <Image src="/images/frame_inlay.png"
      layout='intrinsic'
      height={550}
      width={550}
      alt="image of handmade wooden watchbox in walnut"
      rel="preload"/>
      </div>

      </section>

        <aside className={styles.linkHolder}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/riss"><a>About</a></Link>
        </aside>

      </main>
    </div>
  )
}
