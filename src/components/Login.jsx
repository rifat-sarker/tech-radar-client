import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [success, setSucccess] = useState("");
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password}
        console.log(user);

        signIn(email,password)
        .then((result)=> {
            console.log(result.user);
            toast.success("Accound created successfully", {
                duration: 2000,
                position: "bottom-center",
              });

        })
        .catch(error => {
            console.error(error)
        })
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name = 'email'
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
                  name = 'password'
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
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Don't have an account? Please <Link className="btn" to="/register">Register</Link></p>
              {success && <p className="text-green-600"> {success} </p>}
            </form>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
