


import React from 'react';
import styles from './Slide.module.css';


const SliderItem = ({id, image, title, salary}) => {
 
  return (
    <div
      className={styles.itemContainer}
     
    >
      <div className={styles.itemImg}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.itemInfo}>
      
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>₹ {salary}</p>
      </div>
    </div>
  );
}

export default SliderItem;