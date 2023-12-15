import React from "react";

const BuyNow = () => {
  return (
    <div className="mt-8 w-full rounded-lg bg-base-200 shadow-xl">
      
      <div className="card-body items-center  text-center">
        <h2 className="card-title text-4xl font-bold mt-8">Buy Now!</h2>
        <p>Online shopping for Phones & Mobile Phones from a great selection at Toys & Games Store.</p>
          <button className="btn btn-success btn-outline my-4">Buy Now</button>
      </div>
      <figure className="">
        <img
          src="https://i.ibb.co/ZSbWdBg/1000-F-400050985-PNAag-Jm-V3v-Du-PN5-D2-JLa-LBgu7-XMFVRWl.jpg"
          className="rounded-xl w-full h-full"
        />
      </figure>
    </div>
  );
};

export default BuyNow;
