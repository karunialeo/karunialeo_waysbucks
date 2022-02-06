import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

function PaymentForm() {
  const [open, setOpen] = useState(false);

  function successPrompt() {
    setOpen(!open);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }

  const cancelButtonRef = useRef(null);

  return (
    <>
      <form action="/my-cart" method="post">
        <div className="space-y-6 mb-8">
          <input
            type="text"
            name="userName"
            placeholder="Name"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <input
            type="tel"
            name="userPhone"
            placeholder="Phone"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <input
            type="number"
            name="userPostCode"
            placeholder="Post Code"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <textarea
            name="userAddress"
            id="userAddress"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
            rows={5}
            placeholder="Address"
          ></textarea>
        </div>
        <button
          onClick={() => {
            successPrompt();
          }}
          type="button"
          className="w-full py-2 rounded-md text-white text-center bg-brand-red"
        >
          Pay
        </button>
      </form>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
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
              <div className="inline-block font-['Avenir-Book'] text-center text-green-500 align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                <p className="my-6 lg:mx-12 text-lg">
                  Thank you for ordering in us, please wait to verify you order
                </p>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default PaymentForm;
