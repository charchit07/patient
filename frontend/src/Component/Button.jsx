import React from 'react'
import styles from '../Style/Btn.module.css'
export const Btn = () => {
  return (
    <div className={styles.btn_container}>
      
        <button className={styles.btnblue}>All Users</button>
        <button className={styles.btngreen}>Active Users</button>
        <button className={styles.btnorange}>Inactive Users</button>
        <button className={styles.btnlight}>Demo Users</button>
        <button className={styles.btnpink}>Payment Overdue</button>
        <button className={styles.btnyellow}>Payment Due ASAP</button>
        <button className={styles.btncyan}>Negative Credits</button>
       
    </div>
  )
}
