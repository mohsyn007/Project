import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = ({ addToCart }) => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart visibility

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {});
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    console.log("Cart toggled:", !isCartOpen); // Debugging: Check if toggleCart works
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
      <li>
        <NavLink to={"/seller"}>Seller</NavLink>
      </li>
      <li>
        <NavLink to={"/exchange"}>Book Exchange</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/orders"}>Orders</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to={"/cart"}>Cart </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Management</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Cart Icon */}
      <div className="ml-96">
        <div className="indicator">
          <button onClick={toggleCart}> {/* Handle Cart Icon Click */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <span className="badge badge-sm indicator-item">{addToCart.length}</span>
        </div>
      </div>
   {/* Cart Modal */}
   {isCartOpen && (
        <div className="absolute top-16 right-0 w-80 bg-white shadow-lg flex-col p-4 z-10">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2> {/* Separate Cart Header */}
          {addToCart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <ol className="list-decimal pl-5 space-y-2">
              {/* Map over addToCart array and display book titles */}
              {addToCart.map((item, index) => (
                <li  key={index} className="flex py-1 px-5 border bg-blue-500">
                 <p> {item.book || item.name} </p>
                 <p>{item.price}</p>
                </li>
              ))}
              <button className="btn btn-accent">Payment Now</button>
            </ol>
            
          )}
        </div>
      )}

      <div className="navbar-end">
        {user ? (
          <>
            <span>{user.email}</span>
            <a onClick={handleSignOut} className="btn">
              SignOut
            </a>
          </>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
