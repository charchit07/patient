import React from 'react'
import styles from '../Style/Field.module.css'
export const Field = () => {
  return (
    <div className={styles.input_container}>
       <div className={styles.field}>
        <div className={styles.input_div}>
        <input type="text" className={styles.childfield_1} placeholder='Enter Name' />
        <input type="text" className={styles.childfield_1} placeholder='Enter Username' />
        <input type="text"  className={styles.childfield_1} placeholder='Email/Useralias' />
        </div>
        <div className={styles.btn_container}>
        <select  className={styles.childselect}>
        <option value="">Select Reseller Name</option>
        <option value="option1"> 2# Hemesh</option>
        <option value="option2">2# Hemesh</option>
        <option value="option3">2# Hemesh</option>
      </select>
     <button className={styles.childsearch}>Search</button>
      <button className={styles.loading}>&#128472;</button>
        </div>
        
        
       </div>
       <div className={styles.search_filter}>
        <label className={styles.lable}>
          Show
        </label>
        <select >
        <option value="">3</option>
        <option value="option1">4</option>
        <option value="option2">5</option>
        <option value="option3">6</option>
      </select>
        <input type="search" placeholder='search' className={styles.search} />
       </div>
    </div>
  )
}
