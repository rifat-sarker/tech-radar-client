import Swal from "sweetalert2";
import useProduct from "../../../hooks/useProduct";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {
  const [products] = useProduct();
  const { id } = useParams();
  const productId = products.filter((product) => product._id === id);
  // console.log(productId);

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
    fetch(`http://localhost:5000/product/${id}`, {
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
    <div className="pt-24">
      {productId.map((product) => (
        <form key={product._id} onSubmit={handleUpdateProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 mx-auto container">
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl ">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  defaultValue={product.name}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text  text-xl">Brand </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="brand"
                  defaultValue={product.brand}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text  text-xl">Type of Product</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="type"
                  defaultValue={product.type}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text  text-xl">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  defaultValue={product.price}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text  text-xl">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  defaultValue={product.description}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text  text-xl">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  defaultValue={product.rating}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text  text-xl">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="imageURL"
                  placeholder="image URL"
                  defaultValue={product.imageURL}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <br />
          </div>
          <div className="w-1/2 mx-auto my-4 rounded-lg">
            <button className="block mx-auto w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">Update Product</button>
          </div>
        </form>
      ))}
    </div>
  );
};

export default ProductUpdate;
