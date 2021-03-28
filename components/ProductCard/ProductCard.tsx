import styles from "./productCard.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BASE_ENDPOINT_API } from "../../constants";
import { Product } from "../../types";

type PropTypes = {
  product: Product;
};
export const ProductCard = ({ product }: PropTypes) => {
  return (
    <div>
      <div className={styles.fav}>
        {Math.random() < 0.5 ? <AiOutlineHeart /> : <AiFillHeart />}
      </div>
      <div className={styles.card}>
        <img
          src={`${BASE_ENDPOINT_API}/api/product/pic/${product.pic}`}
          alt={product.title}
        />
        <h3 className={styles.title}>{product.title}</h3>
        <small className={styles.price}>{product.price}€ / m²</small>
      </div>
    </div>
  );
};
