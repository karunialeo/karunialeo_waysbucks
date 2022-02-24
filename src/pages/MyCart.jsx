import { useContext, useEffect } from "react";
import { globalTitle } from "../components/App";
import { Link } from "react-router-dom";
import thousandSeparator from "../utils/thousandSeparator";
import PaymentForm from "../components/PaymentForm";
import { InvoiceIcon } from "../exports/exportImages";
import { uploads } from "../exports";

import formatThousands from "format-thousands";
import { OrderContext } from "../contexts/OrderContext";
import { API } from "../config/api";
import { UserContext } from "../contexts/UserContext";

function MyCart() {
  const [order, setOrder] = useContext(OrderContext);
  const [state, dispatch] = useContext(UserContext)

  const getOrders = async () => {
    try {
      const response = await API.get(`/orders/${state.user.id}`);
      // Store order data to useState variabel
      setOrder(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      const response = await API.delete("/order/" + id);
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = globalTitle + "My Cart";
  }, []);

  return (
    <div className="text-brand-red font-['Avenir-Book'] mx-4 lg:mx-28 mt-8 mb-20">
      <h4 className="font-['Avenir-Black'] font-bold text-3xl mb-8">My Cart</h4>
      {order.length > 0 ? (
        <>
          <p className="mb-5">Review Your Order</p>
          <div className="lg:flex justify-between">
            <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
              <hr className="border-1 border-brand-red" />
              {order.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex my-4 gap-x-4">
                    <img
                      src={uploads + item.product.image}
                      className="h-20 w-20 object-cover rounded-lg"
                      alt="product"
                    />
                    <div className="flex flex-col justify-center gap-y-2">
                      <h4>
                        <span className="font-bold">{item.product.title}</span>{" "}
                        X {item.qty}
                      </h4>
                      <p>Topping : {item.topping.title}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-end gap-y-2">
                    <h4>Rp {formatThousands(item.price, ".")},-</h4>
                    <button type="button" onClick={() => deleteOrder(item.id)}>
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
                    </button>
                  </div>
                </div>
              ))}
              <hr className="border-1 border-brand-red mb-12" />
              <div className="flex justify-between space-x-4 lg:space-x-0">
                <div className="w-7/12 lg:w-1/2">
                  <hr className="border-1 border-brand-red mb-5" />
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>
                        Rp{" "}
                        {order.length > 0
                          ? thousandSeparator(
                              order
                                .map((item) => item.price)
                                .reduce((prev, next) => prev + next)
                            )
                          : 0}
                        ,-
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Qty</span>
                      <span>{order.length > 0 ? order.length : 0}</span>
                    </div>
                  </div>
                  <hr className="border-brand-red my-5" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      Rp{" "}
                      {order.length > 0
                        ? thousandSeparator(
                            order
                              .map((item) => item.price)
                              .reduce((prev, next) => prev + next)
                          )
                        : 0}
                      ,-
                    </span>
                  </div>
                </div>
                <button className="bg-pink-100 w-5/12 lg:w-4/12 border-2 border-brand-red rounded-lg flex flex-col items-center justify-center gap-y-4">
                  <img src={InvoiceIcon} alt="invoices" />
                  <p className="text-gray-500">Attach of Transaction</p>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-4/12">
              <PaymentForm />
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-2xl mb-4">Cart is Empty.</p>
          <Link to="/" className="hover:underline">
            Continue shopping.
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyCart;
