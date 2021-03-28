import React from "react";
import { createContext, useReducer, useContext } from "react";
import { ITEMS_PER_PAGE } from "../constants";
import { Action, ProductState } from "../types";
const ProductsStateContext = createContext(undefined);
const ProductsDispatchContext = createContext(undefined);

const productReducer = (state: ProductState, action: Action) => {
  switch (action.type) {
    case "FETCHED": {
      const paginated = {};
      if (action?.data?.count) {
        const pages = Math.ceil(action?.data?.count / ITEMS_PER_PAGE);
        const page = action?.data?.page;

        Array.from(Array(pages).keys()).forEach(
          (page) =>
            (paginated[page + 1] = state.paginated
              ? state.paginated[page + 1]
              : {})
        );
        paginated[page] = action.data.results;
      }
      return (state = {
        paginated,
        actualPage: +action?.data?.page,
        total: action?.data?.count,
      });
    }
    case "SET_PAGE": {
      return (state = {
        ...state,
        actualPage: action?.page,
      });
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    paginated: null,
    actualPage: null,
    total: null,
  });
  return (
    <ProductsStateContext.Provider value={state}>
      <ProductsDispatchContext.Provider value={dispatch}>
        {children}
      </ProductsDispatchContext.Provider>
    </ProductsStateContext.Provider>
  );
};

const useProductsState = (): ProductState => {
  const context = useContext(ProductsStateContext);
  if (context === undefined) {
    throw new Error("useProductsState must be used within a ProductsProvider");
  }
  return context;
};

const useProductsDispatch = () => {
  const context = useContext(ProductsDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useProductsDispatch must be used within a ProductsProvider"
    );
  }
  return context;
};

export { ProductsProvider, useProductsState, useProductsDispatch };
