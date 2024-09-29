"use client";
import React from "react";
import styles from "./BusinessContents.module.scss";

const BusinessContents = () => {
  const businessList = [
    { name: "バレルサウナ事業", description: "バレルサウナの製造・販売から設置までを一貫して行っています。" },
    { name: "コンテナハウス事業", description: "コンテナハウスの設計から販売までを担当しています。" },
    { name: "LEDサイネージ事業", description: "LEDサイネージの設計、販売、設置を提供しています。" },
    { name: "Webアプリ事業", description: "Webアプリの設計からリリースまでをサポートします。" },
    { name: "宿泊事業", description: "別荘の民泊提供しています。" },
  ];

  return (
    <div className={styles.contactContainer}>
      <div className={styles.titleArea}>
        <p className={styles.title}>Business</p>
        <p className={styles.subTitle}>事業内容</p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.businessTable}>
          {/* <thead>
            <tr>
              <th>事業名</th>
              <th>説明</th>
            </tr>
          </thead> */}
          <tbody>
            {businessList.map((business, index) => (
              <tr key={index}>
                <td>{business.name}</td>
                <td>{business.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessContents;
