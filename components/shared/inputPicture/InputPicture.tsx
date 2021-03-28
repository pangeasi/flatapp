import { useRef, useState } from "react";
import styles from "./inputPicture.module.scss";

export const InputPicture = ({ setValue, errors }) => {
  const inputFile = useRef(null);
  const [image, setImage] = useState(null);

  const handleInput = (ev) => {
    ev.preventDefault();
    inputFile.current.click();
  };

  const handlePicture = (ev) => {
    const files = ev.target.files;
    if (FileReader && files && files.length) {
      const fr = new FileReader();
      fr.onload = function () {
        setImage(fr.result);
        setValue("picture", files[0], {
          shouldValidate: files[0],
          shouldDirty: true,
        });
      };
      fr.readAsDataURL(files[0]);
    }
  };
  return (
    <div className={styles.content}>
      <img
        onClick={(ev) => handleInput(ev)}
        className={styles.image}
        src={image || "/images/Image_file.webp"}
        alt=""
      />
      <button onClick={(ev) => handleInput(ev)}>select picture</button>
      <input
        onChange={(ev) => handlePicture(ev)}
        accept="image/*"
        id="input"
        ref={inputFile}
        type="file"
        hidden
      />
      <small>{errors && "Select picture"}</small>
    </div>
  );
};
