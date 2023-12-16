import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const NokiaUpdate = () => {
  const product = useLoaderData();
  console.log(product);
  const { _id, name, brand, type, price, description, rating, imageURL } =
    product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const imageURL = form.imageURL.value;
    const updatedProduct = {
      name,
      brand,
      type,
      price,
      description,
      rating,
      imageURL,
    };
    console.log(updatedProduct);

    //send to the server
    fetch(`https://tech-radar-server.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Product Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-8">Update Product</h1>
      <form onSubmit={handleUpdateProduct}>
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
                defaultValue={name}
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
                defaultValue={brand}
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
                defaultValue={type}
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
                defaultValue={price}
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
                defaultValue={description}
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
                defaultValue={rating}
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
                defaultValue={imageURL}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <br />
        </div>
        <div className="w-1/2 mx-auto my-4 rounded-lg">
          <input
            type="submit"
            value="Update Product"
            className="btn text-xl btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default NokiaUpdate;
