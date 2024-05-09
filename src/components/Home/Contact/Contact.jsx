import Swal from "sweetalert2";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const userInfo = { name, email, message };
    // console.log(userInfo);
    try {
      axiosPublic.post("/contact", userInfo);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your message has been sent",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl  mx-auto">
      <div className="lg:flex justify-between justify-items-center  gap-12 p-4 ">
       <div className="w-1/2 mx-auto">
       <form
          onSubmit={handleSubmit}
          className="flex flex-col  justify-center font-semibold  mx-auto"
        >
          <label className="" htmlFor="name">
            Name
          </label>
          <input
            className="px-6 py-2 mb-4 border rounded-md "
            type="text"
            name="name"
            id=""
            placeholder="Name"
          />

          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className="px-6 py-2 mb-4 border rounded-md "
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            cols={5}
            rows={5}
            className="rounded-md px-6 py-2 border mb-4"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <button className="px-6 py-2 shadow-md bg-pink-700 text-white rounded-md ">
            Submit
          </button>
        </form>
       </div>
        <div className="space-y-4 font-semibold w-1/2 mx-auto">
          <h1 className="text-3xl font-bold ">Contact Us</h1>
          <p >
          We're your one-stop destination for all things tech! From cutting-edge smartphones to must-have accessories, we've got you covered. At our e-commerce store, we're committed to bringing you the latest gadgets and top-notch service, ensuring your tech experience is always ahead of the curve
          </p>
          <p><HouseOutlinedIcon/> Address : Tangail, Dhaka, Bangladesh</p>
          <p><EmailOutlinedIcon/> rifatswd@gmail.com</p>
          <p><CallOutlinedIcon/> +8801642550487</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
