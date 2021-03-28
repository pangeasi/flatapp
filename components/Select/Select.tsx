import styles from "./select.module.scss";

type PropsType = {
  defaultValue: string;
  options: string[];
};
export const Select = ({ defaultValue, options }) => {
  return (
    <div className={styles.select}>
      <select name="slct" id="slct" defaultValue={defaultValue}>
        <option disabled>{defaultValue}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
