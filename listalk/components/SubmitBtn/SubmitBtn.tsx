import React from 'react';
import styles from './submitBtn.module.css';

interface SubmitBtnProps {
  buttonName: string;
  onClick?: () => void;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ buttonName, onClick }) => {
  return (
    <div>
      <button type='submit' className={styles.actionBtn} onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
};

export default SubmitBtn;
