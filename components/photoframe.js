import React, { Component } from 'react';
import Image from 'next/image'

import styles from '../styles/Photo.module.css'

export default function PhotoFrame({children}){

  return(
    <article className={styles.main}>
    <div className={styles.adam}>
      <Image src="/images/Riss/AdamRiss.png"
      layout='intrinsic'
      height={400}
      width={275}
      alt=""
      rel="preload"/>
    <p>{text}</p>
    </div>
    <div className={styles.hair}>
      <Image src="/images/Riss/hair.png"
      layout='intrinsic'
      height={300}
      width={300}
      alt="image of handmade wooden watchbox in walnut"
      rel="preload"/>
    <p>{text1}</p>
    </div>
    <div className={styles.silly}>
      <Image src="/images/Riss/silly.png"
      layout='intrinsic'
      height={350}
      width={275}
      alt="image of handmade wooden watchbox in walnut"
      rel="preload"/>
    <p>{text2}</p>
    </div>

    <div className={styles.hospital}>
    <Image src="/images/Riss/hospital.png"
    layout='intrinsic'
    height={225}
    width={350}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text3}</p>
    </div>
    <div className={styles.parasail}>
    <Image src="/images/Riss/parasail.png"
    layout='intrinsic'
    height={300}
    width={300}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text4}</p>
    </div>
    <div className={styles.beach}>
    <Image src="/images/Riss/beach.png"
    layout='intrinsic'
    height={350}
    width={475}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text5}</p>
    </div>
    <div className={styles.treatment1}>
    <Image src="/images/Riss/treatment1.png"
    layout='intrinsic'
    height={300}
    width={300}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text6}</p>
    </div>
    </article>
  )
}
