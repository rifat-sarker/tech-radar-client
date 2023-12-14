import React from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";


const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const imageURL = form.imageURL.value;
    const newProduct = {name,brand,type,price,description,rating,imageURL}
    console.log(newProduct);
    fetch('http://localhost:5000/product', {
        method: "POST",
        headers : {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: 'Product added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
    
  };
  
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-4xl font-bold text-center pt-8">Add New Product</h1>
      <p className="text-center my-4 font-semibold">
        New technology product introduction strategy with considerations for <br />
        consumer-targeted policy intervention and new market entrant
      </p>
      <form onSubmit={handleAddProduct}>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 mx-auto container">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl ">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl">Brand </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="brand"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl">Type of Product</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="imageURL"
                placeholder="image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <br />
        </div>
        <div className="w-1/2 mx-auto my-4 rounded-lg">
        <input type="submit" value="Add Product" className="btn text-xl btn-block" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
