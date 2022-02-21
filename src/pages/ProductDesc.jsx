import { useState, useEffect } from "react";
import { IceCoffeePalmSugar } from "../exports/exportImages";
import { globalTitle } from "../components/App";
import { API } from "../config/api";
import { useParams } from "react-router-dom";
import formatThousands from "format-thousands";

export default function ProductDesc({ item }) {
  let { id } = useParams();

  const [price, setPrice] = useState(27000);
  const [product, setProduct] = useState({});
  const [toppings, setToppings] = useState([]);
  const [useTopping, setUseTopping] = useState(false);

  useEffect(() => {
    document.title = globalTitle + "Product";
  }, []);

  const getProduct = async (id) => {
    try {
      const response = await API.get("/product/" + id);
      // Store product data to useState variabel
      setProduct(response.data.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const getToppings = async () => {
    try {
      const response = await API.get("/toppings");
      // Store product data to useState variabel
      setToppings(response.data.data.toppings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToppings();
    getProduct(id);
  }, []);

  function toggleAddTopping() {
    if (useTopping == false) {
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
            src={"http://localhost:5000/uploads/" + product.image}
            alt="product"
            className="w-full lg:w-96 rounded-2xl"
          />
        </div>
        <div className="text w-full lg:w-7/12">
          <div className="mb-10 lg:mb-14">
            <h1 className="text-brand-red text-5xl font-extrabold font-['Avenir-Black'] mb-4">
              {product.title}
            </h1>
            <p className="text-brand-red text-xl">
              Rp {formatThousands(product.price, ".")},-
            </p>
          </div>
          <div className="mb-10 lg:mb-14">
            <h4 className="text-brand-red text-xl font-bold">Toping</h4>
            <div className="flex flex-wrap items-center text-center text-brand-red">
              {toppings.map((item, index) => (
                <button
                  onClick={() => toggleAddTopping()}
                  type="button"
                  className="w-1/2 lg:w-1/4 mt-10 flex flex-col items-center relative"
                  key={index}
                >
                  <img src={item.image} alt="" className="hover:opacity-75" />
                  <h4 className="mt-3 text-sm">{item.title}</h4>
                  {useTopping ? <CheckTopping /> : null}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-10 lg:mb-10 flex justify-between text-xl font-bold text-brand-red">
            <span>Total</span>
            <span>Rp {formatThousands(price, ".")},-</span>
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
