import React from "react";
import Header from "../../components/Header/Header";
import styles from "./login.module.css";
import FormInput from "../../components/form/formInput";

const login = () => {
  return (
    <div>
      <Header showLoginButton={true} showRegisterButton={true} />
      <div className={styles.container}>
        <h1>Welcome Back !</h1>
        <h4>Your organized world awaits</h4>
      </div>
      <div className={styles.inputArea}>
        <FormInput
          fieldName="Email"
          placeHolder="Insert Email"
          inputType="email"
        />
        <FormInput
          fieldName="Senha"
          placeHolder="Insert password"
          inputType="password"
        />
      </div>
    </div>
  );
};

export default login;
