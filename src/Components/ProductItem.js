import React from "react";
import { Link } from "react-router-dom";

function productItems(props) {
  const { product } = props;

  return (
    <div>
      <div className="card">
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name:{product.name}</h5>
          <p className="card-text">Price:{product.price}$</p>
          <Link to={`/product/${product.Id}`} className="btn btn-primary">
            {product.details}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default productItems;
