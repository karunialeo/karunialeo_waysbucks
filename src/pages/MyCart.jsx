import { useEffect } from "react";
import { globalTitle } from "../components/App";
import { Link } from "react-router-dom";
import Transactions from "../tempDatabase/Transactions";
import thousandSeparator from "../utils/thousandSeparator";
import PaymentForm from "../components/PaymentForm";

function MyCart() {
  useEffect(() => {
    document.title = globalTitle + "My Cart";
  }, []);

  return (
    <div className="text-brand-red font-['Avenir-Book'] mx-4 lg:mx-28 mt-8 mb-20">
      <h4 className="font-['Avenir-Black'] font-bold text-3xl mb-8">My Cart</h4>
      <p className="mb-5">Review Your Order</p>
      <div className="lg:flex justify-between">
        <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
          <hr className="border-1 border-brand-red" />
          {Transactions.length > 0 ? (
            Transactions.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div className="flex my-4 gap-x-4">
                  <img
                    src={item.image}
                    className="h-20 w-20 object-cover rounded-lg"
                    alt="product"
                  />
                  <div className="flex flex-col justify-center gap-y-2">
                    <h4 className="font-bold">{item.productName}</h4>
                    <p>Toping : {item.topping}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end gap-y-2">
                  <h4>Rp {thousandSeparator(item.price)},-</h4>
                  <Link to="/my-cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center my-6">Cart is empty.</h1>
          )}
          <hr className="border-1 border-brand-red mb-12" />
          <div className="flex justify-between space-x-4 lg:space-x-0">
            <div className="w-7/12 lg:w-1/2">
              <hr className="border-1 border-brand-red mb-5" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    Rp{" "}
                    {Transactions.length > 0
                      ? thousandSeparator(
                          Transactions.map((item) => item.price).reduce(
                            (prev, next) => prev + next
                          )
                        )
                      : 0}
                    ,-
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Qty</span>
                  <span>
                    {Transactions.length > 0 ? Transactions.length : 0}
                  </span>
                </div>
              </div>
              <hr className="border-brand-red my-5" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>
                  Rp{" "}
                  {Transactions.length > 0
                    ? thousandSeparator(
                        Transactions.map((item) => item.price).reduce(
                          (prev, next) => prev + next
                        )
                      )
                    : 0}
                  ,-
                </span>
              </div>
            </div>
            <button className="bg-pink-100 w-5/12 lg:w-4/12 border-2 border-brand-red rounded-lg flex flex-col items-center justify-center gap-y-4">
              <img src="/img/invoices.png" alt="invoices" />
              <p className="text-gray-500">Attach of Transaction</p>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}

export default MyCart;
