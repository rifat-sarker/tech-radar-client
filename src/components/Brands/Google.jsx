
import { useLoaderData } from "react-router-dom";
import GoogleCard from "./BrandCard/GoogleCard";

const Google = () => {
  const products = useLoaderData();
  const googleProduct = products.filter((product) => product.brand === "Google");
  console.log(googleProduct);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {googleProduct.map((product) => (
        <GoogleCard key={product._id} product={product}></GoogleCard>
      ))}
    </div>
  );
};

export default Google;
