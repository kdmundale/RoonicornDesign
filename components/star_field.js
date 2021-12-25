import styles from '../styles/glitter.module.css'
import Stars from './stars'
import Head from 'next/head'
import Image from 'next/image'

//function to export star field as function for different pages in profile
export default function StarField({ children, home }){

//create array of star objects
  const allStars = Stars()

//function to assign class to star based on index in array
  function whichStar(d, idx){
    if(idx <8){
    return (<div key={idx} id={d.id} className={styles.star_1}></div>)
    } else if (idx>7 && idx<17) {
    return (<div key={idx} id={d.id} className={styles.star_2}></div>)
    } else if (idx >16 && idx<25) {
    return (<div key={idx} id={d.id} className={styles.star_3}></div>)
    } else {
    return (<div key={idx} id={d.id} className={styles.star_4}></div>)
    }
  }

  return(
    <div className={styles.container}>
    <div className={styles.cloud}>
    <Image
    src="/clouds.png"
    layout='intrinsic'
    height={500}
    width={800}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"
    />
    </div>
    <div className={styles.cloud2}>
    <Image
    src="/clouds.png"
    layout='intrinsic'
    height={300}
    width={600}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"
    />
    </div>
    <div className={styles.cloud3}>
    <Image
    src="/clouds.png"
    layout='intrinsic'
    height={200}
    width={400}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"
    />
    </div>
    {allStars.map(function(d, idx){
       return whichStar(d,idx)
     })}
    <main>{children}</main>
    </div>
  )
}
