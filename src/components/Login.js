import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background-image"
        />
      </div>
      <form className=" w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className=" font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignForm && (
          <input
            type="text"
            placeholder="Enter Name"
            className=" p-2 my-2 w-full bg-gray-600 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Enter Email Address"
          className=" p-2 my-2 w-full bg-gray-600 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter password"
          className=" p-2 my-2 w-full  bg-gray-600 rounded-lg"
        />
        <button className=" w-full bg-red-700 py-2 my-4  rounded-lg">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignForm
            ? "New to Netflix Sign Up Now"
            : "Already registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
