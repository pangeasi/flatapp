import React, { useEffect } from "react";
import { useProductsDispatch, useProductsState } from "../store/products";
import { BASE_ENDPOINT_API } from "../constants";

export const useProductStore = (page = 1) => {
  const productDispatch = useProductsDispatch();
  const productsStored = useProductsState();
  useEffect(() => {
    if (productsStored?.total !== 0) {
      if (
        !(productsStored?.paginated && productsStored?.paginated[page]) ||
        (productsStored?.paginated &&
          Object.keys(productsStored?.paginated[page]).length < 1)
      ) {
        fetch(`${BASE_ENDPOINT_API}/api/product?page=${page}`)
          .then((res) => res.json())
          .then((data) => productDispatch({ type: "FETCHED", data }));
      } else {
        productDispatch({ type: "SET_PAGE", page });
      }
    }
  }, [page, productDispatch, productsStored?.paginated]);

  return productsStored;
};
