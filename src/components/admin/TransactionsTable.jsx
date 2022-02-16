import { Fragment, useRef, useState, useEffect } from "react";
import { globalTitle } from "../App";
import { Dialog, Transition } from "@headlessui/react";

import thousandSeparator from "../../utils/thousandSeparator";
import Customers from "../../tempDatabase/Customers";

import TransactionCard from "../TransactionCard";

export default function TransactionsTable() {
  useEffect(() => {
    document.title = globalTitle + "Transactions";
  }, []);

  const [openTransactionModal, setOpenTransactionModal] = useState(false);

  const cancelButtonRef = useRef(null);

  function checkStatus(status) {
    if (status == "Waiting Approve") {
      return "text-yellow-500";
    } else if (status == "Success") {
      return "text-green-500";
    } else if (status == "Cancel") {
      return "text-red-500";
    } else if (status == "On The Way") {
      return "text-cyan-500";
    }
  }

  function checkAction(status) {
    if (status == "Waiting Approve") {
      return (
        <>
          <span className="px-4 inline-flex text-xs leading-5 font-semibold rounded-md bg-button-cancel text-white">
            Cancel
          </span>
          <span className="px-4 inline-flex text-xs leading-5 font-semibold rounded-md bg-button-confirm text-white">
            Approve
          </span>
        </>
      );
    } else if (status == "Success") {
      return (
        <>
          <img src="/img/confirm.png" alt="" />
        </>
      );
    } else if (status == "Cancel") {
      return (
        <>
          <img src="/img/cancel.png" alt="" />
        </>
      );
    } else if (status == "On The Way") {
      return (
        <>
          <img src="/img/confirm.png" alt="" />
        </>
      );
    }
  }

  return (
    <>
      <div className="my-10 font-['Avenir-Book']">
        <h3 className="mx-32 text-brand-red text-3xl font-['Avenir-Black'] mb-10">
          Income Transaction
        </h3>
        <div className="mx-40 flex justify-center">
          <table className="w-full divide-y divide-x divide-gray-300 border-2">
            <thead className="bg-gray-200">
              <tr className="divide-x divide-gray-300">
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text- tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Postcode
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Income
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-center text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Customers.map((customer) => (
                <tr className="divide-x divide-gray-300" key={customer.email}>
                  <td className="px-4 py-2 whitespace-nowrap">1</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {customer.name}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {customer.address}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {customer.postcode}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <button
                      onClick={() =>
                        setOpenTransactionModal(!openTransactionModal)
                      }
                    >
                      Rp {thousandSeparator(customer.income)},-
                    </button>
                  </td>
                  <td
                    className={
                      checkStatus(customer.status) +
                      " px-4 py-2 whitespace-nowrap"
                    }
                  >
                    {customer.status}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap space-x-2 flex justify-center">
                    {checkAction(customer.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Transition.Root show={openTransactionModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpenTransactionModal}
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
                <div className="bg-white px-0 pt-0 pb-0 sm:p-0 sm:pb-0">
                  <div className="lg:flex justify-between bg-brand-pink rounded-lg p-4">
                    <TransactionCard />
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
