import React from 'react';
import styles from './headerBtn.module.css';
import { useRouter } from 'next/router';

interface HeaderBtnProps {
  buttonName: string;
  buttonType: string;
  to:string;
}

const HeaderBtn: React.FC<HeaderBtnProps> = ({buttonName, buttonType, to }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  }
  return (
    <div>
      <button onClick={handleClick} id={styles[buttonType]} className={styles.headerBtn} >{buttonName}</button>
    </div>
  );
};

export default HeaderBtn;
