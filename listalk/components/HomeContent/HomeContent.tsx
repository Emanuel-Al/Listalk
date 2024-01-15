import styles from './HomeContent.module.css'
import Image from 'next/image'
import mainImg from '../../assets/homeImg.png'

import React from 'react'

const HomeContent = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.text}>
                <div className={styles.title}>
                <h1>LIST</h1>
                <h1 id={styles.subTitle}>ALK</h1>
                </div>
                <div className={styles.paragraph}>
                <p>Your Ultimate Destination For Cataloging Lifes Favorites</p>
                </div>
            </div>
            <div className={styles.image}>
                <Image src={mainImg} alt='Garoto Com Laptop' width={580} height={530}/>
            </div>
        </div>
    </div>
  )
}

export default HomeContent