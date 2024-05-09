import { useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const MyCart = () => {
  const [products, setProducts] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // get data
  const axiosPublic = useAxiosPublic();
  axiosPublic
    .get("/mycart")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  // remove product from the mycart
  const handleRemoveFromCart = (_id) => {
    axiosPublic
      .delete(`/mycart/${_id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product removed from mycart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="space-y-8 pt-24">
      {products.map((product) => {
        return (
          <div key={product._id}>
            <div className="shadow-lg  rounded-2xl lg:flex items-center justify-center p-4 gap-12">
              <div className="w-1/4 mx-auto">
                <img
                  className="h-full mx-auto w-full"
                  src={product.imageURL}
                  alt={product.name}
                />
              </div>
              <div className="space-y-4 w-3/4">
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
                  <span className="font-semibold">Rating :</span>{" "}
                  {product.rating}
                </p>
                <div>
                  <p>
                    <span className="font-semibold">Description :</span>{" "}
                    {showFullDescription
                      ? product.description // If showFullDescription is true, show full description
                      : `${product.description.slice(0, 500)}${
                          product.description.length > 500 ? "......" : "" // If description is longer than 100 characters, add ellipsis
                        }`}
                  </p>
                  {/* Display the 'Show more' button only if description length is greater than 500 */}
                  {product.description.length > 500 && (
                    <button onClick={toggleDescription}>
                      <span style={{fontWeight: "bold"}}>{showFullDescription ? "Show less": "Show more..."}</span>
                    </button>
                  )}
                </div>
                <div className="flex my-2 gap-4">
                  <Link>
                    <button className="px-6 py-2 shadow-md bg-pink-700 text-white rounded-md">
                      Checkout
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={() => handleRemoveFromCart(product._id)}
                      className="px-6 py-2 shadow-md bg-pink-700 text-white rounded-md"
                    >
                      Remove
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyCart;
