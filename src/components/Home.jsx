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
  const handleAddToCart = (book, name, category,price) => {
    const newCart = [...addToCart, book];
    setAddToCart(newCart);
  };
  
  return (
    <div className="text-center ">
      <Navbar addToCart={addToCart}></Navbar>
      <p>Today: {moment().format("MMMM Do YYYY")}</p>
      <Banner></Banner>
     <Authors handleAddToCart={handleAddToCart}></Authors>
      <Books handleAddToCart={handleAddToCart}></Books>
      <OldBooks></OldBooks>
      <Footer></Footer>
    </div>
  );
};

export default Home;
