import { createStore } from "redux";
import { cartReducer } from "./reducers";

const savedState = JSON.parse(window.localStorage.getItem("cart"));

const initialState = {
  cart: {
    product: [
      {
        id: 1,
        name: "Cat",
        price: 1000,
        quantity: 5,
        img: "../imgs/Cat2.jpg",
        description:
          "Lored ipsum Lored ipsumLored ipsumLored ipsumLored ipsumLored ipsumLored ipsumLored ipsumLored ipsumLored ipsum ",
      },
      {
        id: 5,
        name: "Cat",
        price: 5000,
        quantity: 2,
        img: "../imgs/Cat5.jpg",
        description:
          "Lored ipsum Lored ipsumLored ipsumLored ipsumLored ipsumLored ipsumLored ipsumLored ipsumLored ipsumLored ipsum ",
      },
    ],
  },
};

const store = createStore(
  cartReducer,
  savedState || initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
