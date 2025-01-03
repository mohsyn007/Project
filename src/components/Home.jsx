import React, { useState } from "react";
import Banner from "./Banner";
import moment from "moment";
import Authors from "./Authors";
import Books from "./Books";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  const [addToCart, setAddToCart] = useState([]);
  const handleAddToCart = (book, name, category) => {
    const newCart = [...addToCart, book];
    setAddToCart(newCart);
  };
  return (
    <div className="text-center ">
      <Navbar addToCart={addToCart.length}></Navbar>
      <p>Today: {moment().format("MMMM Do YYYY")}</p>
      <Banner></Banner>
      <Authors handleAddToCart={handleAddToCart}></Authors>
      <Books></Books>
      <Footer></Footer>
    </div>
  );
};

export default Home;
