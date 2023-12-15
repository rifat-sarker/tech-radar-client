import { useLoaderData } from "react-router-dom";
import HuaweiCard from "./BrandCard/HuaweiCard";

const Huawei = () => {
  const products = useLoaderData();
  const huaweiProduct = products.filter(
    (product) => product.brand === "Huawei"
  );
  console.log(huaweiProduct);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {huaweiProduct.map((product) => (
        <HuaweiCard key={product._id} product={product}></HuaweiCard>
      ))}
    </div>
  );
};

export default Huawei;
