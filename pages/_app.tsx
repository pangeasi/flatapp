import { ProductsProvider } from "../store/products";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  );
}

export default MyApp;
