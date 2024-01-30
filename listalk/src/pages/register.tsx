import React from "react";
import styles from "./register.module.css";
import FormInput from "../../components/form/FormInput";
import Header from "../../components/Header/Header";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";

export const register = () => {
  return (
    <div>
      <Header showLoginButton={true} showRegisterButton={true} showLogoutButton={false}/>
      <div className={styles.container}>
        <h1>Register Now</h1>
        <p>To be a part of the list world</p>
      </div>
      <div className={styles.inputArea}>
        <FormInput
          fieldName="UserName"
          placeHolder="Enter your chosen username"
          inputType="name"
        />
        <FormInput
          fieldName="Email"
          placeHolder="Enter your best email"
          inputType="email"
        />
        <FormInput
          fieldName="Password"
          placeHolder="Enter a strong password"
          inputType="password"
        />
        <SubmitBtn buttonName="Login" />
      </div>
    </div>
  );
};

export default register
