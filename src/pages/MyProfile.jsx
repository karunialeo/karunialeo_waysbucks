import { useContext, useEffect, useState } from "react";
import { globalTitle } from "../components/App";
import { UserImg } from "../exports/exportImages";
import TransactionCard from "../components/TransactionCard";
import { API } from "../config/api";
import { UserContext } from "../contexts/UserContext";
import { LoginContext } from "../contexts/AuthContext";

export default function MyProfile() {
  const [user, setUser] = useState({});

  const [state, dispatch] = useContext(UserContext);

  const getUser = async () => {
    try {
      const response = await API.get("/user/" + state.user.id);
      setUser(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = globalTitle + "My Profile";
    getUser();
  }, []);

  return (
    <div className="lg:flex justify-between mx-4 lg:mx-28 my-10">
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h3 className="text-3xl font-['Avenir-Black'] font-extrabold text-brand-red mb-8">
          My Profile
        </h3>
        <div className="flex">
          <div className="mr-4 lg:mr-8">
            <img src={UserImg} alt="" />
          </div>
          <div className="space-y-4">
            <p className="text-yellow-700 font-bold">Full Name</p>
            <p>{user.fullname}</p>
            <p className="text-yellow-700 font-bold">Email</p>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div>
          <h3 className="text-3xl font-['Avenir-Black'] font-extrabold text-brand-red">
            My Transaction
          </h3>
          <div className="lg:flex justify-between my-8 bg-brand-pink rounded-lg p-4">
            <TransactionCard />
          </div>
        </div>
      </div>
    </div>
  );
}
