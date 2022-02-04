export default function PaymentForm() {
  return (
    <form action="/my-cart" method="post">
      <div className="space-y-6 mb-8">
        <input
          type="text"
          name="userName"
          placeholder="Name"
          className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
        />
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
        />
        <input
          type="tel"
          name="userPhone"
          placeholder="Phone"
          className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
        />
        <input
          type="number"
          name="userPostCode"
          placeholder="Post Code"
          className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
        />
        <textarea
          name="userAddress"
          id="userAddress"
          className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          rows={5}
          placeholder="Address"
        ></textarea>
      </div>
      <button className="w-full py-2 rounded-md text-white text-center bg-brand-red">
        Pay
      </button>
    </form>
  );
}
