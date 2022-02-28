import { useContext } from "react";
import formatThousands from "format-thousands";
import dateFormat from "dateformat";
import { API } from "../config/api";

import { UserContext } from "../contexts/UserContext";

import { LogoWhite, QRImg } from "../exports/exportImages";
import { uploads } from "../exports";
import { ProcessOrderContext } from "../contexts/OrderContext";
import { TransactionContext } from "../contexts/TransactionContext";

export default function TransactionCard() {
  const [state, dispatch] = useContext(UserContext);
  const [processOrder, setProcessOrder] = useContext(ProcessOrderContext);
  const [transaction, setTransaction] = useContext(TransactionContext);

  function checkStatus(status) {
    if (status == "Waiting Approve") {
      return "text-yellow-500 bg-yellow-100";
    } else if (status == "Success") {
      return "text-green-500 bg-green-200";
    } else if (status == "Cancel") {
      return "text-red-500 bg-red-200";
    } else if (status == "On The Way") {
      return "text-cyan-500 bg-cyan-200";
    }
  }

  return (
    <>
      <div className="w-full lg:w-8/12 space-y-4 mb-4 lg:mb-0">
        {processOrder.map((item) => (
          <div className="flex" key={item.id}>
            <img
              src={uploads + item.product.image}
              alt="product"
              className="w-3/12"
            />
            <div className="text-brand-red font-['Avenir-Book'] space-y-4 ml-2">
              <h4 className="text-md font-['Avenir-Black'] font-bold">
                {item.product.title} X {item.qty}
              </h4>
              <p className="text-xs">
                {dateFormat(item.createdAt, "dddd, mmmm dd, yyyy")}
              </p>
              <p className="text-xs">
                {dateFormat(item.createdAt, "h:MM:ss TT")}
              </p>
              <p className="text-xs">Topping : {item.topping.title}</p>
              <p className="text-sm">
                Price : Rp {formatThousands(item.price, ".")},-
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:space-y-4">
        <img src={LogoWhite} alt="" className="" />
        <img src={QRImg} alt="" />
        <div className="space-y-7">
          <p
            className={
              checkStatus(transaction.status) +
              " text-sm text-center font-bold px-5 py-1 rounded-md"
            }
          >
            {transaction.status}
          </p>
          <p className="text-xs text-center text-yellow-900 font-bold">
            Sub Total : Rp{" "}
            {formatThousands(
              processOrder
                .map((item) => item.price)
                .reduce((prev, next) => prev + next),
              "."
            )}
            ,-
          </p>
        </div>
      </div>
    </>
  );
}
