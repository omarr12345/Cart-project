import { ADD_TO_CART } from "../actions/type";
import { REMOVE_FROM_CART } from "../actions/type";
export function cartReducer(state, action) {
  console.log(state, action); //Comment

  switch (action.type) {
    case ADD_TO_CART:
      for (var i = 0; i < state.cart.product.length; i++) {
        console.log(state.cart.product[i].id, action.product.id);
        if (state.cart.product[i].id === action.product.id) {
          state.cart.product[i].quantity += action.product.quantity;
          console.log("Inside If");
          return state;
        }
      }

      const newState = {
        ...state,
        cart: {
          ...state.cart,

          product: [
            ...state.cart.product,

            {
              ...action.product,
            },
          ],
        },
      };

      window.localStorage.setItem("cart", JSON.stringify(newState));

      console.log("inside Else");

      console.log(state);

      return newState;

    case REMOVE_FROM_CART:
      console.log(action.cart);

      const newCart = {
        cart: {
          product: state.cart.product.filter((v) => v !== action.cart),
        },
      };

      window.localStorage.setItem("cart", JSON.stringify(newCart));

      return newCart;

    default:
      return state;
  }
}
