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
          <ListItem content="Best Star Wars Movies" />
          <ListItem content="Best Indie Bands 2023" />
          <ListItem content="Best Actors 2023" />
          <ListItem content="A Dumb List" />
          <ListItem content="Another Dumb List" />
          <ListItem content="One More Dumb List" />
        </div>
      </div>
      <div className={styles.btn}>
        <HeaderBtn buttonName="Add new list" buttonType="Login2" to="/newList"/>
      </div>
    </div>
  );
};

export default ListPage;
