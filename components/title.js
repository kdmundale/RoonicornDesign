import React, { Component } from 'react';
import styles from '../styles/TitleCard.module.css'

export default function PageTitle({children}){
  let blah = children[0]
  let bluh = children[1]

  return(
    <div className={styles.titleHolder}>

    <h1 className={styles.title}>
      {blah}<span className={styles.title2}>{bluh}</span>
    </h1>

    <div className={styles.imagecontainer}>
    </div>

    </div>
  )
}
