import { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useProductStore } from "../../hooks/useProductStore";
import styles from "./paginator.module.scss";
export const Paginator = () => {
  const [page, setPage] = useState(1);
  const products = useProductStore(page);
  const totalPages = products?.paginated
    ? Object.keys(products.paginated).length
    : 0;
  return (
    <>
      {products?.total ? (
        <div className={styles.pagination}>
          {page > 1 && (
            <button onClick={() => setPage(page - 1)} className={styles.page}>
              <HiArrowNarrowLeft />
            </button>
          )}
          {products?.paginated &&
            Object.keys(products.paginated).map((p, i) => (
              <button
                className={[styles.page, +p === page ? styles.active : ""].join(
                  " "
                )}
                key={i}
                onClick={() => setPage(+p)}
              >
                {p}
              </button>
            ))}
          {page < totalPages && (
            <button onClick={() => setPage(page + 1)} className={styles.page}>
              <HiArrowNarrowRight />
            </button>
          )}
        </div>
      ) : null}
    </>
  );
};
