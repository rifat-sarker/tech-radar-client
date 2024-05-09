import React, { useContext, useState } from "react";
import Navbar from "../shared/Navbar";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState('')
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {name, email, password };
    console.log(user);

    //clear success and error
    setSuccess('')
    setRegisterError('')

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    }
     else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your password should have at least one upper character");
      return;
    }
    else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
      setRegisterError("Password must contain at least one special character")
      return;
    }

    //create user
    createUser(email,password)
    .then((result) => {
        console.log(result.user);
        toast.success("Accound created successfully", {
            duration: 2000,
            position: "bottom-center",
          });
    })
    .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl mb-6 font-bold">Register Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">Register</button>
              </div>
              <p className="my-2">
                Already have an account? Please{" "}
                <Link className="underline" to="/login">
                  Login
                </Link>
              </p>
              {/* {success && <p className="text-green-600">{success}</p>} */}
              {success && <p className="text-green-700">{success}</p>}
              {registerError && <p className="text-red-500">{registerError}</p>}
              <ToastContainer></ToastContainer>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
