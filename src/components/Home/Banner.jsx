import banner2 from "../../assets/banner2.png";
import banner7 from "../../assets/banner7.png";
import banner8 from "../../assets/banner8.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div ref={sliderRef} className="keen-slider  pt-16">
      <div className="keen-slider__slide number-slide1 lg:flex text-center items-center gap-12 justify-center h-screen">
        <div
          data-aos="slide-right"
          data-aos-duration="000"
          className="space-y-4 w-1/2 mx-auto   p-4 text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl   font-bold">
            Iphone 15 <span className="text-rose-600">Pro Max</span>
          </h1>
          <p className="font-semibold ">
            Featuring a strong and lightweight titanium design with new ,
            contoured edges a new Action button, powerful camera upgrades, and
            A17 Pro for next-level performance and mobile gaming.
          </p>
          <button className="block mx-auto lg:mx-0  rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
            Shop Now
          </button>
        </div>
        <div className="w-1/2 mx-auto ">
          <img className="" src={banner2} alt="banner_img" />
        </div>
      </div>

      {/* banner 2 */}
      <div className="keen-slider__slide number-slide2 lg:flex items-center gap-12 justify-center  h-screen ">
        <div
          data-aos="slide-right"
          data-aos-duration="000"
          className="space-y-4 p-4 w-1/2 mx-auto text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl   font-bold">
            Iphone 14 <span className="text-rose-600">Pro Max</span>
          </h1>
          <p className="font-semibold ">
            Featuring the Always-On display, the first-ever 48MP camera on
            iPhone, Crash Detection, Emergency SOS via satellite, and an
            innovative new way to receive notifications and activities with the
            Dynamic Island.
          </p>
          <button className="block mx-auto lg:mx-0  rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
            Buy Now
          </button>
        </div>
        <div className="w-1/2 mx-auto ">
          <img className="" src={banner8} alt="banner_img" />
        </div>
      </div>

      {/* banner 3 */}
      <div className="keen-slider__slide number-slide1 lg:flex items-center gap-12 justify-center h-screen">
        <div className="space-y-4 w-1/2 mx-auto p-4 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl  font-bold">
            Next-Level Wireless <br />
            <span className="text-rose-600">
              Performance and <br /> Connectivity
            </span>
          </h1>
          <p className="font-semibold ">
            The iPhone 15 Pro lineup offers convenient new ways to charge, find
            friends in busy places, and stay connected while traveling. Both
            models use the USB‑C connector, a universally accepted standard for
            charging and transferring data,allowing the same cable to charge
            iPhone, Mac, iPad, and the updated AirPods Pro (2nd generation).
          </p>
          <button className="block mx-auto lg:mx-0 rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
            Shop Now
          </button>
        </div>
        <div className="w-1/2 mx-auto">
          <img className="mx-auto" src={banner7} alt="banner_img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
