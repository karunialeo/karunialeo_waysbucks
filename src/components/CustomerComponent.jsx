export default function CustomerComponent() {
  return (
    <div className="flex justify-between mx-28 my-10">
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
        <div></div>
      </div>
    </div>
  );
}
