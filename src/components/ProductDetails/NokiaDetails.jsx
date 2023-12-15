import { Link, useLoaderData } from "react-router-dom";

const NokiaDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className=" bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product.imageURL}
          alt="Shoes"
          className="rounded mx-auto  pb-4 h-96 max-w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>Brand Name : {product.brand}</p>
        <p>Type of Product : {product.type} </p>
        <p>Details : {product.description}</p>
        <p>Rating : {product.rating}</p>
        <p>Price : {product.price}</p>
        <div className="card-actions">
          <Link>
            <button className="btn btn-primary">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NokiaDetails;
