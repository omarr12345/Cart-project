import Products from "./Products.json";

export function getAllData() {
  return Promise.resolve(Products);
}

export function getProduct(id) {
  const product = Products.find((item) => item.id === id);
  return Promise.resolve(product);
}

export default { getAllData, getProduct };
