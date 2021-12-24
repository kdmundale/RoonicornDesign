import React, { Component } from 'react';
import Image from 'next/image'

<<<<<<< HEAD

import styles from '../styles/Photo.module.css'


export default function PhotoFrame({children}){

  let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text5="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let text6="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
=======
import styles from '../styles/Photo.module.css'

export default function PhotoFrame({children}){
  let text=children[0]
  let text1=children[1]
  let text2=children[2]
  let text3=children[3]
  let text4=children[4]
  let text5=children[5]
  let text6=children[6]

  console.log(children)
  console.log("!!!!!!!!!!!!!!!!!!")
>>>>>>> RissPage

  return(
    <article className={styles.main}>
    <div className={styles.adam}>
<<<<<<< HEAD
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
=======
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
>>>>>>> RissPage
    <p>{text2}</p>
    </div>

    <div className={styles.hospital}>
<<<<<<< HEAD
    <Image src="/images/hospital.png"
=======
    <div>
    <Image src="/images/Riss/hospital.png"
>>>>>>> RissPage
    layout='intrinsic'
    height={225}
    width={350}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
<<<<<<< HEAD
    <p>{text3}</p>
    </div>
    <div className={styles.parasail}>
    <Image src="/images/parasail.png"
=======
    </div>
    <p>{text3}</p>
    </div>
    <div className={styles.parasail}>
    <div>
    <Image src="/images/Riss/parasail.png"
>>>>>>> RissPage
    layout='intrinsic'
    height={300}
    width={300}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
<<<<<<< HEAD
    <p>{text4}</p>
    </div>
    <div className={styles.beach}>
    <Image src="/images/beach.png"
=======
    </div>
    <p>{text4}</p>
    </div>
    <div className={styles.beach}>
    <div>
    <Image src="/images/Riss/beach.png"
>>>>>>> RissPage
    layout='intrinsic'
    height={350}
    width={475}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
<<<<<<< HEAD
    <p>{text5}</p>
    </div>
    <div className={styles.treatment1}>
    <Image src="/images/treatment1.png"
=======
    </div>
    <p>{text5}</p>
    </div>
    <div className={styles.treatment1}>
    <div>
    <Image src="/images/Riss/treatment1.png"
>>>>>>> RissPage
    layout='intrinsic'
    height={300}
    width={300}
    alt="image of handmade wooden watchbox in walnut"
    rel="preload"/>
<<<<<<< HEAD
=======
    </div>
>>>>>>> RissPage
    <p>{text6}</p>
    </div>
    </article>
  )
}
