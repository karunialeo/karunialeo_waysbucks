import { useState, useEffect } from "react";
import { globalTitle } from "../components/App";
import { API } from "../config/api";
import { useParams } from "react-router-dom";
import formatThousands from "format-thousands";
import { CheckList, uploads } from "../exports";

export default function ProductDesc({ item }) {
  let { id } = useParams();

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

  const handleClick = () => {
    const checkedTopping = toppings.filter(
      (topping) => topping.checked === true
    );

    console.log(checkedTopping);
  };

  useEffect(() => {
    getToppings();
    getProduct(id);
    return () => {
      setProduct({});
      setToppings({});
    };
  }, []);

  return (
    <>
      <div className="mx-8 lg:pt-10 pb-20 lg:mx-32 lg:flex">
        <div className="img my-8 lg:my-0 w-full lg:w-5/12">
          <img
            src={uploads + product.image}
            alt="product"
            className="w-full lg:w-96 rounded-2xl"
          />
        </div>
        <div className="text w-full lg:w-7/12">
          <div className="mb-10">
            <h1 className="text-brand-red text-5xl font-extrabold font-['Avenir-Black'] mb-4">
              {product.title}
            </h1>
            <p className="text-brand-red text-xl">
              Rp {formatThousands(product.price, ".")},-
            </p>
          </div>
          <div className="mb-10 lg:mb-14">
            <h4 className="text-brand-red text-xl font-bold">Topping</h4>
            <div className="flex flex-wrap items-center my-10 text-center text-brand-red">
              {toppings.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 w-1/4 flex justify-center relative"
                >
                  <CheckList
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10 lg:mb-10 flex justify-between text-xl font-bold text-brand-red">
            <span>Total</span>
            <span>Rp {formatThousands(product.price, ".")},-</span>
          </div>
          <button
            onClick={handleClick}
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-brand-red"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
