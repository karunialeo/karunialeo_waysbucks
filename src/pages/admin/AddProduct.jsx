import { useEffect } from "react";
import { globalTitle } from "../../components/App";

export default function AddProduct() {
  useEffect(() => {
    document.title = globalTitle + "Add Product";
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-28 my-10">
      <div className="w-full lg:w-7/12">
        <h4 className="text-3xl lg:text-5xl font-bold font-['Avenir-Black'] text-brand-red">
          Add New Product
        </h4>
        <form
          action="/"
          method="get"
          className="space-y-8 my-10 font-['Avenir-Book'] text-center"
        >
          <input
            type="text"
            name="addProductName"
            placeholder="Name Product"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <input
            type="text"
            name="addProductPrice"
            placeholder="Price"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <label
            htmlFor="addProductPhoto"
            className="block text-left w-full p-3 outline outline-2 cursor-pointer outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          >
            <div className="flex justify-between">
              <p className="text-sm  opacity-100 font-normal text-gray-400">
                Photo Product
              </p>
              <input
                id="addProductPhoto"
                name="addProductPhoto"
                type="file"
                className="sr-only"
              />
              <img className="h-5 mr-2" src="/img/upload.png" alt="" />
            </div>
          </label>
          <button className="w-full lg:w-9/12 py-2 rounded-md text-white text-center bg-brand-red">
            Add Product
          </button>
        </form>
      </div>
      <div className="w-full lg:w-4/12 mb-8 lg:mb-0 flex justify-center">
        <img
          src="/img/products/product-4.png"
          alt="product"
          className="w-9/12 lg:w-full"
        />
      </div>
    </div>
  );
}
