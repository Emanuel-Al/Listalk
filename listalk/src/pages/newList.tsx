import React from "react";
import Header from "../../components/Header/Header";
import ListItem from "../../components/list/ListItem";
import styles from "./newList.module.css";
import CategoryComponent from "../../components/category/CategoryComponent";
import Check from "../../assets/Check.svg";
import Image from "next/image";

const newList = () => {
  return (
    <div className={styles.pageContainer}>
      <Header
        showLoginButton={false}
        showRegisterButton={false}
        showLogoutButton={true}
      />
      <div className={styles.container}>
        <div className={styles.textArea}>
          <h1 className={styles.title}>Edit the list name...</h1>
          <p className={styles.subTitle}>Add a description to your list here</p>
        </div>
        <div className={styles.items}>
          <ListItem content="This is a movie name" />
          <ListItem content="This is a movie name" />
        </div>
      </div>
      <div className={styles.form}>
        <form action="">
          <div className={styles.newItem}>
            <label htmlFor="name">New Item:</label>
            <div className={styles.inputArea}>
              <input
                id={styles.itemName}
                name="name"
                type="text"
                placeholder="Enter another item to your list"
              />
              <button id={styles.checkBtn}><Image src={Check} alt="check"/></button>
            </div>
          </div>
          <div className={styles.category}>
            <label htmlFor="category">Category:</label>
            <CategoryComponent style="large" showSvg={false} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default newList;
