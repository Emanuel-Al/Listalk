import React from "react";
import styles from "./formInput.module.css";

interface FormInputProps {
  fieldName: string;
  placeHolder: string;
  inputType: string;
}

const FormInput = ({ fieldName, placeHolder, inputType }: FormInputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.labelStyle} htmlFor={fieldName}>
        {fieldName}
      </label>
      <input
        className={styles.inputStyle}
        id={fieldName}
        type={inputType}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormInput;
