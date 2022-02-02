export default function CustomerComponent() {
  return (
    <div className="lg:flex justify-between mx-4 lg:mx-28 my-10">
      <div className="w-1/2">
        <h3 className="text-3xl font-['Avenir-Black'] font-extrabold text-brand-red mb-8">
          My Profile
        </h3>
        <div className="flex">
          <div className="mr-8">
            <img src="/img/user.png" alt="" />
          </div>
          <div className="space-y-4">
            <p className="text-yellow-700 font-bold">Full Name</p>
            <p>Karunia Leo Gultom</p>
            <p className="text-yellow-700 font-bold">Email</p>
            <p>karunia@mail.com</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h3 className="text-3xl font-['Avenir-Black'] font-extrabold text-brand-red">
          My Transaction
        </h3>
        <div className="flex justify-between my-8 bg-brand-pink rounded-lg p-4">
          <div className="w-3/4">
            <div className="flex">
              <img
                src="/img/products/product-1.png"
                alt="product"
                className="w-5/12"
              />
              <div className="text-brand-red font-['Avenir-Book'] space-y-4 ml-2">
                <h4 className="text-lg font-['Avenir-Black'] font-bold">
                  Ice Coffee Palm Sugar
                </h4>
                <p className="text-sm">Saturday, 5 March 2020</p>
                <p className="text-sm">
                  Toping : Bill Berry Boba, Bubble Tea Gelatin
                </p>
                <p className="text-md">Price : Rp 33.000</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/logo.png" alt="" />
            <img src="/img/qr.png" alt="" />
            <p className="text-sm bg-blue-200 text-blue-500 font-bold px-5 py-1 rounded-md">
              On The Way
            </p>
            <p className="text-xs text-yellow-900 font-bold">
              Sub Total : Rp 69.000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
