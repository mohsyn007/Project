import React from 'react';
import humayun from '../assets/humayun.jpeg';
import sunil from '../assets/sunil.jpeg';
import sordindu from '../assets/sordindu.jpeg';
import sofa from '../assets/sofa.jpg';

const Authors = () => {
    return (
        <div className="p-4">
            <div>
                <h3 className="text-3xl font-bold flex justify-center mt-10">Best Authors</h3>
            </div>
            <div className="mt-8 overflow-x-auto">
                <table className="table-auto w-full  ">
                    {/* Table Head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className=" p-2"></th>
                            <th className=" p-2">Name</th>
                            <th className=" p-2">Books and Category</th>
                            <th className=" p-2">Rating</th>
                            <th className=" p-2"></th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {[ 
                            {
                                name: "Humayun Ahmed",
                                nationality: "Bangladeshi",
                                book: "Opekkha",
                                category: "Novels",
                                rating: "7.7",
                                image: humayun,
                            },
                            {
                                name: "Sunil Gangopadhyay",
                                nationality: "Indian",
                                book: "Shei Somay",
                                category: "Time Trilogy",
                                rating: "8.9",
                                image: sunil,
                            },
                            {
                                name: "Ahmed Sofa",
                                nationality: "Bangladeshi",
                                book: "Ordhek Nari Ordhek Isshori",
                                category: "Novels",
                                rating: "7.5",
                                image: sofa,
                            },
                            {
                                name: "Shordindu Bandapaday",
                                nationality: "Indian",
                                book: "Byomkesh Bokshi",
                                category: "Detective",
                                rating: "9.2",
                                image: sordindu,
                            },
                        ].map((author, index) => (
                            <tr key={index}>
                                <th className=" p-2"></th>
                                <td className=" p-2">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={author.image} alt={author.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{author.name}</div>
                                            <div className="text-sm opacity-50">{author.nationality}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className=" p-2">
                                    {author.book}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{author.category}</span>
                                </td>
                                <td className=" p-2">{author.rating}</td>
                                <td className=" p-2">
                                    <button className="btn btn-warning">Buy Now!</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Authors;
