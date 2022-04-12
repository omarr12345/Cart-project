import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { removeFromCart } from "../Store/actions/actions";

function CartItem(props) {
  const { item: product } = props;

  return (
    <div>
      <div className="card">
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name:{product.name}</h5>
          <p className="card-text">Quantity:{product.quantity}</p>
          <p className="card-text">Price:{product.price}$</p>
          <p className="card-text">
            TotalPrice:{product.price * product.quantity} $
          </p>

          <button
            className="btn btn-danger"
            onClick={() => props.removeFromCart(product)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> &nbsp; Remove
            from cart
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
