export default function AddTopping(props) {
  if (props.isAdmin) {
    return (
      <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-28 my-10">
        <div className="w-full lg:w-7/12">
          <h4 className="text-3xl lg:text-5xl font-bold font-['Avenir-Black'] text-brand-red">
            Add New Topping
          </h4>
          <form
            action="/"
            method="get"
            className="space-y-8 my-10 font-['Avenir-Book'] text-center"
          >
            <input
              type="text"
              name="addToppingName"
              placeholder="Name Product"
              className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
            />
            <input
              type="text"
              name="addToppingPrice"
              placeholder="Price"
              className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
            />
            <label
              htmlFor="addToppingPhoto"
              className="block text-left w-full p-3 outline outline-2 cursor-pointer outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
            >
              <div className="flex justify-between">
                <p className="text-sm  opacity-100 font-normal text-gray-400">
                  Photo Topping
                </p>
                <input
                  id="addToppingPhoto"
                  name="addToppingPhoto"
                  type="file"
                  className="sr-only"
                />
                <img className="h-5 mr-2" src="/img/upload.png" alt="" />
              </div>
            </label>
            <button className="w-full lg:w-9/12 py-2 rounded-md text-white text-center bg-brand-red">
              Add Topping
            </button>
          </form>
        </div>
        <div className="w-full lg:w-4/12 flex justify-center items-center">
          <img
            src="/img/toppings/topping-2.png"
            alt="toppings"
            className="w-40 lg:w-64"
          />
        </div>
      </div>
    );
  }
}
