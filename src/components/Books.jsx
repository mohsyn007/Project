import React from 'react';
import books1 from '../assets/rokimg_20150126_92970.gif';
import books2 from '../assets/rokimg_20151114_105485.gif';
import books3 from '../assets/Electric_Circuits_Fundamentals-Thomas_L_Floyd-0ceca-297059.jpg';

// Array of book details
const books = [
   {
       title: "C Programming",
       description: "If a dog chews shoes whose shoes does he choose?",
       image: books1,
   },
   {
       title: "Electric Circuits",
       description: "If a dog chews shoes whose shoes does he choose?",
       image: books3,
   },
   {
       title: "C Programming",
       description: "If a dog chews shoes whose shoes does he choose?",
       image: books2,
   },
   {
       title: "C Programming",
       description: "If a dog chews shoes whose shoes does he choose?",
       image: books1,
   },
   {
       title: "Electric Circuits",
       description: "If a dog chews shoes whose shoes does he choose?",
       image: books3,
   },
   {
       title: "C Programming",
       description: "If a dog chews shoes whose shoes does he choose?",
       image: books2,
   },
];

const Books = () => {
    return (
        <div className="mb-8 mt-8">
            <h3 className="text-3xl font-bold flex justify-center mt-6 mb-4">Our Best Selling Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
                {books.map((book, index) => (
                    <div
                        key={index}
                        className="card card-compact bg-base-100 w-64 mx-auto mt-1 rounded shadow-md"
                    >
                        <figure>
                            <img src={book.image} alt={book.title} className="h-48 w-full object-cover" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg">{book.title}</h2>
                            <p className="text-sm">{book.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary btn-sm">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;
