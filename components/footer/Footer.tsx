import React from "react";
import pencil from "../../assets/pencil.png";
import styles from "./Footer.module.css";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaLink,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src={pencil} alt="Pencil img" width={40} height={40}  />
          <h2 id={styles.title}>LISTALK</h2>
        </div>
        <div className={styles.info}>
          <h3>Concept</h3>
          <h3>Blog</h3>
          <h3>Contact us</h3>
        </div>
        <div className={styles.icons}>
          <FaFacebookF size={23} />
          <FaInstagram size={23} />
          <FaTwitter size={23} />
          <FaLinkedin size={23} />
        </div>
      </div>
      <div className={styles.links}>
        <a className={styles.link} href="#">Privacy Policy</a>
        <a className={styles.link} href="#">Terms of Service</a>
        <a className={styles.link} href="#">Cookies Settings</a>
      </div>
    </div>
  );
};

export default Footer;
