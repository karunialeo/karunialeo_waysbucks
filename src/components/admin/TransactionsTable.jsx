import thousandSeparator from "../../utils/thousandSeparator";
import Customers from "../../tempDatabase/Customers";

export default function TransactionsTable(props) {
  function checkStatus(status) {
    if (status == "Waiting Approve") {
      return "text-yellow-500";
    } else if (status == "Success") {
      return "text-green-500";
    } else if (status == "Cancel") {
      return "text-red-500";
    } else if (status == "On The Way") {
      return "text-cyan-500";
    }
  }
  if (props.isAdmin) {
    return (
      <div className="mx-32 my-10 font-['Avenir-Book']">
        <h3 className="text-brand-red text-3xl font-['Avenir-Black'] mb-10">
          Income Transaction
        </h3>
        <div className="flex justify-center">
          <table className="w-80 divide-y divide-x divide-gray-300 border-2">
            <thead className="bg-gray-200">
              <tr className="divide-x divide-gray-300">
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text- tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Postcode
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Income
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-center text-base font-['Avenir-Black'] text-black tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Customers.map((customer) => (
                <tr className="divide-x divide-gray-300" key={customer.email}>
                  <td className="px-4 py-2 whitespace-nowrap">1</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {customer.name}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {customer.address}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {customer.postcode}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    Rp {thousandSeparator(customer.income)},-
                  </td>
                  <td
                    className={
                      checkStatus(customer.status) +
                      " px-4 py-2 whitespace-nowrap"
                    }
                  >
                    {customer.status}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap space-x-2">
                    <span className="px-4 inline-flex text-xs leading-5 font-semibold rounded-md bg-button-cancel text-white">
                      Cancel
                    </span>
                    <span className="px-4 inline-flex text-xs leading-5 font-semibold rounded-md bg-button-confirm text-white">
                      Approve
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
