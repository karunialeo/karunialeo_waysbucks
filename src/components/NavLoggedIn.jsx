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
        <a href="/">
          <img src="/logo.png" alt="" />
        </a>
        <div className="flex items-center">
          <a href="">
            <img
              src="/img/shopping-basket.png"
              alt="shopping-basket"
              className="mx-8"
            />
          </a>
          <a href="/customer" className="">
            <img
              src="/img/user.png"
              alt="user"
              className="h-14 w-14 rounded-full border-2 border-brand-red"
            />
          </a>
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
