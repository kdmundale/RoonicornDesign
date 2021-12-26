import Link from 'next/link'
import PageTitle from '/components/title'
import StarField from '/components/star_field'
import Footer from '/components/footer'
import PhotoFrame from '/components/photoframe'
import Image from 'next/image'


import styles from '../styles/Home.module.css'

export default function Riss(){

  let t1 = "Roonicorn"
  let t2 = "Story"

  let quote = "There is this girl who stole my heart. She calls me Daddy."
  let text="In December of 2018, at the age of 8, Adam's daughter Marissa was diagnosed with neuroblastoma, a very serious pediatric cancer that starts in immature nerve cells."
  let text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text5="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text6="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return(
    <main className={styles.main}>
    <PageTitle>
    {t1}
    {t2}
    </PageTitle>
    <StarField>

    <PhotoFrame>
    {quote}{text}{text1}{text2}{text3}{text4}{text5}{text6}
    </PhotoFrame>
    <div className={styles.container}>

      <article className={styles.contactbox}>
      <section className={styles.contactLink}>
        <a className={styles.block} target="blank" href="https://www.facebook.com/Myroonicorn/">
          <Image
          src="/images/icons/fb_icon.png"
          layout='intrinsic'
          height={80}
          width={80}
          alt="Facebook icon"
          rel="preload"
          />
        <p>MyRoonicorn Page</p>
        </a>
      </section>
        <section className={styles.contactLink}>
        <a className={styles.block} target="blank" href="https://www.fourdiamonds.org/get-involved/">
          <Image
          src="/images/icons/4_dia.png"
          layout='intrinsic'
          height={90}
          width={120}
          alt="Four Diamonds Foundation icon"
          rel="preload"
          />
        <p>Four Diamonds Fund</p>
        </a>
      </section>
      <section className={styles.contactLink}>
      <a className={styles.block} target="blank" href="https://cancer.psu.edu/pediatric-services">
        <Image
        src="/images/icons/hershey.png"
        layout='intrinsic'
        height={80}
        width={210}
        alt="Penn State icon"
        rel="preload"
        />
      <p>Penn State Cancer Institute</p>
      </a>
    </section>
      <section className={styles.contactLink}>
      <a className={styles.block} target="blank" href="https://www.chop.edu/cccr">
        <Image
        src="/images/icons/chop.png"
        layout='intrinsic'
        height={100}
        width={100}
        alt="Childrens Hospital of Philadelphia icon"
        rel="preload"
        />
      <p>Childrens Hospital of Philadelphia</p>
      </a>
    </section>
    <section className={styles.contactLink}>
    <a className={styles.block} target="blank" href="https://pcrf-kids.org/">
      <Image
      src="/images/icons/pcrf_logo.png"
      layout='intrinsic'
      height={90}
      width={230}
      alt="Pediatric cancer reaserch foundation icon"
      rel="preload"
      />
    <p>Pediatric Cancer Reaserch Foundation</p>
    </a>
  </section>

      </article>
        <aside className={styles.linkHolder}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/projects"><a>Projects</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </aside>


      <Footer/>
    </div>
    </StarField>
    </main>
  )
}
