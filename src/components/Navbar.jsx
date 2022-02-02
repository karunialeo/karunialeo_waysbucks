import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AuthForm from "./AuthForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <nav className="mx-4 lg:mx-20 mt-4 flex justify-between items-center">
        <a href="/loggedin">
          <img src="/logo.png" alt="" />
        </a>
        <div className="flex">
          <button
            type="button"
            className="rounded px-3 lg:px-5 py-1 text-brand-red outline text-[Product-Sans] outline-brand-red mr-4 box-border"
            onClick={() => setOpenLogin(true)}
          >
            Login
          </button>
          <button
            type="button"
            className="rounded px-3 lg:px-5 py-1 text-white outline outline-brand-red bg-brand-red"
            onClick={() => setOpenRegister(true)}
          >
            Register
          </button>
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
