import React from "react";
import Swal from 'sweetalert2'

const Seller = () => {
  const handleSeller = (event) => {
    event.preventDefault();
    const form = event.target;
    const sellerName = form.sellerName.value;
    const number = form.number.value;
    const email = form.email.value;
    const BookName = form.BookName.value;
    const category = form.category.value;
    const about = form.about.value;
    const url = form.url.value;
    const NewBooks = { sellerName, number, email, BookName, category, about, url };
    console.log(NewBooks);
    // send data to server
    fetch('http://localhost:50001/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json' // Fixed typo here
      },
      body: JSON.stringify(NewBooks) // Removed extra semicolon
    })
    .then(res => res.json()) // Properly chained .then()
    .then(data => {
      console.log(data);
      if(data.InsertedId)
      {Swal.fire({
        title: 'Success!',
        text: 'Books Sold Successfully',
        icon: 'Success',
        confirmButtonText: 'Cool'
      })

      }
    })
  
  }
  return (
    <div>
      <form onSubmit={handleSeller}>
        <div className="hero bg-base-200 min-h-screen w-full">
          <div className="flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Seller name"
                    name="sellerName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bkash/Nagad</span>
                  </label>
                  <input
                    type="text"
                    name="number"
                    placeholder="Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book Name</span>
                  </label>
                  <input
                    type="text"
                    name="BookName"
                    placeholder="Book name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Book Category"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">About book</span>
                  </label>
                  <input
                    type="text"
                    name="about"
                    placeholder="About the book"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book URL</span>
                  </label>
                  <input
                    type="text"
                    name="url"
                    placeholder="URL"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <input type="submit" value="Sell Book" className="btn btn-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Seller;
