import { useLoaderData } from "react-router-dom";
import SonyCard from "./BrandCard/SonyCard";

const Sony = () => {
  const products = useLoaderData();
  const sonyProduct = products.filter(
    (product) => product.brand === "Sony"
  );
  console.log(sonyProduct);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {sonyProduct.map((product) => (
        <SonyCard key={product._id} product={product}></SonyCard>
      ))}
    </div>
  );
};

export default Sony;
