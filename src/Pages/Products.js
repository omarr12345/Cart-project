import React, { useEffect, useState } from "react";
import "../Products.css";
import ProductItem from "../Components/ProductItem";
import productsApi from "../Api/products";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      productsApi.getAllData().then((Data) => {
        setProducts(Data);
      });
      navigate("/products");
    }

    if (!authToken) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className={"col-md-4"} key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
