export default function ProductDesc() {
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
            <div className="flex flex-wrap items-center">
              <div className="w-1/2 lg:w-1/4 mt-10 flex flex-col cursor-pointer hover:opacity-75 items-center">
                <img src="/img/toppings/topping-1.png" alt="" />
                <h4 className="text-center mt-3">Bubble Tea Gelatin</h4>
              </div>
              <div className="w-1/2 lg:w-1/4 mt-10 flex flex-col cursor-pointer hover:opacity-75 items-center">
                <img src="/img/toppings/topping-2.png" alt="" />
                <h4 className="text-center mt-3">Mango</h4>
              </div>
              <div className="w-1/2 lg:w-1/4 mt-10 flex flex-col cursor-pointer hover:opacity-75 items-center">
                <img src="/img/toppings/topping-3.png" alt="" />
                <h4 className="text-center mt-3">Green Coconut</h4>
              </div>
              <div className="w-1/2 lg:w-1/4 mt-10 flex flex-col cursor-pointer hover:opacity-75 items-center">
                <img src="/img/toppings/topping-4.png" alt="" />
                <h4 className="text-center mt-3">Boba Mango</h4>
              </div>
              <div className="w-1/2 lg:w-1/4 mt-10 flex flex-col cursor-pointer hover:opacity-75 items-center">
                <img src="/img/toppings/topping-5.png" alt="" />
                <h4 className="text-center mt-3">Blueberry Boba</h4>
              </div>
              <div className="w-1/2 lg:w-1/4 mt-10 flex flex-col cursor-pointer hover:opacity-75 items-center">
                <img src="/img/toppings/topping-3.png" alt="" />
                <h4 className="text-center mt-3">Kiwi Popping Pearl</h4>
              </div>
              <div className="w-1/2 lg:w-1/4 mt-10 flex flex-col cursor-pointer hover:opacity-75 items-center">
                <img src="/img/toppings/topping-7.png" alt="" />
                <h4 className="text-center mt-3">Matcha Cantaloupe</h4>
              </div>
              <div className="w-1/2 lg:w-1/4 mt-10 flex flex-col cursor-pointer hover:opacity-75 items-center">
                <img src="/img/toppings/topping-8.png" alt="" />
                <h4 className="text-center mt-3">Strawberry Popping</h4>
              </div>
            </div>
          </div>
          <div className="mb-10 lg:mb-10 flex justify-between text-xl font-bold text-brand-red">
            <span>Total</span>
            <span>Rp 31.000</span>
          </div>
          <button className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-brand-red">
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
}
