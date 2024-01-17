import React from "react";
import Header from "../../components/Header/Header";
import styles from "./login.module.css";
import FormInput from "../../components/form/formInput";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";

const login = () => {
  return (
    <div>
      <Header showLoginButton={true} showRegisterButton={true} />
      <div className={styles.container}>
        <h1>Welcome Back !</h1>
        <p>Your organized world awaits</p>
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
        <SubmitBtn buttonName="Login"/>
      </div>
    </div>
  );
};

export default login;
