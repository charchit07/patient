import React, { useState } from "react";

import styles from "../Style/TableComponent.module.css";

const data = [
  {
    ID: "2090",
    Name: "Nick Sharov",
    Useralias: "smilecenter215@gmail.com",
    Credit: "-3.5549",
    CreditLimit: "799",
    Phone: "12153915939",
    CompanyName: "Abington smile center",
    CustomerType: "",
    Dom: "1nz.la2",
    LastPaymentDate: "2018-09-20 19:43:29",
    ResellerName: "2# Hemesh",
    Creationdate: "2018-09-20",
  },
  {
    ID: "2138",
    Name: "Anna Martinez",
    Useralias: "dranna2smile@gmail.com",
    Credit: "0.00394",
    CreditLimit: "497",
    Phone: "17147780988",
    CompanyName: "Anna Ruth Martinez",
    CustomerType: "",
    Dom: "97a.la2",
    LastPaymentDate: "2018-11-15 13:25:30",
    ResellerName: "2# Hemesh",
    Creationdate: "2018-09-20",
  },
  {
    ID: "3347",
    Name: "Vrushali Damle",
    Useralias: "drvdamle@gmail.com",
    Credit: "-0.00498",
    CreditLimit: "453",
    Phone: "12096243131",
    CompanyName: "Aura Family Dental",
    CustomerType: "",
    Dom: "a79.la7",
    LastPaymentDate: "2020-07-30 09:05:17",
    ResellerName: "2# Hemesh",
    Creationdate: "2020-07-30",
  },
  {
    ID: "1994",
    Name: "Kiran Trivedi",
    Useralias: "kiranbapu@hotmail.com",
    Credit: "0.00459",
    CreditLimit: "432",
    Phone: "16269697777",
    CompanyName: "Azusa Family Dentistry",
    CustomerType: "",
    Dom: "u0f.la",
    LastPaymentDate: "2018-07-05 13:37:33",
    ResellerName: "2# Hemesh",
    Creationdate: "2018-07-05",
  },
  {
    ID: "2977",
    Name: "Samir Shah",
    Useralias: "samirshah27@yahoo.co.in",
    Credit: "155.34447",
    CreditLimit: "173",
    Phone: "19097460444",
    CompanyName: "Baseline Dental Care",
    CustomerType: "",
    Dom: "r42.la7",
    LastPaymentDate: "2020-04-17 14:12:37",
    ResellerName: "2# Hemesh",
    Creationdate: "2020-04-17",
  },
  {
    ID: "2202",
    Name: "Anu Sharma",
    Useralias: "dr@mydentalcomfort.com",
    Credit: "-0.00284",
    CreditLimit: "346",
    Phone: "15104904300",
    CompanyName: "Dental Comfort",
    CustomerType: "",
    Dom: "7r5.la2",
    LastPaymentDate: "2019-01-16 08:22:21",
    ResellerName: "2# Hemesh",
    Creationdate: "2019-01-16",
  },
  {
    ID: "1674",
    Name: "Tejas Modi",
    Useralias: "drtejasmodi@yahoo.com",
    Credit: "-0.00495",
    CreditLimit: "207",
    Phone: "19096457984",
    CompanyName: "Dr Tejas Modi",
    CustomerType: "",
    Dom: "ui4.la",
    LastPaymentDate: "2017-09-03 19:43:29",
    ResellerName: "2# Hemesh",
    Creationdate: "2017-09-03",
  },
  {
    ID: "1674",
    Name: "Tejas Modi",
    Useralias: "drtejasmodi@yahoo.com",
    Credit: "-0.00495",
    CreditLimit: "207",
    Phone: "19096457984",
    CompanyName: "Dr Tejas Modi",
    CustomerType: "",
    Dom: "ui4.la",
    LastPaymentDate: "2017-09-03 19:43:29",
    ResellerName: "2# Hemesh",
    Creationdate: "2017-09-03",
  },{
    ID: "1674",
    Name: "Tejas Modi",
    Useralias: "drtejasmodi@yahoo.com",
    Credit: "-0.00495",
    CreditLimit: "207",
    Phone: "19096457984",
    CompanyName: "Dr Tejas Modi",
    CustomerType: "",
    Dom: "ui4.la",
    LastPaymentDate: "2017-09-03 19:43:29",
    ResellerName: "2# Hemesh",
    Creationdate: "2017-09-03",
  },{
    ID: "1674",
    Name: "Tejas Modi",
    Useralias: "drtejasmodi@yahoo.com",
    Credit: "-0.00495",
    CreditLimit: "207",
    Phone: "19096457984",
    CompanyName: "Dr Tejas Modi",
    CustomerType: "",
    Dom: "ui4.la",
    LastPaymentDate: "2017-09-03 19:43:29",
    ResellerName: "2# Hemesh",
    Creationdate: "2017-09-03",
  },{
    ID: "1674",
    Name: "Tejas Modi",
    Useralias: "drtejasmodi@yahoo.com",
    Credit: "-0.00495",
    CreditLimit: "207",
    Phone: "19096457984",
    CompanyName: "Dr Tejas Modi",
    CustomerType: "",
    Dom: "ui4.la",
    LastPaymentDate: "2017-09-03 19:43:29",
    ResellerName: "2# Hemesh",
    Creationdate: "2017-09-03",
  },{
    ID: "1674",
    Name: "Tejas Modi",
    Useralias: "drtejasmodi@yahoo.com",
    Credit: "-0.00495",
    CreditLimit: "207",
    Phone: "19096457984",
    CompanyName: "Dr Tejas Modi",
    CustomerType: "",
    Dom: "ui4.la",
    LastPaymentDate: "2017-09-03 19:43:29",
    ResellerName: "2# Hemesh",
    Creationdate: "2017-09-03",
  },{
    ID: "1674",
    Name: "Tejas Modi",
    Useralias: "drtejasmodi@yahoo.com",
    Credit: "-0.00495",
    CreditLimit: "207",
    Phone: "19096457984",
    CompanyName: "Dr Tejas Modi",
    CustomerType: "",
    Dom: "ui4.la",
    LastPaymentDate: "2017-09-03 19:43:29",
    ResellerName: "2# Hemesh",
    Creationdate: "2017-09-03",
  },{
    ID: "1674",
    Name: "Tejas Modi",
    Useralias: "drtejasmodi@yahoo.com",
    Credit: "-0.00495",
    CreditLimit: "207",
    Phone: "19096457984",
    CompanyName: "Dr Tejas Modi",
    CustomerType: "",
    Dom: "ui4.la",
    LastPaymentDate: "2017-09-03 19:43:29",
    ResellerName: "2# Hemesh",
    Creationdate: "2017-09-03",
  },
];
const pageSize = 7;

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastData = currentPage * pageSize;
  const indexOfFirstData = indexOfLastData - pageSize;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const totalPages = Math.ceil(data.length / pageSize);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.table_container}>
      <table className={styles.table1}>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Useralias</th>
            <th>Credit</th>
            <th>Credit Limit</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>Customer Type</th>
            <th>Dom</th>
            <th>Last Payment Date</th>
            <th>Reseller Name</th>
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
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.ID}</td>
              <td>{item.Name}</td>
              <td>{item.Useralias}</td>
              <td>{item.Credit}</td>
              <td>{item.CreditLimit}</td>
              <td>{item.Phone}</td>
              <td>{item.CompanyName}</td>
              <td>{item.CustomerType}</td>
              <td>{item.Dom}</td>
              <td>{item.LastPaymentDate}</td>
              <td>{item.ResellerName}</td>
              <td>{item.Creationdate}</td>
              <td>
                {" "}
                <button className={styles.loginbtn}>Login </button>
              </td>
              <td>Active</td>
              <td>
                <button className={styles.loginbtn}>$</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableComponent;
