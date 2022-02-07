import { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  BasketIcon,
  DrinkIcon,
  LogoutIcon,
  LogoWhite,
  ToppingIcon,
  userIcon,
  UserImg,
} from "../exports/exportImages";
import Transactions from "../tempDatabase/Transactions";

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <nav className="mx-4 lg:mx-20 mt-4 flex justify-between items-center">
      <Link to="/">
        <img src={LogoWhite} alt="" />
      </Link>
      <div className="w-1/3 space-x-2 justify-end flex items-center relative">
        <Link to="/my-cart" className="relative">
          <img src={BasketIcon} alt="shopping-basket" />
          <div className="w-5 h-5 text-xs text-white font-bold bg-red-600 rounded-full absolute right-6 -top-1 flex justify-center items-center">
            {Transactions.length}
          </div>
        </Link>
        <Menu as="div" className="relative z-10">
          <div>
            <Menu.Button>
              <span className="sr-only">Open user menu</span>
              <img
                src={UserImg}
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
              <Menu.Item>
                <Link
                  to="/add-product"
                  className="p-4 flex items-center hover:bg-gray-100"
                >
                  <img src={DrinkIcon} className="w-5 mr-2" alt="drink" />
                  Add Product
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/add-topping"
                  className="p-4 flex items-center hover:bg-gray-100"
                >
                  <img src={ToppingIcon} className="w-5 mr-2" alt="topping" />
                  Add Topping
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/transactions"
                  className="p-4 flex items-center hover:bg-gray-100"
                >
                  <img src={userIcon} className="w-5 mr-2" alt="transactions" />
                  Transactions
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/profile"
                  className="p-4 flex items-center hover:bg-gray-100"
                >
                  <img src={userIcon} className="w-5 mr-2" alt="profile" />
                  My Profile
                </Link>
              </Menu.Item>
              <hr />
              <Menu.Item>
                <div className="p-4 flex items-center hover:bg-gray-100 cursor-pointer">
                  <img src={LogoutIcon} className="w-5 mr-2" alt="logout" />
                  Logout
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <button
          type="button"
          className="rounded px-3 lg:px-5 py-1 text-brand-red border-2 text-[Product-Sans] border-brand-red box-border"
          onClick={() => setOpenLogin(!openLogin)}
        >
          Login
        </button>
        <button
          type="button"
          className="rounded px-3 lg:px-5 py-1 text-white border-2 border-brand-red bg-brand-red"
          onClick={() => setOpenRegister(!openRegister)}
        >
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
