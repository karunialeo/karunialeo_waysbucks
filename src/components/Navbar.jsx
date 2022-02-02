import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AuthForm from "./AuthForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  function loggedIn() {
    setOpenLogin(true);
  }

  const cancelButtonRef = useRef(null);

  return (
    <>
      <nav className="mx-4 lg:mx-20 mt-4 flex justify-between items-center">
        <a href="/loggedin">
          <img src="/logo.png" alt="" />
        </a>
        <div className="space-x-5">
          {isLogin ? (
            <div className="flex items-center">
              <a href="">
                <img
                  src="/img/shopping-basket.png"
                  alt="shopping-basket"
                  className="mx-8"
                />
              </a>
              <a href="">
                <img src="/img/user.png" alt="user" />
              </a>
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
          <AuthForm authen="Login" authComp={<LoginForm />} />
        </Dialog>
      </Transition.Root>
      <Transition.Root show={openRegister} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpenRegister}
        >
          <AuthForm authen="Register" authComp={<RegisterForm />} />
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Navbar;
