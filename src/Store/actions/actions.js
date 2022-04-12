import { ADD_TO_CART } from "./type";
import { REMOVE_FROM_CART } from "./type";

export function addToCart(productInfo) {
  return {
    type: ADD_TO_CART,
    product: productInfo,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    cart: product,
  };
}
