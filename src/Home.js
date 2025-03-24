import { createContext, useState } from "react";
import Header from "./Header";
import Product from "./Products";

export const Context = createContext();

const Home = () => {
  const [orderAmount, setOrderAmount] = useState(0);
  const [isDisplayBlock, setIsDisplayBlock] = useState(false);

  return (
    <Context.Provider
      value={{
        order: [orderAmount, setOrderAmount],
        displayBlock: [isDisplayBlock, setIsDisplayBlock],
      }}
    >
      <main>
        <Header></Header>
        <Product></Product>
      </main>
    </Context.Provider>
  );
};

export default Home;
