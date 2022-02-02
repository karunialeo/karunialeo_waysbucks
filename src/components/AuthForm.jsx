import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function AuthForm(props) {
  return (
    <>
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
                          {props.authen}
                        </h2>
                      </div>
                      {props.authComp}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </div>
    </>
  );
}
