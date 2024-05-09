import { Link, useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

const Brand = () => {
  const { brand } = useParams();
  const [products] = useProduct();
  // console.log(products);
  // console.log(brand);
  const productBrand = products.filter((product) => product.brand === brand);
  // console.log(productBrand);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-12 pt-24">
      {productBrand.map((brand) => (
        <div className="lg:flex items-center p-4 justify-center   gap-8" key={brand._id}>
            <div className="w-1/2 mx-auto">
            <img className=" h-full w-full  rounded-lg" src={brand.imageURL} alt={brand.name} />
            </div>
            <div className="w-1/2 space-y-4 mx-auto">
            <h2 className="text-3xl font-semibold">{brand.name}</h2>
            <p><span className="font-semibold">Brand:</span> {brand.brand}</p>
            <p><span className="font-semibold">Type :</span> {brand.type}</p>
            <p><span className="font-semibold">Price :</span> {brand.price}</p>
            <p><span className="font-semibold">Rating :</span> {brand.rating}</p>
            <div className="flex my-2 font-semibold text-slate-100 gap-4">
              <Link to={`/updateProduct/${brand._id}`}>
                <button className="px-6 py-2 shadow-md bg-pink-700  rounded-md">Update</button>
              </Link>
              <Link to={`/${brand.brand}/details/${brand._id}`}>
                <button className="px-6 py-2 shadow-md bg-pink-700  rounded-md">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;
