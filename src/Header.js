import { useContext } from "react";

import { Context } from "./Home";

const openMenu = () => {
  const menuContainerElm = document.querySelector(".menu-container");
  const bodyHTML = document.querySelector("body");
  menuContainerElm.classList.remove("displayNone");
  bodyHTML.classList.add("remove-scrolling");
};
const closeMenu = () => {
  const menuContainerElm = document.querySelector(".menu-container");
  menuContainerElm.classList.add("displayNone");
  const bodyHTML = document.querySelector("body");
  bodyHTML.classList.remove("remove-scrolling");
};

const Header = () => {
  const { order, displayBlock } = useContext(Context);
  const [orderAmount, setOrderAmount] = order;
  const [isDisplayBlock, setIsDisplayBlock] = displayBlock;

  return (
    <div className="Header">
      <div className="header-layout-left">
        <img
          src="/images/icon-menu.svg"
          alt="hamburger icon"
          id="open-menu-icon"
          onClick={openMenu}
        />
        <img src="/images/logo.svg" alt="sneaker logo" id="logo" />
        <div className="menu-container displayNone">
          <nav className="nav-bar">
            <img
              src="/images/icon-close.svg"
              alt="close icon"
              id="close-menu-icon"
              onClick={closeMenu}
            />
            <div className="nav-layout">
              <div className="nav-overflow">
                <ul>
                  <li>Collection</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="header-layout-right">
        <div className="cart-icon-layout">
          <img src="/images/icon-cart.svg" alt="cart icon" id="cart-icon" />
          <p
            className="order-amount-logo"
            style={{
              display: isDisplayBlock ? "block" : "none",
            }}
          >
            {orderAmount}
          </p>
        </div>
        <img src="/images/image-avatar.png" alt="avatar" id="user-avatar" />
      </div>
    </div>
  );
};

export default Header;
