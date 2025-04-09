import { createContext, useState } from "react";
import Header from "./Header";
import Product from "./Products";
import CartDetails from "./CartDetails";

export const Context = createContext();

const Home = () => {
  const [orderAmount, setOrderAmount] = useState(0);
  const [isDisplayBlock, setIsDisplayBlock] = useState(false);
  const [isCartComponentBlock, setIsCartComponentBlock] = useState(false);

  return (
    <Context.Provider
      value={{
        order: [orderAmount, setOrderAmount],
        displayBlock: [isDisplayBlock, setIsDisplayBlock],
        cartComponentBlock: [isCartComponentBlock, setIsCartComponentBlock],
      }}
    >
      <main>
        <Header></Header>
        <CartDetails></CartDetails>
        <Product></Product>
      </main>
    </Context.Provider>
  );
};

export default Home;
