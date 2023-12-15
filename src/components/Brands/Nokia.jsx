import { useLoaderData } from "react-router-dom";
import NokiaCard from "./BrandCard/NokiaCard";

const Nokia = () => {
  const products = useLoaderData();
  const nokiaProduct = products.filter(
    (product) => product.brand === "Nokia"
  );
  console.log(nokiaProduct);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {nokiaProduct.map((product) => (
        <NokiaCard key={product._id} product={product}></NokiaCard>
      ))}
    </div>
  );
};

export default Nokia;
