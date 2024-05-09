const OfferPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://i.ibb.co/MpWnj0w/high-angle-shot-blue-cellphone-headphones-laptop-origami-wooden-surface.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="my-16 h-72 bg-slate-100 border relative rounded-md hover:scale-[1.01] transform ease duration-500"
    >
      <div className="absolute left-20 bottom-32 font-semibold space-y-2 ">
        <h3>Sale Offer - 20% Off this week</h3>
        <h3 className="lg:text-4xl font-semibold">
          Accessories naturally colorful 2019
        </h3>
        <p>
          Starting at{" "}
          <span className="text-blue-600 text-2xl font-bold">$1209</span>
        </p>
      </div>
    </div>
  );
};

export default OfferPage;
