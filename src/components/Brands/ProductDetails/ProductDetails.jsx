import { useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const BrandDetails = () => {
  const { id } = useParams();
  const [data] = useProduct();
  const axiosPublic = useAxiosPublic();


  // add product to the mycart
  const handleAddToCart = (product) => {
    axiosPublic.post("/mycart", product).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added to cart successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const productDetails = data.filter((product) => product._id === id);
  // console.log(productDetails);
  return (
    <div className="pt-24 px-4">
      {productDetails.map((product) => (
        <div
          className="flex flex-col items-center justify-center gap-8"
          key={product._id}
        >
          <img
            className="h-72 w-72  rounded-lg"
            src={product.imageURL}
            alt="Album"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{product.name}</h2>
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">Type :</span> {product.type}
            </p>
            <p>
              <span className="font-semibold">Price :</span> {product.price}
            </p>
            <p>
              <span className="font-semibold">Rating :</span> {product.rating}
            </p>
            <p>
              <span className="font-semibold">Description : </span>
              {product.description}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="block mx-auto mt-12 w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandDetails;
