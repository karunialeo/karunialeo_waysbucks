import React, { useState, useContext } from "react";

import { API } from "../../config/api";

import { LockClosedIcon } from "@heroicons/react/solid";
import { LogoWhite } from "../../exports/exportImages";
import { RegisteredContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function RegisterModal() {
  let navigate = useNavigate();

  const [registered, setRegistered] = useContext(RegisteredContext);

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { fullname, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/register", body, config);

      // Notification
      if (response.data.status === "Success...") {
        const alert = (
          <div
            className="flex items-center bg-green-600 rounded-md text-white text-sm px-4 py-3"
            role="alert"
          >
            <p>
              Successfully registered. Click{" "}
              <button
                className="font-bold"
                onClick={() => setRegistered(!registered)}
              >
                here
              </button>{" "}
              to login.
            </p>
          </div>
        );
        setMessage(alert);
        setForm({
          fullname: "",
          email: "",
          password: "",
        });
      } else {
        const alert = (
          <div
            className="flex justify-center items-center bg-red-600 text-white text-sm font-bold px-4 py-3"
            role="alert"
          >
            <p>{response.message}</p>
          </div>
        );
        console.log(response);
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <div
          className="flex justify-center items-center rounded-md text-red-600 border border-red-600 text-sm font-bold px-4 py-3"
          role="alert"
        >
          <p>Register Failed. Try Again</p>
        </div>
      );
      console.log(error);
      setMessage(alert);
    }
  };

  return (
    <>
      <div>
        <img className="mx-auto h-12 w-auto" src={LogoWhite} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-red">
          Register
        </h2>
      </div>
      {message && message}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px">
          <div>
            <label htmlFor="fullname" className="sr-only">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              value={fullname}
              onChange={handleChange}
              required
              className="appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm mb-4"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              className="appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm mb-4"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
              className="appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                aria-hidden="true"
              />
            </span>
            Sign Up
          </button>
          <p className="font-['Avenir-Book'] mt-3">
            Already have an account?{" "}
            <button
              type="button"
              className="font-bold"
              onClick={() => setRegistered(!registered)}
            >
              Click Here
            </button>
          </p>
        </div>
      </form>
    </>
  );
}
