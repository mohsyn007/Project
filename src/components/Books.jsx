import React, { useState, useEffect } from "react";

const Books = ({ handleAddToCart }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the books data from books.json
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center mt-10">
        Our Best Selling Books
      </h3>
      <div className="grid grid-cols-4 gap-0.5 mt-8 container mx-auto">
        {books.map((book) => (
          <div
            key={book.id}
            className="card max-w-xs bg-white shadow-xl rounded-lg"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{book.title}</h4>
              <p className="text-sm text-gray-600">{book.description}</p>
              <p className="mt-2 font-medium text-gray-800">
                Category: {book.category}
              </p>
              <p className="mt-2 text-gray-700">Price: ${book.price}</p>
              {/* Add to Cart Button */}
              <button
               onClick={() =>
                handleAddToCart({
                  book: book.book, 
                  price: book.price,
                })
              }
              
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
