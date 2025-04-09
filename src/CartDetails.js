import { useContext } from "react";

import { Context } from "./Home";

const CartDetails = () => {
  const { order, displayBlock, cartComponentBlock } = useContext(Context);
  const [orderAmount, setOrderAmount] = order;
  const [isDisplayBlock, setIsDisplayBlock] = displayBlock;

  const [isCartComponentBlock, setIsCartComponentBlock] = cartComponentBlock;

  const deleteCheckout = () => {
    setOrderAmount(0);
    setIsDisplayBlock(false);
  };

  return (
    <div
      className="cart-details-layout"
      style={{
        display: isCartComponentBlock ? "block" : "none",
      }}
    >
      <h3 className="heading">Cart</h3>
      <div className="details">
        <p
          className="empty-message displayNone"
          style={{
            display: orderAmount === 0 ? "block" : "none",
          }}
        >
          Your cart is empty.
        </p>

        <div
          className="order-list-layout"
          style={{
            display: orderAmount > 0 ? "block" : "none",
          }}
        >
          <div className="order-item-layout">
            <img
              src="/images/image-product-1-thumbnail.jpg"
              alt=""
              className="order-item-thumbnail"
            />
            <div className="order-item-detail-layout">
              <p className="item-name">Fall Limited Edition Sneakers</p>
              <p className="item-price">
                $120 × {orderAmount}
                <span className="item-total-price"> ${120 * orderAmount}</span>
              </p>
            </div>
            <img
              src="/images/icon-delete.svg"
              alt=""
              className="delete-icon"
              onClick={deleteCheckout}
            />
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

// disable scrolling, and hide the scroll buttons of product slider when this is clicked.

export default CartDetails;
