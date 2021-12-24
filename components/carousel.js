import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import styles from '../styles/Carousel.module.css'

export default class MyCarousel extends Component {
    render() {
        return (
            <div>

              <Carousel className={styles.main}>
                  <div className={styles.card}>
                      <Image src="/images/watchbox3.jpg"
                      layout='intrinsic'
                      height={550}
                      width={700}
                      alt="image of handmade wooden watchbox in walnut"
                      rel="preload"/>
                  </div>

                  <div className={styles.card}>
                    <Image src="/images/joints.png"
                    layout='intrinsic'
                    height={550}
                    width={500}
                    alt="image of handmade wooden watchbox in walnut"
                    rel="preload"/>
                  </div>

                  <div className={styles.card}>
                    <Image src="/images/snowmen.JPG"
                    layout='intrinsic'
                    height={550}
                    width={600}
                    alt="image of handmade wooden watchbox in walnut"
                    rel="preload"/>
                  </div>

                  <div className={styles.card}>
                    <Image src="/images/gluing.png"
                    layout='intrinsic'
                    height={550}
                    width={600}
                    alt="image of handmade wooden watchbox in walnut"
                    rel="preload"/>
                  </div>

                  <div className={styles.card}>
                    <Image src="/images/watchbox2.JPG"
                    layout='intrinsic'
                    height={550}
                    width={700}
                    alt="image of handmade wooden watchbox in walnut"
                    rel="preload"/>
                  </div>

              </Carousel>
            </div>
        );
    }
};
