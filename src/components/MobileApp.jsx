import React from "react";

const MobileApp = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={"https://i.ibb.co/ZNB0tPp/Tech-Radar-logo-RGB.png"}
          className="max-w-sm rounded-full shadow-2xl w-full h-96"
        />
        <div>
          <h1 className="text-5xl font-bold">Good News!</h1>
          <p className="py-6">
            You can also visit our website via Tech Radar mobile app. You can
            download it from Google Play Store and App Store.
          </p>
          <div className="flex gap-8">
            <button className="btn btn-outline btn-accent">Download From <img className="h-8 w-8 rounded-lg"  src="https://i.ibb.co/sHHtyd3/google-play-store-logo-png-transparent-png-logos-10.png" alt="" /> </button>
            <button className="btn btn-outline btn-info">Download from <img className="h-6 w-6" src='https://i.ibb.co/v3zCHd4/icon-appstore-ev0z770zyxoy-large-2x.png' alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
