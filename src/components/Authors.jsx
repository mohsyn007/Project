import React, { useState, useEffect } from "react";

const Authors = ({ handleAddToCart }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Here you should be fetching your authors data, assuming authors.json exists in the public directory
    fetch("authors.json")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center mt-10">
        Best Authors Books
      </h3>
      <div className="grid grid-cols-4 gap-0.5 mt-8 ml-2 container mx-auto">
        {authors.map((author) => (
          <div
            key={author.id}
            className="card max-w-xs bg-white shadow-xl rounded-lg"
          >
            <img
              src={author.image}
              alt={author.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{author.name}</h4>
              <p className="text-sm text-gray-600">{author.nationality}</p>
              <p className="mt-2 font-medium text-gray-800">{author.book}</p>
              <span className="badge bg-blue-200 text-blue-800 mt-1">
                {author.category}
              </span>
              <p className="mt-2 text-gray-700">Price: {author.price}</p>
              {/* Add to Cart Button */}
              <button
                onClick={() =>
                  handleAddToCart({
                    name: author.name,
                    price: author.price,
                    category: author.category,
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

export default Authors;
