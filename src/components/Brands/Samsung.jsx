import { useLoaderData } from "react-router-dom";
import SamsungCard from "./BrandCard/SamsungCard";


const Samsung = () => {
  const products = useLoaderData();
  const samsungProduct = products.filter((product) => product.brand === "Samsung");
  console.log(samsungProduct);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {samsungProduct.map((product) => (
        <SamsungCard key={product._id} product={product}></SamsungCard>
      ))}
    </div>
  );
};

export default Samsung;
