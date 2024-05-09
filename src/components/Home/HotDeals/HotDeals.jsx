import { useEffect, useState } from "react";

const HotDeals = () => {
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
    <>
      <div className="mt-24 ">
        <h1 className="text-4xl font-bold mb-4">Hot Deals Products</h1>
        <hr className="mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-5">
          {products.map((product) => (
            <>
              <div
                key={product.id}
                className="hover:shadow-xl rounded-md text-center space-y-2 p-4 h-full w-52 relative group"
              >
                <div>
                  <img
                    className="h-32 w-32  mx-auto group-hover:rotate-90"
                    src={product.image}
                    alt=""
                  />
                </div>
                <button className="absolute  hidden group-hover:block  left-1/2 transform -translate-x-1/2  w-1/2 rounded bg-rose-600 px-2 py-2 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                  Add to Cart
                </button>
                <p className="font-bold text-blue-600 text-xl pt-8">
                  {" "}
                  {product.price}{" "}
                </p>
                <p>{product.name}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotDeals;
