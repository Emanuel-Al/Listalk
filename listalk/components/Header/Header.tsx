import React from "react";
import logo from "../../assets/pencil.png";
import HeaderBtn from "./HeaderBtn";
import styles from "./header.module.css";
import Image from "next/image";

const Header = ({ showLoginButton, showRegisterButton, showLogoutButton }: { showLoginButton: boolean, showRegisterButton: boolean, showLogoutButton: boolean }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image }>
          <Image src={logo} alt="Logo" width={45} height={45} />
        </div>
        <div className={styles.pages}>
          <h3>Home</h3>
          <h3>About</h3>
        </div>
        <div className={styles.buttons}>
          {showLoginButton && <HeaderBtn buttonName="Login" buttonType="Login" to="/login"/>}
        
          {showRegisterButton && <HeaderBtn buttonName="Register" buttonType="Register" to="register" />}

          {showLogoutButton && <HeaderBtn buttonName="Logout" buttonType="Register" to="/" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
