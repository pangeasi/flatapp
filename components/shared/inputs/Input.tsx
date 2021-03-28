import { LegacyRef } from "react";
import styles from "./input.module.scss";
type PropTypes = {
  label: string;
  name: string;
  register: LegacyRef<HTMLInputElement>;
  type?: "text" | "number";
  errors: any;
};

export const Input = ({
  label,
  name,
  register,
  type = "text",
  errors,
}: PropTypes) => {
  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input type={type} name={name} ref={register} step="any" />
      <small className={styles.small}>{errors?.type}</small>
    </div>
  );
};
