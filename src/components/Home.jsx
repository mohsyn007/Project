import React, { useState } from "react";
import Banner from "./Banner";
import moment from "moment";
import Authors from "./Authors";
import Books from "./Books";
import Footer from "./Footer";
import Navbar from "./Navbar";
import OldBooks from "./OldBooks";

const Home = () => {
  const [addToCart, setAddToCart] = useState([]);

  const handleAddToCart = (item) => {
    setAddToCart([...addToCart, item]);
  };

  return (
    <div className="text-center">
      <Navbar addToCart={addToCart} />
      <p>Today: {moment().format("MMMM Do YYYY")}</p>
      <Banner />
      <Authors handleAddToCart={handleAddToCart} />
      <Books handleAddToCart={handleAddToCart} />
      <OldBooks />
      <Footer />
    </div>
  );
};

export default Home;
