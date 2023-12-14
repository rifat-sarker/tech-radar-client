import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
// import ProductCard from "../components/ProductCard";

const Root = () => {
  // const products = useLoaderData();

  return (
    <div className="container mx-auto">
      <Outlet></Outlet>
      {/* <h1>Product length :{products.length} </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {
          products.map((product) => (
          <ProductCard
           key={product._id}
            product={product}></ProductCard>
        ))
        }
      </div> */}
    </div>
  );
};

export default Root;
