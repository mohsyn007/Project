import React, { useEffect, useState } from 'react';

const OldBooks = () => {
  const [sellers, setSellers] = useState([]);  // Corrected variable name
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null);     // Added error state

  useEffect(() => {
    fetch('http://localhost:50001/seller')
      .then((res) => {
        if (!res.ok) {  // Check if response is not OK
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setSellers(data);
        setLoading(false);  // Stop loading after data is fetched
      })
      .catch((error) => {
        setError(error.message);  // Set error message
        setLoading(false);        // Stop loading even in case of an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Error message
  }

  return (
    <div>
    <h3 className="text-3xl font-bold text-center mt-10">Buy Used Books (50% Off)</h3>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 container mx-auto">
      {sellers.map((seller) => (
        <div key={seller.id} className="card max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={seller.url}
            alt={seller.BookName}
            className="w-full h-100 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold">{seller.BookName}</h4>
            <p className="text-sm text-gray-600">{seller.about}</p>
            <p className="mt-2 font-medium text-gray-800">Category: {seller.category}</p>
           
            
            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(seller.BookName, seller.about, seller.category)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  

  );
};

export default OldBooks;
