import React, { useContext } from "react";

import { LockClosedIcon } from "@heroicons/react/solid";
import { LogoWhite } from "../../exports/exportImages";
import { LoginContext, RegisteredContext } from "../contexts/AuthContext";
import { ModalContext } from "../contexts/ModalContext";

export default function LoginModal() {
  const [registered, setRegistered] = useContext(RegisteredContext);
  const [login, setLogin] = useContext(LoginContext);
  const [open, setOpen] = useContext(ModalContext);

  return (
    <>
      <div>
        <img className="mx-auto h-12 w-auto" src={LogoWhite} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-red">
          Login
        </h2>
      </div>
      <form className="mt-8 space-y-6" action="/" method="post">
        <div className="-space-y-px">
          <div className="mb-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              className="appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
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
              autoComplete="current-password"
              className="appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="button"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              setLogin(!login);
              setOpen(!open);
            }}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                aria-hidden="true"
              />
            </span>
            Login
          </button>
          <p className="font-['Avenir-Book'] mt-3">
            Don't have an account?{" "}
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
