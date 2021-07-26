export interface product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

export interface productarray {
  products: product[];
}

export const initialState: productarray = {
  products: [],
};

export interface State {
  products: [];
}
