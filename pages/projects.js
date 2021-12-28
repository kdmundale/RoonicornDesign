import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import PageTitle from '/components/title'
import Footer from '/components/footer'

import styles from '../styles/Home.module.css'

export default function Gallery(){

  let t1 = 'Project'
  let t2 = 'Photos'

  return(
    <div className={styles.container}>
    <Head>
      <title>Roonicorn Designs Projects</title>
      <meta name="description" content="Roonicorn Designs Projects Page" />
    </Head>
      <article className={styles.main}>

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
      <Image src="/images/watchbox2.JPG"
      layout='intrinsic'
      height={650}
      width={650}
      alt="oak watch-box from the side, featuring mable inlays at the corners"
      rel="preload"/>
      <p>Custom oak watch-box, featuring maple felted interior, magnetic lid close, maple inlays at the corners, glass top, and fine brushed nickel hardware.</p>
      </div>

      <div>
      <Image src="/images/marble_run.png"
      layout='intrinsic'
      height={850}
      width={650}
      alt="Custom marble run made of oak, maple, and purple heart wood"
      rel="preload"/>
      <p>Maple, oak, & purple heart wood marble run. Features dark gray metallic resin custom inlays</p>
      </div>

      <div>
      <Image src="/images/tree.png"
      layout='intrinsic'
      height={700}
      width={650}
      alt="rustic wood christmas tree sillouette decoration filled with fairy lights"
      rel="preload"/>
      <p>Holliday tree decorative piece. Rustic dark stain finish, fairy lights for perfect lighting and charm.</p>
      </div>

      <div>
      <Image src="/images/working.png"
      layout='intrinsic'
      height={650}
      width={650}
      alt="view of woorbench closeup, including tools and wood glue"
      rel="preload"/>
      </div>

      <div>
      <Image src="/images/watchbox3.jpg"
      layout='intrinsic'
      height={500}
      width={650}
      alt="image of handmade wooden watch-box in walnut"
      rel="preload"/>
      <p>Custom mahogany watch-box with maple felted interior, inlays, magnetic close and fine brass hardware.</p>
      </div>

      <div>
      <Image src="/images/snowmen.JPG"
      layout='intrinsic'
      height={650}
      width={650}
      alt="rustic snowmen holiday lanterns"
      rel="preload"/>
      <p>Rustic holiday wooden snowman cutout lanterns, can be done with custom patterns and many finishes.</p>
      </div>

      <div>
      <Image src="/images/frame_inlay.png"
      layout='intrinsic'
      height={650}
      width={650}
      alt="view of oak photframe corner, showing purpleheart wood inlays"
      rel="preload"/>
      <p>Custom fit oak frame with purple heart inlay details.</p>
      </div>
      </section>

        <aside className={styles.linkHolder}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/about_Roonicorn"><a>About</a></Link>
        </aside>

      </article>
      <Footer/>
    </div>
  )
}
