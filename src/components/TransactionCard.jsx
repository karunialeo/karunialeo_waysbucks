import Transactions from "../tempDatabase/Transactions";

import thousandSeparator from "../utils/thousandSeparator";

export default function TransactionCard() {
  return (
    <div>
      <h3 className="text-3xl font-['Avenir-Black'] font-extrabold text-brand-red">
        My Transaction
      </h3>
      <div className="lg:flex justify-between my-8 bg-brand-pink rounded-lg p-4">
        <div className="w-full lg:w-3/4 space-y-4 mb-4 lg:mb-0">
          {Transactions.map((item) => (
            <div className="flex">
              <img
                src="/img/products/product-1.png"
                alt="product"
                className="w-3/12"
              />
              <div className="text-brand-red font-['Avenir-Book'] space-y-4 ml-2">
                <h4 className="text-md font-['Avenir-Black'] font-bold">
                  {item.productName}
                </h4>
                <p className="text-xs">{item.orderDate}</p>
                <p className="text-xs">Topping : {item.topping}</p>
                <p className="text-sm">
                  Price : Rp {thousandSeparator(item.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:space-y-4">
          <img src="/logo.png" alt="" className="" />
          <img src="/img/qr.png" alt="" />
          <div className="space-y-7">
            <p className="text-sm bg-blue-200 text-blue-500 font-bold px-5 py-1 rounded-md">
              On The Way
            </p>
            <p className="text-xs text-yellow-900 font-bold">
              Sub Total : Rp{" "}
              {thousandSeparator(
                Transactions.map((item) => item.price).reduce(
                  (prev, next) => prev + next
                )
              )}
              ,-
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
