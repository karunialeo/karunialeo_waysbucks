import { useState } from "react/cjs/react.development";
import Toppings from "./Toppings";

export default function ProductDesc() {
  const [price, setPrice] = useState(31000);

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }

  return (
    <>
      <div className="mx-8 lg:pt-10 pb-20 lg:mx-32 lg:flex">
        <div className="img my-8 lg:my-0 w-full lg:w-5/12">
          <img
            src="/img/products/product-1.png"
            alt="product"
            className="w-full lg:w-96"
          />
        </div>
        <div className="text w-full lg:w-7/12">
          <div className="mb-10 lg:mb-20">
            <h1 className="text-brand-red text-5xl font-extrabold font-['Avenir-Black'] mb-4">
              Ice Coffee Palm Sugar
            </h1>
            <p className="text-brand-red text-xl">Rp 27.000</p>
          </div>
          <div className="mb-10 lg:mb-14">
            <h4 className="text-brand-red text-xl font-bold">Toping</h4>
            <div className="flex flex-wrap items-center text-center text-brand-red">
              {Toppings.map((item) => (
                <Topping
                  toppingName={item.toppingName}
                  index={item.toppingIndex}
                />
              ))}
            </div>
          </div>
          <div className="mb-10 lg:mb-10 flex justify-between text-xl font-bold text-brand-red">
            <span>Total</span>
            <span>Rp {numberWithCommas(price)}</span>
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-brand-red">
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
}

function Topping(props) {
  return (
    <button
      onClick={() => console.log("test")}
      className="w-1/2 lg:w-1/4 mt-10 flex flex-col items-center"
    >
      <img
        src={`/img/toppings/topping-${props.index}.png`}
        alt=""
        className="hover:opacity-75"
      />
      <h4 className="mt-3 text-sm" key={props.index}>
        {props.toppingName}
      </h4>
    </button>
  );
}
