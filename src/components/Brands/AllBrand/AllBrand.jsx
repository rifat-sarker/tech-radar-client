import { Link, useLoaderData } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AllBrand = () => {
  const data = useLoaderData();

  // console.log(data);
  return (
    <div className=" max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">All Brands</h1>
      <hr />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center mt-12 gap-10">
        {data.map((product) => (
          <div className="hover:scale-105 rounded duration-1000" key={product.id}>
            <div className="">
              <Link to={`/${product.brand}`}>
                <Card className="w-[350px]" >
                  <CardActionArea>
                   <img className="h-44 w-full" src={product.image} alt="product_image" />
                    <CardContent>
                      <Typography fontWeight={"bold"} gutterBottom variant="h5" component="div">
                        {product.brand}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Discover the innovative world of Apple
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBrand;
