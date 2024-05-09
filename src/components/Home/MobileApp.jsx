
const MobileApp = () => {
  return (
    <div className="my-12">
      <div className="hero-content flex-col items-center justify-around lg:flex-row-reverse">
        <img
          src={"https://i.ibb.co/ZNB0tPp/Tech-Radar-logo-RGB.png"}
          className="max-w-sm h-80 w-80  rounded-full shadow-2xl"
        />
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">Good News!</h1>
          <p className="py-6 font-semibold">
            You can also visit our website via Tech Radar mobile app. You can
            download it from Google Play Store and App Store.
          </p>
          <div className="flex flex-wrap gap-4 text-center">
            <button className=" w-full rounded bg-rose-600 px-4 py-3  text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
              Download
              <svg
                className="h-6 w-12 inline pl-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="google-play"
              >
                <path
                  fill="#2196F3"
                  d="M8.32 7.68.58 15.42c-.37-.35-.57-.83-.57-1.35V1.93C.01 1.4.22.92.6.56l7.72 7.12z"
                ></path>
                <path
                  fill="#FFC107"
                  d="M15.01 8c0 .7-.38 1.32-1.01 1.67l-2.2 1.22-2.73-2.52-.75-.69 2.89-2.89L14 6.33c.63.35 1.01.97 1.01 1.67z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M8.32 7.68.6.56C.7.46.83.37.96.29 1.59-.09 2.35-.1 3 .26l8.21 4.53-2.89 2.89z"
                ></path>
                <path
                  fill="#F44336"
                  d="M11.8 10.89 3 15.74c-.31.18-.66.26-1 .26-.36 0-.72-.09-1.04-.29a1.82 1.82 0 0 1-.38-.29l7.74-7.74.75.69 2.73 2.52z"
                ></path>
              </svg>
            </button>
            <button className=" w-full rounded bg-rose-600 px-4 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
              Download
              <svg
                className="h-6 w-12 inline pl-2"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
                id="appstore"
              >
                <path
                  fill="url(#paint0_linear_147648_1522)"
                  d="M38.2992 0H9.69479C4.33746 0 0 4.338 0 9.696V38.31C0 43.662 4.33746 48 9.69479 48H38.3052C43.6565 48 48 43.662 48 38.304V9.696C47.994 4.338 43.6565 0 38.2992 0Z"
                ></path>
                <path
                  fill="#fff"
                  d="M23.7938 11.0281L24.7657 9.34806C25.3656 8.29806 26.7034 7.94406 27.7533 8.54406C28.8032 9.14406 29.1571 10.4821 28.5572 11.5321L19.1924 27.7441H25.9655C28.1613 27.7441 29.3911 30.3241 28.4372 32.1121H8.57971C7.36787 32.1121 6.39599 31.1401 6.39599 29.9281C6.39599 28.7161 7.36787 27.7441 8.57971 27.7441H14.147L21.2741 15.3901L19.0484 11.5261C18.4485 10.4761 18.8024 9.15006 19.8523 8.53806C20.9022 7.93806 22.228 8.29206 22.8399 9.34206L23.7938 11.0281ZM15.3709 34.3621L13.2711 38.0041C12.6712 39.0541 11.3334 39.4081 10.2835 38.8081C9.23363 38.2081 8.87968 36.8701 9.4796 35.8201L11.0394 33.1201C12.8032 32.5741 14.237 32.9941 15.3709 34.3621ZM33.4526 27.7561H39.1339C40.3457 27.7561 41.3176 28.7281 41.3176 29.9401C41.3176 31.1521 40.3457 32.1241 39.1339 32.1241H35.9783L38.108 35.8201C38.7079 36.8701 38.354 38.1961 37.3041 38.8081C36.2542 39.4081 34.9284 39.0541 34.3165 38.0041C30.7289 31.7821 28.0353 27.1261 26.2475 24.0241C24.4177 20.8681 25.7256 17.7001 27.0154 16.6261C28.4492 19.0861 30.591 22.8001 33.4526 27.7561Z"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_147648_1522"
                    x1="23.997"
                    x2="23.997"
                    y1="0"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0ED4FC"></stop>
                    <stop offset="1" stop-color="#0C57EF"></stop>
                  </linearGradient>
                </defs>
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
