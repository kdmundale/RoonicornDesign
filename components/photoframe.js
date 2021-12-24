import React, { Component } from 'react';
import Image from 'next/image'


import styles from '../styles/Photo.module.css'


export default function PhotoFrame({children}){

  let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text5="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text6="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return(
    <article className={styles.main}>
    <div className={styles.adam}>
    <Image src="/images/AdamRiss.png"
    layout='intrinsic'
    height={400}
    width={275}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text}</p>
    </div>
    <div className={styles.hair}>
    <Image src="/images/hair.png"
    layout='intrinsic'
    height={300}
    width={300}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text1}</p>
    </div>
    <div className={styles.silly}>
    <Image src="/images/silly.png"
    layout='intrinsic'
    height={350}
    width={275}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text2}</p>
    </div>

    <div className={styles.hospital}>
    <Image src="/images/hospital.png"
    layout='intrinsic'
    height={225}
    width={350}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text3}</p>
    </div>
    <div className={styles.parasail}>
    <Image src="/images/parasail.png"
    layout='intrinsic'
    height={300}
    width={300}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text4}</p>
    </div>
    <div className={styles.beach}>
    <Image src="/images/beach.png"
    layout='intrinsic'
    height={350}
    width={475}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
    <p>{text5}</p>
    </div>
    <div className={styles.treatment1}>
    <Image src="/images/treatment1.png"
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
