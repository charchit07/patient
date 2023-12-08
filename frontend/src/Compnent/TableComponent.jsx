import React from 'react';
import styles from '../Style/TableComponent.module.css'
const TableComponent = () => {
  return (
     <div className={styles.table}>
<table className={styles.table1}>
      <thead>
        <tr>
          <th>#ID</th>
          <th>
         Name
          </th>
          <th>Useralias</th>
          <th>Credit</th>
          <th>Credit Limit</th>
          <th>Phone</th>
          <th>Company Name</th>
          <th>Customer Type</th>
          <th>Dom</th>
          <th>Last
             Payment
              Date</th>
              <th>Reseller 
                Name</th>
         <th>Creation date</th>
         <th>
            <button className={styles.loginbtn}>Login </button>
         </th>
         <th>Status</th>
         <th>
            <button className={styles.loginbtn}>Action </button>
         </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2090</td>
          <td>Nick Sharkov</td>
          <td>smilecenter215@gmail.com</td>
          <td>-3.5549</td>
          <td>799</td>
          <td>12153915939</td>
          <td>Abington smile center</td>
          <td></td>
          <td>1nz.la2</td>
          <td>2018-09-20
            19:43:29
          </td>
          <td>2# Hemesh</td>
          <td>2018-09-20</td>
          <td>
            <button className={styles.loginbtn}>Login</button>
          </td>
          <td>Active</td>
          <td>
            <button className={styles.loginbtn}>$</button>
          </td>
        </tr>
        <tr>
        <td>2138</td>
          <td>Anna Martinez Sharkov</td>
          <td>dranna2smile@gmail.com</td>
          <td>0.00394</td>
          <td>497</td>
          <td>17147780988</td>
          <td>Anna Ruth Martinez</td>
          <td></td>
          <td>97a.la2</td>
          <td>2018-11-15
            13:25:30
          </td>
          <td>2# Hemesh</td>
          <td>2018-11-15</td>
          <td>
            <button className={styles.loginbtn}>Login</button>
          </td>
          <td>Active</td>
          <td>
            <button className={styles.loginbtn}>$</button>
          </td>
        </tr>

        <tr>
        <td>3347</td>
          <td>Vrushali Damle</td>
          <td>drvdamle@gmail.com</td>
          <td>-0.00498</td>
          <td>453</td>
          <td>12096243131</td>
          <td>Aura Family Dental</td>
          <td></td>
          <td>a79.la7</td>
          <td>2020-07-30
            09:05:17
          </td>
          <td>2# Hemesh</td>
          <td>2020-07-03</td>
          <td>
            <button className={styles.loginbtn}>Login</button>
          </td>
          <td>Active</td>
          <td>
            <button className={styles.loginbtn}>$</button>
          </td>
        </tr>

        <tr>
        <td>1994</td>
          <td>Kiran Trivedi</td>
          <td>kiranbapu@hotmail.com</td>
          <td>0.00459</td>
          <td>432</td>
          <td>16269697777</td>
          <td>Azusa Family Dentistry</td>
          <td></td>
          <td>u0f.la</td>
          <td>2018-07-05
            13:37:33
          </td>
          <td>2# Hemesh</td>
          <td>2018-07-05</td>
          <td>
            <button className={styles.loginbtn}>Login</button>
          </td>
          <td>Active</td>
          <td>
            <button className={styles.loginbtn}>$</button>
          </td>
        </tr>

        <tr>
        <td>2977</td>
          <td>Samir Shah</td>
          <td>samirshah@yahoo.co.in</td>
          <td>155.34447</td>
          <td>173</td>
          <td>19097460444</td>
          <td>Badeline Dental Care</td>
          <td></td>
          <td>r42.la7</td>
          <td>2020-04-17
            14:12:37
          </td>
          <td>2# Hemesh</td>
          <td>2020-04-17</td>
          <td>
            <button className={styles.loginbtn}>Login</button>
          </td>
          <td>Active</td>
          <td>
            <button className={styles.loginbtn}>$</button>
          </td>
        </tr>

        <tr>
        <td>2202</td>
          <td>Annu Sharma</td>
          <td>dr@mydentalcomfort.com</td>
          <td>-0.00284</td>
          <td>346</td>
          <td>15104904300</td>
          <td>Dental Comfort</td>
          <td></td>
          <td>7r5.la2</td>
          <td>2019-01-16
            08:22:21
          </td>
          <td>2# Hemesh</td>
          <td>2019-01-16</td>
          <td>
            <button className={styles.loginbtn}>Login</button>
          </td>
          <td>Active</td>
          <td>
            <button className={styles.loginbtn}>$</button>
          </td>
        </tr>
        
        <tr>
        <td>1674</td>
          <td>Tejas Modi</td>
          <td>drtejasmodi@yahoo.com</td>
          <td>-0.00495</td>
          <td>207</td>
          <td>19096457948</td>
          <td>Dr Tejas Modi</td>
          <td></td>
          <td>ui4.la</td>
          <td>2017-09-03
            08:22:21
          </td>
          <td>2# Hemesh</td>
          <td>2017-09-03</td>
          <td>
            <button className={styles.loginbtn}>Login</button>
          </td>
          <td>Active</td>
          <td>
            <button className={styles.loginbtn}>$</button>
          </td>
        </tr>
      </tbody>
    </table>
     </div>
  );
};

export default TableComponent;
