import React from "react";
import styles from "./ListPage.module.css";
import ListItem from "./ListItem";
import HeaderBtn from "../Header/HeaderBtn";

const ListPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1>Your lists</h1>
        <p>all in one place</p>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <ListItem content="teste" />
          <ListItem content="teste" />
          <ListItem content="teste" />
          <ListItem content="teste" />
          <ListItem content="teste" />
          <ListItem content="teste" />
        </div>
      </div>
      <div className={styles.btn}>
        <HeaderBtn buttonName="Add new list" buttonType="Login2" />
      </div>
    </div>
  );
};

export default ListPage;
