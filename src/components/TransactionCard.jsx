import { useContext } from "react";
import { LogoWhite, QRImg } from "../exports/exportImages";
import { uploads } from "../exports";

import formatThousands from "format-thousands";
import { OrderContext } from "../contexts/OrderContext";

import dateFormat from "dateformat";

export default function TransactionCard() {
  const [order, setOrder] = useContext(OrderContext);

  return (
    <>
      <div className="w-full lg:w-8/12 space-y-4 mb-4 lg:mb-0">
        {order.map((item) => (
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
          <p className="text-sm bg-blue-200 text-blue-500 font-bold px-5 py-1 rounded-md">
            On The Way
          </p>
          <p className="text-xs text-yellow-900 font-bold">
            Sub Total : Rp{" "}
            {formatThousands(
              order
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
