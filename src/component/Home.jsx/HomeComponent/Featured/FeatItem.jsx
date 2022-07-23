

import React from 'react';
import styles from "./Featured.module.css";

export const FeatItem = ({id, name, dec, rate, img}) => {
  return (
    <div
    className={styles.itemContainer}
   
  >
    <div >
    <img src={img} alt={name} className={styles.img}/>
    </div>
        <div className={styles.box}>
            <div>{name}</div>
            <div>{rate}</div>
        </div>
        <div>
            <p className={styles.dec}>{dec}</p>
        </div>
        <div className={styles.job}>
            View Jobs
        </div>
  </div>
  )
}
