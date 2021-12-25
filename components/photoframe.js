import React, { Component } from 'react';
import Image from 'next/image'

import styles from '../styles/Photo.module.css'

export default function PhotoFrame({children}){
  let text=children[1]
  let quote = children[0]
  let text1=children[2]
  let text2=children[3]
  let text3=children[4]
  let text4=children[5]
  let text5=children[6]
  let text6=children[7]

  console.log(children)
  console.log("!!!!!!!!!!!!!!!!!!")

  return(
    <article className={styles.main}>
    <h2>{quote}</h2>
    <div className={styles.adam}>
      <div>
      <Image src="/images/Riss/AdamRiss.png"
      layout='intrinsic'
      height={400}
      width={275}
      alt=""
      rel="preload"/>
      </div>
    <p>{text}</p>
    </div>
    <div className={styles.hair}>
    <div>
      <Image src="/images/Riss/hair.png"
      layout='intrinsic'
      height={300}
      width={300}
      alt="image of handmade wooden watchbox in walnut"
      rel="preload"/>
      </div>
    <p>{text1}</p>
    </div>
    <div className={styles.silly}>
    <div>
      <Image src="/images/Riss/silly.png"
      layout='intrinsic'
      height={350}
      width={275}
      alt="image of handmade wooden watchbox in walnut"
      rel="preload"/>
      </div>
    <p>{text2}</p>
    </div>

    <div className={styles.hospital}>
    <div>
    <Image src="/images/Riss/hospital.png"
    layout='intrinsic'
    height={225}
    width={350}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    </div>
    <p>{text3}</p>
    </div>
    <div className={styles.parasail}>
    <div>
    <Image src="/images/Riss/parasail.png"
    layout='intrinsic'
    height={300}
    width={300}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    </div>
    <p>{text4}</p>
    </div>
    <div className={styles.beach}>
    <div>
    <Image src="/images/Riss/beach.png"
    layout='intrinsic'
    height={350}
    width={475}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    </div>
    <p>{text5}</p>
    </div>
    <div className={styles.treatment1}>
    <div>
    <Image src="/images/Riss/treatment1.png"
    layout='intrinsic'
    height={300}
    width={300}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    </div>
    <p>{text6}</p>
    </div>
    </article>
  )
}
