import React from 'react';
import styles from './headerBtn.module.css';

interface HeaderBtnProps {
  buttonName: string;
  buttonType: string;
}

const HeaderBtn: React.FC<HeaderBtnProps> = ({buttonName, buttonType }) => {
  return (
    <div>
      <button id={styles[buttonType]} className={styles.headerBtn}>{buttonName}</button>
    </div>
  );
};

export default HeaderBtn;
