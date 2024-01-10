import React from "react";
import logo from "../../assets/pencil.png";
import HeaderBtn from "./HeaderBtn";
import styles from "./header.module.css";
import Image from "next/image";

const Header = ({ showLoginButton, showRegisterButton }: { showLoginButton: boolean, showRegisterButton: boolean }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image }>
          <Image src={logo} alt="Logo" />
        </div>
        <div className={styles.pages}>
          <h3>Home</h3>
          <h3>About</h3>
        </div>
        <div className={styles.buttons}>
          {/* Renderiza o botão de login se showLoginButton for true */}
          {showLoginButton && <HeaderBtn buttonName="Login" buttonType="Login" />}
          
          {/* Renderiza o botão de registro se showRegisterButton for true */}
          {showRegisterButton && <HeaderBtn buttonName="Register" buttonType="Register" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
