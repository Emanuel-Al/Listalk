import React from "react";
import Header from "../../components/Header/Header";
import styles from "./login.module.css";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import { useForm } from "react-hook-form"
import { postLogin } from "@/api/login/login";
import { useRouter } from "next/router";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  console.log({errors});

  const onSubmit = (data:any) => {
    console.log(data);
    router.push("/yourList")
  };
  return (
    <div>
      <Header showLoginButton={true} showRegisterButton={true} showLogoutButton={false}/>
      <div className={styles.container}>
        <h1>Welcome Back!</h1>
        <p>Your organized world awaits</p>
      </div>
      <div className={styles.inputArea}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={errors?.email && styles.inputError}
            placeholder="Insert Username"
            {...register('username', {required: true})}
          />
          {errors?.username?.type === "required" && <p className={styles.errorMessage}>Username is required</p>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            className={errors?.name && styles.inputError}
            placeholder="Insert Password"
            {...register('password', {minLength: 6, required:true})}
          />
          {errors?.password?.type === "required" && <p className={styles.errorMessage}>Password is required</p>}
          {errors?.password?.type === "minLength" && <p className={styles.errorMessage}>Minimum 6 digits</p>}
        </div>
        <SubmitBtn buttonName="Login" onClick={() => handleSubmit(onSubmit)()} />
      </div>
    </div>
  );
};

export default Login;
