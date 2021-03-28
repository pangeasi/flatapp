export type Product = {
  id: string;
  title: string;
  pic: string;
  price: number;
};

export type Products = {
  results: Product[];
  count: number;
};

type Paginated = {
  [key: string]: Product[];
};

export type ProductState = {
  paginated: Paginated;
  total: number;
  actualPage: number;
};

type Data = {
  count: number;
  page: number;
  results: Product[];
};

export type Action = {
  data?: Data;
  page?: number;
  type: "FETCHED" | "SET_PAGE";
};
