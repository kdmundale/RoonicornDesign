import React, { Component } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Footer(){

  return(

    <section className={styles.footer}>
      <p>Built & Maintained by <Link target="blank" href="https://kdmundale.com"><a>kdmundale.com</a></Link> Copywrite December 2021</p>
    </section>

  )
}
