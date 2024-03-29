import { Link } from "react-router-dom";


const AppleCard = ({ product }) => {
  const {_id, brand, name, imageURL, price, rating, type } = product;
  return (
    <div>
      <div className="card  lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-auto w-full rounded-lg" src={imageURL} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className=" btn  btn-neutral">{name}</h2>
          <div className="flex gap-4">
            <h3 className="btn btn-neutral">{brand}</h3>
            <p className="btn btn-neutral">{type}</p>
          </div>
            <button className="btn btn-neutral">{price}</button>
            <button className="btn btn-neutral ">{rating}</button>
            <div className="flex gap-4 justify-center">
              <Link to={`updateProduct/${_id}`}><p className="btn  btn-neutral">Update</p></Link>
              <Link to={`details/${_id}`}><p className="btn  btn-neutral">Details</p></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppleCard;
