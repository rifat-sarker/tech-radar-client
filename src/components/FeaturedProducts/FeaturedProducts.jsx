import { useEffect, useState } from "react";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/accessories.json");
      const data = await res.json();
      // console.log(products);
      setProducts(data);
    } catch (error) {
      console.log("data fetching", error);
    }
  };

  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold mb-4">Featured Products</h1>
      <hr className="mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {products.map((product) => (
          <>
            <div className="flex gap-8 bg-base-200 h-full w-[350px] p-4 rounded-md hover:shadow-lg relative group border">
              <div>
                <p className="absolute left-28 top-2 z-10 bg-green-600 rounded-full w-10  flex items-center justify-center p-2 h-10 text-white my-1 text-sm">
                  {product.sale}
                </p>
                <p className="absolute left-28 top-[52px] z-10 bg-green-600 rounded-full w-10  flex items-center justify-center p-2 h-10 text-white my-1 text-sm">
                  {product.discount}
                </p>
                <img
                  className="h-32 w-32 p-2  group-hover:rotate-45"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-blue-600 text-xl">
                  {product.price}
                </p>
                <p>{product.name}</p>
                <button className="hidden group-hover:block absolute w-fit rounded bg-rose-600 px-6 py-2 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
