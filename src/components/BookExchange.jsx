import React from 'react';

const BookExchange = () => {
    return (
        <div>
            Exchange <div className="hero bg-base-200 min-h-screen w-full">
        <div className=" flex-col lg:flex-row-reverse">
          
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">BooK Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Seller name"
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
                  placeholder="Number"
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
                  placeholder="Seller name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book  url</span>
                </label>
                <input
                  type="text"
                  placeholder="Seller name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Wanted Book</span>
                </label>
                <input
                  type="text"
                  placeholder="Book name"
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default BookExchange;