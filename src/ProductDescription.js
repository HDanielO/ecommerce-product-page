import { useState, useContext } from "react";

import { Context } from "./Home";

const ProductDescription = () => {
  const { order, displayBlock } = useContext(Context);
  const [orderAmount, setOrderAmount] = order;
  const [isDisplayBlock, setIsDisplayBlock] = displayBlock;

  const [counterNumber, setCounterNumber] = useState(0);

  const updateCart = () => {
    if (counterNumber > 0) {
      setOrderAmount(
        (previousOrderAmount) => previousOrderAmount + counterNumber
      );
      if (!isDisplayBlock) {
        setIsDisplayBlock(!isDisplayBlock);
      }
    }
  };

  const increaseCounter = () => {
    // let counter = counterNumber + 1;
    // setCounterNumber(counter);
    // document.querySelector(".count").textContent = counterNumber;
    //doing it this way won't work because react wont update the counterNumber immediately. if we call a function as an argument, that function will take in previous value as a parameter

    setCounterNumber((prevCount) => prevCount + 1);
  };

  const decreaseCounter = () => {
    // if (counterNumber > 0) {
    //   let counter = counterNumber - 1;
    //   setCounterNumber(counter);
    //   document.querySelector(".count").textContent = counterNumber;
    // }

    setCounterNumber((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="product-details-layout">
      <div className="product-description">
        <h3 className="product-company">SNEAKER COMPANY</h3>
        <h2 className="product-title">Fall Limited Edition Sneakers</h2>
        <p className="product-description-text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="product-pricing-layout">
        <div className="discount-layout">
          <p className="discounted-price">$125.00</p>
          <p className="discount-percentage">50%</p>
        </div>
        <del className="original-price">$250.00</del>
      </div>
      <div className="product-counter">
        <img
          src="/images/icon-minus.svg"
          alt="decrease button"
          id="decrease-btn"
          onClick={decreaseCounter}
        />
        <p className="count">{counterNumber}</p>
        <img
          src="/images/icon-plus.svg"
          alt="increase button"
          id="increase-btn"
          onClick={increaseCounter}
        />
      </div>
      <button className="add-to-cart-btn" onClick={updateCart}>
        <span>
          <img src="/images/icon-cart-black.svg" alt="" />
        </span>
        Add to cart
      </button>
    </div>
  );
};

export default ProductDescription;
