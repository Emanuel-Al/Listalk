import React from 'react'
import styles from './submitBtn.module.css'

interface SubmitBtnProps{
    buttonName: string;
}

const SubmitBtn = ({buttonName}:SubmitBtnProps) => {
  return (
    <div >
        <button type='submit' className={styles.actionBtn}>{buttonName}</button>
    </div>
  )
}

export default SubmitBtn