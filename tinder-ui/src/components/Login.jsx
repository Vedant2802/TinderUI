import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("akshay@gmail.com");
  const [password, setPassword] = useState("Akshat@123");
  // console.log(emailId);
  // console.log(password);
  // axios already gives parsed json data , you do not have to do data.json() as in fetch
  const handleLoginAction = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7777/login", {
        emailId,
        password,
      });
      console.log("Login successful:", res.data);
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  // const handleLoginAction = () => {
  //   axios
  //     .post("http://localhost:7777/login", { emailId, password })
  //     .then((res) => {
  //       console.log("Login successful", res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       console.log("Login finished");
  //     });
  // };

  return (
    <div className="flex h-[100vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={emailId}
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => handleLoginAction(e)}
            >
              Login
            </button>
          </div>
        </form>

        {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
