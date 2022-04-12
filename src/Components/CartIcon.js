import React from "react";
import "../CartIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CartIcon(props) {
  return (
    <div>
      <Link to="/Cart">
        <span className="badge badge-danger">{props.totalQuantity}</span>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="cart"
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalQuantity: state.cart.product.reduce(
      (total, item) => total + item.quantity,
      0
    ),
  };
};

export default connect(mapStateToProps)(CartIcon);
