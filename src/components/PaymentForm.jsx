import { useContext, useState } from "react";
import { CartModalContext } from "../contexts/ModalContext";
import { UserContext } from "../contexts/UserContext";
import CartModal from "./modal/CartModal";

export default function PaymentForm() {
  const [open, setOpen] = useContext(CartModalContext);
  const [state, dispatch] = useContext(UserContext);
  const [form, setForm] = useState({
    fullname: state.user.fullname,
    email: state.user.email,
    phone: state.user.profile.phone ? state.user.profile.phone : "",
    address: state.user.profile.address ? state.user.profile.address : "",
  });

  const { fullname, email, phone, address } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setOpen(!open);
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form id="paymentForm" onSubmit={handleSubmit}>
        <div className="space-y-6 mb-8">
          <input
            type="text"
            name="fullname"
            placeholder="Name"
            onChange={handleChange}
            value={fullname}
            required
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            required
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            value={phone}
            required
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <textarea
            name="address"
            id="address"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
            rows={5}
            placeholder="Address"
            onChange={handleChange}
            value={address}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-md text-white text-center bg-brand-red"
        >
          Pay
        </button>
      </form>
      <CartModal />
    </>
  );
}
