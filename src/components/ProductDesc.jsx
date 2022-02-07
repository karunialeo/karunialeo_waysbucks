import { useState } from "react";
import { IceCoffeePalmSugar } from "../exports/exportImages";
import Toppings from "../tempDatabase/Toppings";
import thousandSeparator from "../utils/thousandSeparator";

export default function ProductDesc({ item }) {
  const [price, setPrice] = useState(27000);
  const [useTopping, setUseTopping] = useState(false);

  function toggleAddTopping() {
    if (!useTopping) {
      setPrice(price + 4000);
      setUseTopping(true);
    } else {
      setPrice(price - 4000);
      setUseTopping(false);
    }
  }

  return (
    <>
      <div className="mx-8 lg:pt-10 pb-20 lg:mx-32 lg:flex">
        <div className="img my-8 lg:my-0 w-full lg:w-5/12">
          <img
            src={IceCoffeePalmSugar}
            alt="product"
            className="w-full lg:w-96"
          />
        </div>
        <div className="text w-full lg:w-7/12">
          <div className="mb-10 lg:mb-14">
            <h1 className="text-brand-red text-5xl font-extrabold font-['Avenir-Black'] mb-4">
              Ice Coffee Palm Sugar
            </h1>
            <p className="text-brand-red text-xl">
              Rp {thousandSeparator(price)},-
            </p>
          </div>
          <div className="mb-10 lg:mb-14">
            <h4 className="text-brand-red text-xl font-bold">Toping</h4>
            <div className="flex flex-wrap items-center text-center text-brand-red">
              {Toppings.map((item) => (
                <>
                  <button
                    onClick={toggleAddTopping}
                    type="button"
                    className="w-1/2 lg:w-1/4 mt-10 flex flex-col items-center relative"
                  >
                    <img src={item.image} alt="" className="hover:opacity-75" />
                    <h4 className="mt-3 text-sm" key={item.toppingIndex}>
                      {item.toppingName}
                    </h4>
                    {useTopping ? <CheckTopping /> : null}
                  </button>
                </>
              ))}
            </div>
          </div>
          <div className="mb-10 lg:mb-10 flex justify-between text-xl font-bold text-brand-red">
            <span>Total</span>
            <span>Rp {thousandSeparator(price)},-</span>
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-brand-red">
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
}

function CheckTopping() {
  return (
    <div className="absolute right-8 bottom-8">
      <div className="bg-green-600 text-white text-xs rounded-full">
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  );
}
