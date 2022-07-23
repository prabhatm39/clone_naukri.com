

import React from 'react';
import styles from "./Compan.module.css";

export default function Compan({id, hire, name, img1, img2, img3, img4}) {
  return (
    <div
    className={styles.itemContainer}
   
  >
    <div className={styles.itemImg}>
    <p className={styles.name}>{name} <span>{">"}</span></p>
    <p className={styles.hire}>₹ {hire}</p>

    <div className={styles.img}>
      <img src={img1} alt={name} />
      <img src={img2} alt={name} />
      <img src={img3} alt={name} />
      <img src={img4} alt={name} />
      
      </div>
    </div>
   
  </div>
  )
}
