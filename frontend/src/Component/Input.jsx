import React from 'react'
import styles from '../Style/Field.module.css'
export const Field = () => {
  return (
    <div className={styles.input_container}>
       <div className={styles.field}>
        <input type="text" className={styles.childfield_1} placeholder='Enter Name' />
        <input type="text" className={styles.childfield_1} placeholder='Enter Username' />
        <input type="text"  className={styles.childfield_1} placeholder='Email/Useralias' />
        <select  className={styles.childselect}>
        <option value="">Select Reseller Name</option>
        <option value="option1"> 2# Hemesh</option>
        <option value="option2">2# Hemesh</option>
        <option value="option3">2# Hemesh</option>
      </select>
     <button className={styles.childsearch}>Search</button>
      <button className={styles.loading}>&#128472;</button>
       </div>
       <div >
        <label className={styles.lable}>
          Show
        </label>
        <select >
        <option value="">10</option>
        <option value="option1">11</option>
        <option value="option2">12</option>
        <option value="option3">13</option>
      </select>
        <input type="search" placeholder='search' className={styles.search} />
       </div>
    </div>
  )
}
