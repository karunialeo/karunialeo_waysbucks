import { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Transactions from "../tempDatabase/Transactions";

function Navbar(props) {
  const [openLogin, setOpenLogin] = useState(props.openLogin);
  const [openRegister, setOpenRegister] = useState(false);

  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  function showProfileMenu() {
    setOpenProfileMenu(!openProfileMenu);
  }

  const cancelButtonRef = useRef(null);

  function toggleLoggedIn() {
    setOpenLogin(false);
    setOpenRegister(false);
    props.onClick();
  }

  function registered() {
    setOpenRegister(false);
    setOpenLogin(true);
  }

  function notRegistered() {
    setOpenLogin(false);
    setOpenRegister(true);
    props.onClick();
  }

  return (
    <>
      <nav className="mx-4 lg:mx-20 mt-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
        <div className="space-x-5">
          {props.isLogin ? (
            <div className="flex items-center relative">
              <Link to="/my-cart" className="relative">
                <img
                  src="/img/shopping-basket.png"
                  alt="shopping-basket"
                  className="mx-8"
                />
                {Transactions.length > 0 ? (
                  <div className="w-5 h-5 text-xs text-white font-bold bg-red-600 rounded-full absolute right-6 -top-1 flex justify-center items-center">
                    {Transactions.length}
                  </div>
                ) : null}
              </Link>
              <Menu as="div" className="relative z-10">
                <div>
                  <Menu.Button>
                    <span className="sr-only">Open user menu</span>
                    <img
                      src={
                        `/img/` + (props.isAdmin ? `admin` : `user`) + `.png`
                      }
                      alt="user"
                      className="h-14 w-14 object-cover rounded-full border-2 border-brand-red"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {props.isAdmin ? (
                      <>
                        <Menu.Item>
                          <Link
                            to="/add-product"
                            className="p-4 flex items-center hover:bg-gray-100"
                          >
                            <img
                              src="/img/drink-icon.png"
                              className="w-5 mr-2"
                              alt="drink"
                            />
                            Add Product
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/add-topping"
                            className="p-4 flex items-center hover:bg-gray-100"
                          >
                            <img
                              src="/img/topping-icon.png"
                              className="w-5 mr-2"
                              alt="topping"
                            />
                            Add Topping
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/transactions"
                            className="p-4 flex items-center hover:bg-gray-100"
                          >
                            <img
                              src="/img/user-icon.png"
                              className="w-5 mr-2"
                              alt="topping"
                            />
                            Transactions
                          </Link>
                        </Menu.Item>
                      </>
                    ) : (
                      <Menu.Item>
                        <Link
                          to="/customer"
                          className="p-4 flex items-center hover:bg-gray-100"
                        >
                          <img
                            src="/img/user-icon.png"
                            className="w-5 mr-2"
                            alt="topping"
                          />
                          My Profile
                        </Link>
                      </Menu.Item>
                    )}
                    <hr />
                    <Menu.Item>
                      <div
                        onClick={() => toggleLoggedIn()}
                        to="/"
                        className="p-4 flex items-center hover:bg-gray-100 cursor-pointer"
                      >
                        <img
                          src="/img/logout-icon.png"
                          className="w-5 mr-2"
                          alt="logout"
                        />
                        Logout
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <>
              <button
                type="button"
                className="rounded px-3 lg:px-5 py-1 text-brand-red border-2 text-[Product-Sans] border-brand-red box-border"
                onClick={() => setOpenLogin(true)}
              >
                Login
              </button>
              <button
                type="button"
                className="rounded px-3 lg:px-5 py-1 text-white border-2 border-brand-red bg-brand-red"
                onClick={() => setOpenRegister(true)}
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>
      <Transition.Root show={openLogin} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpenLogin}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-center sm:items-start">
                    <div className="mt-3 md:w-96 text-center sm:mt-0 sm:text-left">
                      <div className="mt-2"></div>
                      <div className="min-h-full flex items-center justify-center sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8">
                          <div>
                            <img
                              className="mx-auto h-12 w-auto"
                              src="/logo.png"
                              alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-red">
                              Login
                            </h2>
                          </div>
                          <form
                            className="mt-8 space-y-6"
                            action="/"
                            method="post"
                          >
                            <div className="-space-y-px">
                              <div className="mb-4">
                                <label
                                  htmlFor="email-address"
                                  className="sr-only"
                                >
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
                                onClick={() => toggleLoggedIn()}
                                type="button"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                                  onClick={notRegistered}
                                  className="font-bold"
                                >
                                  Click Here
                                </button>
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={openRegister} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpenRegister}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-center sm:items-start">
                    <div className="mt-3 md:w-96 text-center sm:mt-0 sm:text-left">
                      <div className="mt-2"></div>
                      <div className="min-h-full flex items-center justify-center sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8">
                          <div>
                            <img
                              className="mx-auto h-12 w-auto"
                              src="/logo.png"
                              alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-red">
                              Register
                            </h2>
                          </div>
                          <form
                            className="mt-8 space-y-6"
                            action="/signin"
                            method="POST"
                          >
                            <input
                              type="hidden"
                              name="remember"
                              defaultValue="true"
                            />
                            <div className="-space-y-px">
                              <div>
                                <label
                                  htmlFor="email-address"
                                  className="sr-only"
                                >
                                  Email address
                                </label>
                                <input
                                  id="email-address"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  className="appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm mb-4"
                                  placeholder="Email"
                                />
                              </div>
                              <div>
                                <label htmlFor="full-name" className="sr-only">
                                  Full Name
                                </label>
                                <input
                                  id="email-address"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  className="appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm mb-4"
                                  placeholder="Full Name"
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
                                  required
                                  className="appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                                  placeholder="Password"
                                />
                              </div>
                            </div>

                            <div className="text-center mt-4">
                              <button
                                onClick={() => toggleLoggedIn()}
                                type="button"
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
                                  onClick={registered}
                                  className="font-bold"
                                >
                                  Click Here
                                </button>
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Navbar;
