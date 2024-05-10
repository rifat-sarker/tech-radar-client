
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
    fetch('https://tech-radar-server.vercel.app/product', {
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
    <div className="pt-24 ">
      <h1 className="text-5xl font-bold text-center ">Add  New Product</h1>
      <p className="text-center my-4 font-semibold">
        New technology product introduction strategy with considerations for <br />
        consumer-targeted policy intervention and new market entrant
      </p>
      <form onSubmit={handleAddProduct}>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 mx-auto container">
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-xl ">Name</span>
            </label>
            <label className="input-group text-black">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered   w-full"
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
                className="input input-bordered  w-full"
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
                className="input input-bordered  w-full"
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
                className="input input-bordered  w-full"
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
                className="input input-bordered  w-full"
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
                className="input input-bordered  w-full"
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
                className="input input-bordered  w-full"
              />
            </label>
          </div>
          <br />
        </div>
        <div className="w-1/2 mx-auto my-4 rounded-lg">
      <button className="block mx-auto w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">Add Product</button>
      </div>
      </form>
    </div>
  );
};

export default AddProduct;
