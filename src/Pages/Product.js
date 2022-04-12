import React from "react";
import "../Api/Products.json";
import apiProduct from "../Api/products";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addToCart } from "../Store/actions/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Product(props) {
  const params = useParams();
  const id = params.id;

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function handleQuantity(e) {
    const value = e.target.value;

    if (value < 0) {
      return 0;
    } else {
      setQuantity(Number(value));

      setProduct({
        ...product,
        quantity: Number(value),
      });
    }
  }

  useEffect(() => {
    apiProduct.getProduct(parseInt(id)).then((product) => {
      setTimeout(() => {
        setProduct(product);
        setLoading(false);
      }, 2000);
    });
  }, []);

  useEffect(() => {
    setPrice(Number(product.price) * quantity);
  }, [product.price, quantity]);

  if (loading) {
    return "loading ..";
  }
  return (
    <div>
      <div className={"row"}>
        <div className="col-md-6">
          <img src={product.img} className="card-img-top" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title"> {product.name} </h5> <br />
            <p className="card-text"> Price: {product.price}$ </p>
            <p className="card-text"> Details: {product.details} </p>
            <input type="number" value={quantity} onChange={handleQuantity} />
            <br /> <br />
            <p> Total Price: {price}$ </p>
            <Link
              to="/cart"
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                props.addToCart(product);
              }}
            >
              <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon> &nbsp;
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo) => dispatch(addToCart(productInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
