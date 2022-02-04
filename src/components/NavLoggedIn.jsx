import { Link } from "react-router-dom";
import Transactions from "../tempDatabase/Transactions";

function NavLoggedIn() {
  return (
    <>
      <nav className="mx-4 lg:mx-20 mt-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
        <div className="flex items-center">
          <Link to="/my-cart" className="relative">
            <img
              src="/img/shopping-basket.png"
              alt="shopping-basket"
              className="mx-8"
            />
            <div className="w-5 h-5 text-xs text-white font-bold bg-red-600 rounded-full absolute right-6 -top-1 flex justify-center items-center">
              {Transactions.length}
            </div>
          </Link>
          <Link to="/customer" className="">
            <img
              src="/img/user.png"
              alt="user"
              className="h-14 w-14 object-cover rounded-full border-2 border-brand-red"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavLoggedIn;
