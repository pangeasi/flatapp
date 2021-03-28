import { useProductsDispatch, useProductsState } from "../store/products";
import { Paginator } from "../components/Paginator/Paginator";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Select } from "../components/Select/Select";
import styles from "./home.module.scss";
import { Layout } from "../components/UI/Layout/Layout";
import Link from "next/link";
type Product = {
  id: string;
  title: string;
  pic: string;
  price: number;
};

type Products = {
  results: Product[];
  count: number;
};

const Home = () => {
  const products = useProductsState();
  return (
    <Layout>
      <div className="container">
        <div className={styles.results}>
          <p>{products?.total} Items found</p>
          <h2>Search Results for "places"</h2>
        </div>
        <div className={styles.selects}>
          <Select
            defaultValue={`Productos(${products?.total})`}
            options={["Baños", "Cocinas", "Dormitorios", "Jardín"]}
          />
          <Select
            defaultValue="ORDENAR POR"
            options={["Precio ascendente", "Precio descendente"]}
          />
        </div>
        {products?.total > 0 ? (
          <div className={styles.cards}>
            {products?.paginated &&
              products?.paginated[products?.actualPage]?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        ) : (
          <div>
            <p>
              There are not products!{" "}
              <span>
                <Link href="/add">
                  <a>Add someone</a>
                </Link>
              </span>
            </p>
          </div>
        )}

        <Paginator />
      </div>
    </Layout>
  );
};

export default Home;
